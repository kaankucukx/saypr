import { Field } from 'formik'
import React from 'react'
import './index.scss'
import { Input } from 'antd'
import PropTypes from 'prop-types'

const FieldContainer = ({ name, flex, title, errorText, className, ...props }) => {
  return (
    <div className={`${className} field-container`} style={{ flex }}>
      {title && <span className={'field-container__field-title'}>{title}</span>}
      <Field component={Input} className={'field-container__field'} name={name} {...props} />
      {errorText && <p className={'field-container__error-text'}>{errorText}</p>}
    </div>
  )
}

FieldContainer.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  errorText: PropTypes.any,
  children: PropTypes.string,
  flex: PropTypes.string,
  className: PropTypes.string
}

export default FieldContainer
