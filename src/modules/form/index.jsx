import React, { Suspense } from 'react'
import { Switch, useHistory, useParams } from 'react-router-dom'
import 'antd/dist/antd.css'
import FormSteps from './constants'
import { Divider, Steps } from 'antd'
import { Route } from 'react-router'
import { AppContainer, MainHeading, SubHeading } from './styled'
import { useSelector } from 'react-redux'
import { formSelector } from '../../selectors/form-selectors'

const { Step } = Steps

const Form = () => {
  const history = useHistory()
  const { tab } = useParams() // To track step position according to route changes.
  const updateStateAndNavigate = (key) => history.push(`/tabs/${key + 1}`) // onClick handler to navigate between routes on step bullets
  const { heading } = useSelector(formSelector())

  return (
    <AppContainer>
      <MainHeading>Welcome to an amazing Experience</MainHeading>
      <SubHeading>{heading}</SubHeading>
      <Divider style={{ border: '3px solid rgb(1, 141, 171)' }}/>
      <Steps style={{ width: 'auto' }} current={tab} onChange={updateStateAndNavigate}>
        {FormSteps.map((step) => (
          <Step key={step.key}/>
        ))}
      </Steps>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {FormSteps.map((step) => (
            <Route key={step.path} path={step.path} component={step.component}/>
          ))}
        </Switch>
      </Suspense>
    </AppContainer>
  )
}

export default Form
