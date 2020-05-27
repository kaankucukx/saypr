import { isRequired } from '../../../../shared/utils/is-required';

export const STEP_TWO_FORMIK_FIELDS = [
  { title: 'Phone Number:', name: 'phoneNumber', id: 'phoneNumber', size: 'large', className: 'firstName', validate: isRequired('This field is required.') },
  { title: 'Country:', name: 'country', id: 'country', size: 'large', className: 'lastName', validate: isRequired('This field is required.') },
  { title: 'State:', name: 'state', id: 'state', size: 'large', className: 'mail', validate: isRequired('This field is required.') },
  { title: 'Street:', name: 'street', id: 'street', size: 'large', className: 'password', validate: isRequired('This field is required.') },
  { title: 'Post Cdde:', name: 'postalCode', id: 'postalCode', size: 'large', className: 'rePassword', validate: isRequired('This field is required.') },
];

export class StepTwoModel {
  phoneNumber = null;
  country = null;
  state = null;
  street = null;
  postalCode = null;

  constructor (data = {}) {
    Object.keys(data || {})
      .filter((property) => this.hasOwnProperty(property))
      .forEach((property) => (this[property] = data[property]));
  }
}
