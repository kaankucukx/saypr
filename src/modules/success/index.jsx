import React from 'react'
import { useSelector } from 'react-redux'
import { formSelector } from '../../selectors/form-selectors'

const Success = () => {
  const { Form } = useSelector(formSelector())
  return (
    <pre
      style={{
        fontSize: '30px'
      }}
    >
      <strong>Form State with the Provided Values</strong> ={' '}
      {JSON.stringify(Form, null, 2)}
    </pre>
  )
}

export default Success
