import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Form, FormGroup } from 'reactstrap';

let EmailForm = props => {
  const { handleSubmit } = props
  return (
    <Form inline onSubmit={handleSubmit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">

        <Field name="email" component="input" type="email" className="form-control" placeholder="email@example.com" />
      </FormGroup>
      <Button type="submit">Subscribe</Button>
    </Form>
  )
}

EmailForm = reduxForm({
  // a unique name for the form
  form: 'email'
})(EmailForm)

export default EmailForm