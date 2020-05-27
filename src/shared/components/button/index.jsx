import React from 'react'
import { StyledFormButton } from './styled'
import PropTypes from 'prop-types'

export const FormButton = ({ children, ...props }) =>
  (
    <StyledFormButton {...props}>
      {children}
    </StyledFormButton>
  )

FormButton.propTypes = {
  children: PropTypes.any
}
