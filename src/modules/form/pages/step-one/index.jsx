import React, { useEffect } from 'react'
import { Form, Formik } from 'formik'
import { FieldContainer } from '../../../../shared/components/field-container/lazy'
import { useDispatch, useSelector } from 'react-redux'
import { STEP_ONE_FORMIK_FIELDS, StepOneModel } from './constants'
import { UpdateApplicationActionCreator, UpdateHeading } from '../../../../actions/form-state.actions'
import { useHistory } from 'react-router-dom'
import { StyledFormButton } from '../../../../shared/components/button/styled'
import { StepOneMainContainer } from './styled'
import { formSelector } from '../../../../selectors/form-selectors'

const StepOne = () => {
  const { Form: initialVals } = useSelector(formSelector()) // To prevent re-rendering.
  const dispatch = useDispatch()
  const history = useHistory()
  const updateState = (values) => dispatch(UpdateApplicationActionCreator(values, history.push('2')))
  useEffect(() => {
    dispatch(UpdateHeading('Just one more step'))
  }, [dispatch])

  return (
    <StepOneMainContainer>
      <Formik enableReinitialize initialValues={new StepOneModel(initialVals)} onSubmit={updateState}>
        {({ values, touched, errors, handleChange, handleBlur }) =>
          (
            <Form>
              {STEP_ONE_FORMIK_FIELDS.map((stepOneFormik) => (
                <FieldContainer
                  key={stepOneFormik.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[stepOneFormik.name]}
                  errorText={touched[`${stepOneFormik.name}`] && errors[`${stepOneFormik.name}`]}
                  {...stepOneFormik}/>
              )
              )}
              <StyledFormButton type={'primary'} htmlType={'submit'} className={'button div6'}>
                Next
              </StyledFormButton>
            </Form>
          )}
      </Formik>
    </StepOneMainContainer>
  )
}

export default StepOne
