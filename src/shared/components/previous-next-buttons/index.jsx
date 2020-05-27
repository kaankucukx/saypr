import React from 'react'
import { FormButton } from '../button'
import { useHistory } from 'react-router'
import PropTypes from 'prop-types'

export const SubmitButtons = ({ historyState, hidePreviousButton, prevButtonClasses, nextButtonClasses, nextButtonText, onClick }) => {
  const history = useHistory()
  return (
    <>
      {!hidePreviousButton &&
      <FormButton onClick={() => history.push(historyState)} className={`${prevButtonClasses}`} type={'primary'}>
        Previous
      </FormButton>
      }
      <FormButton className={`${nextButtonClasses}`} htmlType={'submit'} type={'primary'} onClick={onClick}>
        {nextButtonText}
      </FormButton>
    </>
  )
}

SubmitButtons.propTypes = {
  historyState: PropTypes.string.isRequired,
  hidePreviousButton: PropTypes.string,
  prevButtonClasses: PropTypes.string,
  nextButtonClasses: PropTypes.string,
  nextButtonText: PropTypes.string.isRequired,
  onClick: PropTypes.func
}
