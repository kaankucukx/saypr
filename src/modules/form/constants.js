import { lazy } from 'react';

const StepOne = lazy(() => import('./pages/step-one'));
const StepTwo = lazy(() => import('./pages/step-two'));
const StepThree = lazy(() => import('./pages/step-three'));

const FormSteps = [
  {
    path: '/tabs/1', // Those should be constants
    component: StepOne,
    tab: 'Step One',
    key: '1',
  }, {
    path: '/tabs/2',
    component: StepTwo,
    tab: 'Step Two',
    key: '2',
  }, {
    path: '/tabs/3',
    component: StepThree,
    tab: 'Step Three',
    key: '3',
  },
];

export default FormSteps;
