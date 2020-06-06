import { lazy } from 'react';

const StepOne = lazy(() => import('./pages/step-one'));
const StepTwo = lazy(() => import('./pages/step-two'));
const StepThree = lazy(() => import('./pages/step-three'));

const FormSteps = [
  {
    path: '/tabs/1', // Those should be constants
    component: lazy(() => import('./pages/step-one'));,
    tab: 'Step One',
    key: '1',
  }, {
    path: '/tabs/2',
    component: lazy(() => import('./pages/step-two')),
    tab: 'Step Two',
    key: '2',
  }, {
    path: '/tabs/3',
    component: lazy(() => import('./pages/step-three')),
    tab: 'Step Three',
    key: '3',
  },
];

export default FormSteps;
