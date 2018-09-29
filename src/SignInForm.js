import React from 'react'
import { Field, reduxForm } from 'redux-form'

let SignInForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Sign In</button>
    </form>
  )
}

SignInForm = reduxForm({
  // a unique name for the form
  form: 'signin'
})(SignInForm)

export default SignInForm