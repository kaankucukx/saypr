import { Field } from 'formik';
import React from 'react';
import './index.scss';

const FieldContainer = ({ name, title, errorText, className, ...props }) =>  (
    <div className={`${className} field-container`}>
      {title && <span className={'field-container__field-title'}>{title}</span>}
      <Field className={'field-container__field'} name={name} {...props} />
      {errorText && <p className={'field-container__error-text'}>{errorText}</p>}
    </div>
  );

export default FieldContainer;
