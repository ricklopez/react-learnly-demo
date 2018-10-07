import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, FormGroup } from 'reactstrap';

let EmailForm = props => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit} className={props.emailSubmit ? 'd-none' : ''} inline>
      <FormGroup className="mr-sm-2">

        <Field name="email" component="input" type="email" className="form-control" placeholder="email@example.com" />
      </FormGroup>
      <Button color="info" type="submit">Subscribe</Button>
    </Form>
  )
}

EmailForm = reduxForm({
  form: 'email'
})(EmailForm)

export default EmailForm;