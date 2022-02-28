import React from "react";
// import FacebookLogin from "react-facebook-login";

const fbId = 605407710541954;
class Fboauth extends React.Component {
  state = { isSignedIn: false, token: null, email: null };

  // responseFacebook = response => {
  //   this.setState({
  //     isSignedIn: true,
  //     token: response.accessToken,
  //     email: response.email
  //   });
  //   console.log(this.state);
  // };

  // componentClicked = () => {};

  auth() {
    // let fbContent;
    // if (!this.state.isSignedIn) {
      // https://www.npmjs.com/package/react-facebook-login
      // fbContent = (
      //   <FacebookLogin
      //     appId="605407710541954"
      //     autoLoad={true}
      //     fields="email"
      //     onClick={this.componentClicked}
      //     callback={this.responseFacebook}
      //   />
      // );
      return (
        <div
          className="fb-login-button"
          data-width=""
          data-size="medium"
          data-button-type="login_with"
          data-layout="default"
          data-auto-logout-link="true"
          data-use-continue-as="false"
        />
      );

      // return (
      //   <div>
      //     {fbContent}
      //   </div>
      // );
    // }
  }

  render() {
    return (
      <div>
        {this.auth()}
      </div>
    );
  }
}

export default Fboauth;
