import React from 'react';
import {
  BrowserRouter as Router, NavLink, Route, Switch,
} from 'react-router-dom';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

const { TabPane } = Tabs;

const Form = () => (
  <Router>
    <div className="App">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/tabs">Form Pages</NavLink>

      <Switch>
        <Route
          exact
          path="/"
          render={() => <div>Home</div>}
        />
        <Route
          path="/tabs/:tab?"
          render={({ match, history }) => (
            <div>
              <Switch>
                <Tabs
                  defaultActiveKey={match.params.tab}
                  onChange={(key) => {
                    history.push(`/tabs/${key}`);
                  }}
                >
                  <TabPane tab="Step 1" key="1" />
                  <TabPane tab="Step 2" key="2" />
                  <TabPane tab="Step 3" key="3" />
                </Tabs>
              </Switch>
            </div>
          )}
        />
      </Switch>
    </div>
  </Router>
);

export default Form;
