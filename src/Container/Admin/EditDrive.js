import React, { Component } from 'react'

import * as authAction from "../../action/action/action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import axios from "axios"

class ChagnePage extends Component {
    componentWillMount(props){
      console.log("called")
      axios.post("http://localhost:3010/DriveData")
      .then((res) => {
          console.log(res.data)
          
          localStorage.setItem("drive",JSON.stringify(res.data))
          //Window.location.href='/ViewDRIVE'
          this.props.history.push('/viewDRIVE')
        
        //   this.setState({ Drive: res.data })
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
  