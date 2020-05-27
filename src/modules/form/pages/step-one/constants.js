import { isRequired } from '../../../../shared/utils/is-required';

export const STEP_ONE_FORMIK_FIELDS = [
  { title: 'First Name:', name: 'firstName', id: 'firstName', size: 'large', className: 'firstName', validate: isRequired('This field is required.') },
  { title: 'Last Name:', name: 'lastName', id: 'lastName', size: 'large', className: 'lastName', validate: isRequired('This field is required.') },
  { title: 'Email address:', name: 'mail', id: 'mail', size: 'large', className: 'mail', validate: isRequired('This field is required.') },
  { title: 'Password:', name: 'password', id: 'password', type: 'password', size: 'large', className: 'password', validate: isRequired('This field is required.') },
  { title: 'Repeat Password:', name: 'rePassword', id: 'rePassword', type: 'password', size: 'large', className: 'rePassword', validate: isRequired('This field is required.') },
];

export class StepOneModel {
  firstName = null;
  lastName = null;
  mail = null;
  password = null;
  rePassword = null;

  constructor (data = {}) {
    Object.keys(data || {})
      .filter((property) => this.hasOwnProperty(property))
      .forEach((property) => (this[property] = data[property]));
  }
};
