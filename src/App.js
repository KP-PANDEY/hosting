import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CRoute from './Container/Custom-Route/Custom-Route'

import SignIn from "./Container/SignIn/SignIn";
import SignUp from "./Container/SignUp/SignUp";
import Admin from './Container/Admin/Admin';
import User from "./Container/User/User";
import unauthorised from "./Container/UnAuthorised/Unauthorised";
import NotFound from './Container/Not-Found/Not-found';
import View from './Container/Admin/View'
import Try from './Container/try'
import Header from './Container/Header/Header'
import P2 from './Container/Admin/P2'
import ViewStudent from './Container/Admin/VIewStudent'
import Call from './Container/Admin/Call'
import Placement from './Container/Admin/PLacement'
import Placed from './Container/Admin/Placed';
import Drive from './Container/Admin/Drive'
import Approve from './Container/Admin/Approve'
import Pending from './Container/Admin/Pending';
import UpcomingDrive from './Container/User/UpcomingDrive';
import EditDrive from './Container/Admin/EditDrive';
import ViewDRIVE from './Container/Admin/ViewDRIVE';
import Company from './Container/Admin/Company';
import CompanyDetails from './Container/Admin/CompanyDetails'
import Footer from './Container/Admin/Footer'
import Notification from './Container/Admin/Notification'
import EditUser from './Container/User/EditUser'
import PDF from './Container/User/PDF'

class App extends Component {
 
  render() {
    const admin = "Admin";
    const user = "User";
    const role = localStorage.getItem("role")
    console.log(role);
 
    return (

      <Router>
        <Header></Header>


        <Switch>
          <CRoute exact cprivat crole={[admin]} path="/Company" component={Company} />
          <CRoute exact cprivat crole={[admin]} path="/CompanyDetails" component={CompanyDetails} />
          <CRoute exact cprivat crole={[admin]} path="/Call" component={Call} />
          <CRoute exact cprivat crole={[admin]} path="/EditDrive" component={EditDrive} />
          <CRoute exact cprivat crole={[admin]} path="/viewDRIVE" component={ViewDRIVE} />
          <CRoute exact cprivat crole={[admin]} path="/Notification" component={Notification} />


          <CRoute exact cprivat crole={[admin]} path="/View" component={View} />
          <CRoute exact cprivat crole={[admin]} path="/Call" component={Call} />
          <CRoute exact cprivat crole={[admin]} path="/try" component={Try} />
          <CRoute exact cprivat crole={[admin]} path="/ViewStudent" component={ViewStudent} />
          <CRoute exact cprivat crole={[admin]} path="/Placement" component={Placement} />
          <CRoute exact cprivat crole={[admin]} path="/Approve" component={Approve} />
          <CRoute exact cprivat crole={[admin]} path="/Approved" component={Pending} />
          <CRoute exact cprivat crole={[admin]} path="/Drive" component={Drive} />
          <CRoute exact cprivat crole={[user]} path="/UpcomingDrive" component={UpcomingDrive} />
          <CRoute exact cprivat crole={[user]} path="/EditUser" component={EditUser} />
          <CRoute exact cprivat crole={[user]} path="/PDF" component={PDF} />
          <CRoute exact path='/' component={SignIn} />
          <CRoute exact path='/SignIn' component={SignIn} />
          {/* <CRoute exact path="/SignIn" component={SignIn} />  */}
          <CRoute exact path="/SignUp" component={SignUp} />
          <CRoute exact cprivate crole={[admin]} path="/Admin" component={Admin} />
          <CRoute exact cprivate crole={[admin]} path="/Place" component={Placed} />
          <CRoute exact cprivate crole={[user]} path="/User" component={User} />
          <CRoute cprivate crole={[admin]} path='/P2' component={P2}></CRoute>

          <CRoute cprivate path='/unauthorised-access' component={unauthorised}></CRoute>
          <CRoute component={NotFound}></CRoute>
        </Switch>

        {/* <Footer></Footer> */}
      </Router>


    );
  }
}
export default App;
