import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { FieldContainer } from '../../../../shared/components/field-container/lazy';
import { shallowEqual, useSelector } from 'react-redux';
import './index.scss';
import { stepOneFormikFields, StepOneModel } from './constants';
import Button from 'antd/es/button';

const StepOne = () => {
  const [initialFormikValues, setInitialFormikValues] = useState(new StepOneModel());
  const { Form: initialVals } = useSelector(state => state.FormReducer, shallowEqual); // To prevent re-rendering.
  useEffect(() => setInitialFormikValues(new StepOneModel(initialVals)), [initialVals, setInitialFormikValues, StepOneModel]);

  return (
    <Formik enableReinitialize initialValues={initialFormikValues} onSubmit={(e) => console.log(e)} validator={() => ({})}>
      {({ touched, errors, handleChange }) =>
        (
          <Form className={'parent'}>
            {stepOneFormikFields.map((stepOneFormik) => (
                <FieldContainer
                  key={stepOneFormik.name}
                  onChange={handleChange}
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
