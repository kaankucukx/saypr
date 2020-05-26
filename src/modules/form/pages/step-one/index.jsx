import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { FieldContainer } from '../../../../shared/components/field-container/lazy';
import { useDispatch, useSelector } from 'react-redux';
import './index.scss';
import { stepOneFormikFields, StepOneModel } from './constants';
import Button from 'antd/es/button';
import { UpdateApplicationActionCreator } from '../../../../actions/form-state.actions';
import { useHistory } from 'react-router-dom';

const StepOne = () => {
  const [initialFormikValues, setInitialFormikValues] = useState(new StepOneModel());
  const { Form: initialVals } = useSelector(state => state.FormReducer); // To prevent re-rendering.
  const dispatch = useDispatch();
  const history = useHistory();
  const updateState = (values) => dispatch(UpdateApplicationActionCreator(values, history.push('2')));

  useEffect(() => {
    setInitialFormikValues(new StepOneModel(initialVals));
  }, [initialVals, setInitialFormikValues]);

  return (
    <Formik enableReinitialize initialValues={initialFormikValues} onSubmit={updateState}>
      {({ values, touched, errors, handleChange, handleBlur }) =>
        (
          <Form className={'parent'}>
            {stepOneFormikFields.map((stepOneFormik) => (
                <FieldContainer
                  key={stepOneFormik.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[stepOneFormik.name]}
                  errorText={touched[`${stepOneFormik.name}`] && errors[`${stepOneFormik.name}`]}
                  {...stepOneFormik}/>
              ),
            )}
            <Button type={'primary'} htmlType={'submit'} className={'StepOne__button div6'}>
              Next
            </Button>
          </Form>
        )}
    </Formik>
  );
};

export default StepOne;
