import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmployeeComponent from './pages/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './pages/CreateEmployeeComponent';
// import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './pages/ViewEmployeeComponent';
import LogoutComponent from './pages/LogoutComponent';
import ResumeWriteComponent from './pages/ResumeWrite';
import ResumeWriteConf from './pages/ResumeWriteConf';
import ResumeWriteComp from './pages/ResumeWriteComp';
import SystemErrorComponent from './pages/SystemError';
import StaffInfoComponent from './pages/StaffInfo';
import ResumeEditComponent from './pages/ResumeEdit';
import ResumeEditConfComponrnt from './pages/ResumeEditConf';
import ResumeEditCompComponent from './pages/ResumeEditComp';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
            <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
            <Route exact path="/resume/write" component={ResumeWriteComponent}></Route>
            <Route exact path="/resume/write/conf" component={ResumeWriteConf}></Route>
            <Route exact path="/resume/write/comp" component={ResumeWriteComp}></Route>
            {/* <Route path="/acount/acountList" component={AcountList} />
            <Route path="/acount/acountCheck" component={AcountCheck} />
            <Route path="/acount/acountAlter" component={AcountAlter} />
            <Route path="/acount/checkDone" component={CheckDone} /> */}
            {/*< Route path = "/update-employee/:id"
            component = { UpdateEmployeeComponent }> </Route> 
            */}
            <Route path="/logout" exact component={LogoutComponent}></Route>
            <Route exact path="/staff" component={StaffInfoComponent}></Route>
            <Route exact path="/resume/edit" component={ResumeEditComponent}></Route>
            <Route exact path="/resume/edit/conf" component={ResumeEditConfComponrnt}></Route>
            <Route exact path="/resume/edit/comp" component={ResumeEditCompComponent}></Route>
            <Route exact path="/error/system" component={SystemErrorComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
