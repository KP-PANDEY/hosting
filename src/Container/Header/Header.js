import React, { Component } from "react";
import { connect } from "react-redux";

import Main from '../Admin/Main'
import User from '../User/UserMain'

class Header extends Component {

  btn_click = (e) => {
    e.preventDefault();
    this.props.action.auth.logoutUser()
  }
  render() {
    return (
      (this.props.token && this.props.role =="Admin") ?
        <Main/>
        :(this.props.token && this.props.role=="User")?<User/>:null
        
    )
  }
}

const mapStateToProps = (state) => {
  debugger
  const  token  =state.Token;
  const role = state.Role;
  const name=state.Name;
  return {
          token: token,
          role:role,
          name:name
  }
}

const mapDispatchToProps= ()=>({
  actions:{
      

  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)