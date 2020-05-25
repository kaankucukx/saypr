import { lazy } from 'react';

const StepOne = lazy(() => import('./pages/step-one'));
const StepTwo = lazy(() => import('./pages/step-two'));
const StepThree = lazy(() => import('./pages/step-three'));

const FormSteps = [
  {
    name: 'Step One',
    component: StepOne,
    tab: 'Step One',
    key: '1',
  }, {
    name: 'Step Twp',
    component: StepTwo,
    tab: 'Step Twp',
    key: '2',
  }, {
    name: 'Step Three',
    component: StepThree,
    tab: 'Step Three',
    key: '3',
  },
];

export default FormSteps;
