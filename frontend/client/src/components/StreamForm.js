import React from "react";
import { Field, reduxForm } from "redux-form";
// https://redux-form.com/8.2.2/examples/syncvalidation/

class StreamForm extends React.Component {
  renderInput = ({ input, label,meta }) => {
    return (
      <div className="field">
        <label>
          {label}
        </label>
        <input {...input} />
  
        <div>{meta.error}</div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {/* handleSubmit comes from props of redux-forms and then need to pass */}
        {/* //my fcn as params and handleSubmit automatically passes the users input values as props  */}
        <form
          className="ui form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          {/* Field automatically passes props args to component */}
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <Field
            name="email"
            component={this.renderInput}
            label="Enter Email"
          />
          {/* <br /> */}

          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }

 
  /**
   * 
   * @param {*} values coming from user's input
   */
  onSubmit = values => {
    this.props.onSubmit(values);
  };
}

/**
 * 
 * @param {*} props input values
 * @returns error object
 */
const validate = props => {
  const errors = {};
  if (!props.title) {
    errors.title = "Title Required";
  } else if (!props.description) {
    errors.description = "Description Required";
  } else if (!props.email) {
    errors.email = "Email Required";
  }

  return errors;
};

//form = unique identifier for my form
export default reduxForm({ form: "streamForm", validate: validate })(
  StreamForm
);
