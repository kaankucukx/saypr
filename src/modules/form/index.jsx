import React, { Suspense, useEffect, useState } from 'react';
import {
  NavLink, Switch, useParams, useHistory,
} from 'react-router-dom';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import FormSteps from './constants';

const { TabPane } = Tabs;

const Form = (props) => {
  const [activeTab, setActiveTab] = useState('1');
  const history = useHistory();
  const { tab } = useParams();
  const updateStateAndNavigate = (key) => history.push(`/tabs/${key}`);
  useEffect(() => setActiveTab(tab), [tab, setActiveTab]);
  return (
    <div className="App">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/tabs">Form Pages</NavLink>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Tabs
            activeKey={activeTab}
            defaultActiveKey={tab}
            onChange={updateStateAndNavigate}
          >
            {FormSteps.map((step) => (
              <TabPane tab={step.tab} key={step.key} component={step.component}>
                <step.component {...props} />
              </TabPane>
            ))}
          </Tabs>
        </Switch>
      </Suspense>
    </div>
  );
};

export default Form;
