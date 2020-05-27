import { Input } from 'antd';
import { isRequired } from '../../../../shared/utils/is-required';

export const STEP_THREE_FORMIK_FIELDS = [
  { title: 'Website:', name: 'website', id: 'website', component: Input, size: 'large', className: 'website', validate: isRequired('This field is required.') },
];

export class StepThreeModel {
  website = [];

  constructor (data = {}) {
    Object.keys(data || {})
      .filter((property) => this.hasOwnProperty(property))
      .forEach((property) => (this[property] = data[property]));
  }
}
