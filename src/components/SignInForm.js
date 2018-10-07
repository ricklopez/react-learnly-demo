import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, FormGroup } from 'reactstrap';

let SignInForm = props => {
  const { handleSubmit } = props
  return (
    
    <Form onSubmit={handleSubmit} className="form-signin">
      <FormGroup className="mb-2 mb-sm-0">
        <Field name="email" component="input" type="email" className="form-control" placeholder="email@example.com" />
      </FormGroup>
    
      <FormGroup className="mb-2 mb-sm-0">
        <Field name="password" component="input" type="password" className="form-control" placeholder="password" />
      </FormGroup>
      <Button  outline color="info" type="submit" className="btn btn-lg btn-block" >Submit</Button>
    </Form>
  )
}

SignInForm = reduxForm({
  form: 'signin'
})(SignInForm)

export default SignInForm;