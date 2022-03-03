import React from "react";
import { connect } from "react-redux";

import { fetchStream, editStream } from "../actions";
import StreamForm from "./StreamForm";

class EditStream extends React.Component {
  state = {redirect: false, stream: null}
  
  
  componentDidMount() {
     this.props.fetchStream(this.props.match.params.id);

    
  }

   onSubmit = formValues => {
   const {id, title, description} = formValues;
   this.props.editStream(id, formValues)
    // this.setState({redirect:true})
  };

  render() {

    return (
      <React.Fragment>
      {/* {this.state.redirect ? <Redirect to={`/stream/show/`} /> : null} */}
      <h2>Edit Stream</h2>
      <StreamForm
        //Field props will first check initialValues
        initialValues={this.props.streams}
        onSubmit={values => this.onSubmit(values)}
        />
    </React.Fragment>
  );
}
};

const mapStateToProps = (state, ownProps) => {
  return {streams: state.streams[ownProps.match.params.id]};
};

export default connect(mapStateToProps, { fetchStream, editStream })(EditStream);
