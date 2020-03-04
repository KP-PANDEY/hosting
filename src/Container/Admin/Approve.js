import React, { Component } from 'react'

import * as authAction from "../../action/action/action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class ChagnePage extends Component {
    componentWillMount(props){
       this.props.action.auth.ShowPending(0)
       .then(res=>{
           this.props.history.push("/Approved")
         //  window.location.href="/Approved";
       })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    const msg = state;
    console.log(msg);
    return {
      data: msg
      
    };
  };
  const mapDispatchToProps = dispatch => ({
    action: {
      auth: bindActionCreators(authAction, dispatch)
    }
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ChagnePage);
  