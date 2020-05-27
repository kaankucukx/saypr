import React, { useEffect } from 'react'
import { Form, Formik } from 'formik'
import { FieldContainer } from '../../../../shared/components/field-container/lazy'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { UpdateApplicationActionCreator, UpdateHeading } from '../../../../actions/form-state.actions'
import { STEP_TWO_FORMIK_FIELDS, StepTwoModel } from './constants'
import { StepTwoMainContainer } from './styled'
import { SubmitButtons } from '../../../../shared/components/previous-next-buttons'
import { formSelector } from '../../../../selectors/form-selectors'

const StepTwo = () => {
  const { Form: initialVals } = useSelector(formSelector()) // To prevent re-rendering.
  const dispatch = useDispatch()
  const history = useHistory()
  const updateState = (values) => dispatch(UpdateApplicationActionCreator(values, history.push('3')))
  useEffect(() => {
    dispatch(UpdateHeading('Provide us some details to get you started'))
  }, [dispatch])
  return (
    <StepTwoMainContainer>
      <Formik enableReinitialize initialValues={new StepTwoModel(initialVals)} onSubmit={updateState}>
        {({ values, touched, errors, handleChange, handleBlur }) =>
          (
            <Form className={'parent'}>
              {STEP_TWO_FORMIK_FIELDS.map((stepTwoFormik) => (
                <FieldContainer
                  key={stepTwoFormik.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[stepTwoFormik.name]}
                  errorText={touched[`${stepTwoFormik.name}`] && errors[`${stepTwoFormik.name}`]}
                  {...stepTwoFormik}/>
              )
              )}
              <SubmitButtons historyState={'/tabs/1'} prevButtonClasses={'form__button ghost'} nextButtonClasses={'form__button div6'} nextButtonText={'Next'}/>
            </Form>
          )}
      </Formik>
    </StepTwoMainContainer>
  )
}

export default StepTwo
