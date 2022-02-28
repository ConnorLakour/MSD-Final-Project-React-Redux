import React from "react";
import {connect} from 'react-redux';
//^import the actions and then map them to the helper connect fcn
import {signIn, signOut} from '../actions'
//https://developers.google.com/identity/sign-in/web/reference#authentication

class OAuth extends React.Component {



  componentDidMount() {

    //initalizes Google library
    window.gapi.load("client:auth2", () => {
      //init returns a promise
      window.gapi.client
        .init({
          clientId:
            "677802867987-6jjg5u1n1skqv4tgdcdnl8kbdjn3cou0.apps.googleusercontent.com",
          //request email only
          scope: "email"
        })
        .then(() => {
          //^get auth instance and assign it
          this.autho = window.gapi.auth2.getAuthInstance();
          
           // ^set user id
          this.props.setUserId(Number(this.autho.currentUser.get().getId()));

          //^update autho state in our redux store
          this.onAuthoChange(this.autho.isSignedIn.get());
          // console.log(this.props.isSignedIn)
          // console.log(Number(this.autho.currentUser.get().getId()))

          //^anytime the autho changes, google will call onAuthoChange
          this.autho.isSignedIn.listen(this.onAuthoChange);
        });
    });
  }


  //^calls one of the actions creaters 
  //^and changes the redux state obj
  onAuthoChange = (isSignedIn) => {
   if(isSignedIn){
     //pass userId
     this.props.signIn(this.autho.currentUser.get().getId())
   } else {
     this.props.signOut()
   }
  };

  onSignInClick =()=>{
    this.autho.signIn();
  }

  onSignOutClick = ()=>{
    this.autho.signOut()
  }

  auth() {
    if (!this.props.isSignedIn) {
      return (
        <button
          onClick={this.onSignInClick}
          className="ui red button"
        >
          <i className="google icon" />Sign In
        </button>
      );
    } else {
   
      return (
        <button
          onClick={this.onSignOutClick}
          className="ui green button"
        >
          <i className="google icon" />Sign Out
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        {this.auth()}
      </div>
    );
  }
}

//^state is coming from Reducers/index.js
const mapStateToProps = (state) =>{
  //^isSignedIn becomes accessible to all of OAuth comp. as: this.props.isSignedIn
  return {isSignedIn: state.autho.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(OAuth);
