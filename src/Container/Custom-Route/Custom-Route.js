import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class CRoutes extends Component {
    getExtractedJson({component,cprivate,crole,action,auth,...rest}){
        return rest;
    }
    render() {
        debugger
        const rest=this.getExtractedJson(this.props);
        const isUserLoggedIn=this.props.token &&this.props.token !=="";
        const useCurrentRole=this.props.role;
        const {component , cprivate , crole}=this.props;
        const Component=component;

        
        let RedirectedTo =undefined
        debugger
        if(isUserLoggedIn && rest.path==='/'&& useCurrentRole==="Admin")
            RedirectedTo="/Admin";
        else if(isUserLoggedIn && rest.path==='/'&& useCurrentRole==="User")
            RedirectedTo="/User";
        else if(!isUserLoggedIn && cprivate)
             RedirectedTo="/";
        else if(isUserLoggedIn && cprivate && crole && crole.filter((item)=>item=== useCurrentRole).length===0)
           RedirectedTo="/unauthorised-access";
        else if(isUserLoggedIn && useCurrentRole=='User' && (rest.path=="/ViewStudent" ||rest.path=="/View" ||rest.path=="/Placement" ||rest.path=="/Approve" ||rest.path=="/Approved"||rest.path=="/Drive"||rest.path=="/Place"))
            RedirectedTo="unauthorised-access";
        else if(isUserLoggedIn && rest.path==='/SignUp')
            RedirectedTo="/"


        return (
           <Route
           {...rest}
           render={props =>(
               (RedirectedTo)
                ? (<Redirect to={{pathname:RedirectedTo,state:{from:props.location}}} />)
                : (<Component {...props} />)
           )}
           /> 
           )

    }
}

const mapStateToProps = (state) => {
    const  token  =state.Token;
    const role = state.Role;
    const name=state.Name;
    return {
            token: token,
            role:role,
            name:name
    }
}

const mapDispatchToProps= dispatch=>({
    actions:{
        

    }
});

export default connect(mapStateToProps,mapDispatchToProps) (CRoutes)
