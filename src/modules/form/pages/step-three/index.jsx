import React, { useEffect } from 'react';
import { FieldArray, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { UpdateApplicationActionCreator, UpdateHeading } from '../../../../actions/form-state.actions';
import { STEP_THREE_FORMIK_FIELDS, StepThreeModel } from './constants';
import { FieldContainer } from '../../../../shared/components/field-container/lazy';
import { isRequired } from '../../../../shared/utils/is-required';
import { ButtonsContainer, RemoveButton, StyledForm, WebsiteHeader, WebsiteInputContainer, WebsiteInputInnerContainer } from './styled';
import { FormButton } from '../../../../shared/components/button';
import { SubmitButtons } from '../../../../shared/components/previous-next-buttons';
import { formSelector } from '../../../../selectors/form-selectors';

const StepThree = () => {
  const { Form: initialVals } = useSelector(formSelector()) // To prevent re-rendering.
  const dispatch = useDispatch()
  const history = useHistory()
  const updateState = (values) => dispatch(UpdateApplicationActionCreator(values, history.push('/success')))
  useEffect(() => {
    dispatch(UpdateHeading('Provide us some details to get you started'))
  }, [dispatch])
  return (
    <Formik enableReinitialize initialValues={new StepThreeModel(initialVals)} onSubmit={updateState}>
      {({ values, touched, errors, handleChange, handleBlur, handleSubmit }) => {
        return (
          <>
            <StyledForm>
              <FieldArray
                name={STEP_THREE_FORMIK_FIELDS[0].name}
                render={({ remove, push }) => (
                  <>
                    {values[STEP_THREE_FORMIK_FIELDS[0].name].map((friend, index) => (
                      <WebsiteInputContainer key={index}>
                        <WebsiteHeader>Website:</WebsiteHeader>
                        <WebsiteInputInnerContainer>
                          <RemoveButton type={'primary'} htmlType={'submit'} className={'remove'} onClick={() => remove(index)}>
                        -
                          </RemoveButton>
                          <FieldContainer
                            flex={'0 1 90%'}
                            name={`${STEP_THREE_FORMIK_FIELDS[0].name}.${index}.name`}
                            id={`${STEP_THREE_FORMIK_FIELDS[0].name}.${index}.name`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values[`${STEP_THREE_FORMIK_FIELDS[0].name}`][`${index}`].name}
                            validate={isRequired('This field is required.')}
                            errorText={
                              touched[`${STEP_THREE_FORMIK_FIELDS[0].name}`] &&
                          !!touched[`${STEP_THREE_FORMIK_FIELDS[0].name}`][`${index}`] &&
                          errors[`${STEP_THREE_FORMIK_FIELDS[0].name}`] &&
                          !!errors[`${STEP_THREE_FORMIK_FIELDS[0].name}`][`${index}`] &&
                          errors[`${STEP_THREE_FORMIK_FIELDS[0].name}`][`${index}`].name}
                          />
                        </WebsiteInputInnerContainer>
                      </WebsiteInputContainer>
                    ))}
                    <FormButton type={'primary'} onClick={() => push({ name: '' })}>
                    Add More Website
                    </FormButton>
                  </>
                )}
              />
            </StyledForm>
            <ButtonsContainer>

              <SubmitButtons historyState={'/tabs/2'} nextButtonText={'Submit'} onClick={handleSubmit} />
            </ButtonsContainer>

          </>
        )
      }}
    </Formik>
  )
}

export default StepThree
