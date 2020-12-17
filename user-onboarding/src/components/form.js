import React from 'react'

export default function Form(props) {
  const {
    values,
    submit,
    inputChange,
    checkboxChange,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    checkboxChange(name, checked)
  }

  const onInputChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value)
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a User</h2>
        <button>submit</button>

        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>
        <label>name&nbsp;
          <input
            value={values.name}
            onChange={onInputChange}
            name='name'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='text'
          />
        </label>
        <label>Password
          <input
            value={values.password}
            onChange={onInputChange}
            name='password'
            type='text'
          />
        </label>
      </div>

      <div className='form-group checkboxes'>
        <label>Terms of Service
          <input 
          type="checkbox"
          name="Terms of Service"
          checked={values.tos.tos === true}
          onChange={onCheckboxChange}
          />
        </label>
      </div>
    </form>
  )
}
