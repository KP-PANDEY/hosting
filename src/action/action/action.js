
import { LOGIN,REGISTERED, ERROR,UNAUTHORISEZ, SHOWPLACEDSTUDENT ,SHOWPENDING,LOGOUT} from '../../reducer/reducer';
import * as CallApiForSignin from '../../service/CallApiForSignin/CallApiForSignin';
import * as CallApiForSignup from '../../service/CallApiForSignup/CallApiForSignup';
import * as CallApiForViewStudent from '../../service/CallApiForViewStudent/CallApiForViewStudent'
import axios from 'axios'
export const Login= (data) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            CallApiForSignin.CallApiForSignin(data)
                .then((response) => {
                    debugger
                  //  console.log(response.data.result[0])
                    if (response.data=="UNAUTHORISED") {
                      dispatch({
                        type: UNAUTHORISEZ,
                        data: response.data
                    });
                    return resolve(response);
                    }
                    else{

                      localStorage.setItem("details",JSON.stringify( response.data.result[0]))
                        localStorage.setItem("token",response.data.token);
                        localStorage.setItem("role",response.data.result[0].Role);
                        localStorage.setItem("name",response.data.result[0].Name);
                        dispatch({
                            type: LOGIN,
                            data: response.data
                        });
                        return resolve(response);
                            
                    }
                }).catch((error) => {
                    if (error) {
                        dispatch({ type: ERROR, data: "error" })
                        return reject(error);

                    }
                })
        })
    }
}
export const Register= (data) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            CallApiForSignup.CallApiForSignup(data)
            .then((response) => {
                    debugger
                    if (response.data) {
                        dispatch({
                            type: REGISTERED,
                            data: response.data
                        });
                        return resolve(response);
                    }
                   
                }).catch((error) => {
                    if (error) {
                        dispatch({ type: ERROR, data: "error" })
                        return reject(error);

                    }
                })
        })
    }
}
export const ViewStudent= (data) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            CallApiForViewStudent.CallApiForViewStudent(data)
                .then((response) => {
                    debugger
                    if (response.data) {
                        var k
                        k= JSON.stringify(response.data)
                        localStorage.setItem("ViewStudent",k)
                        // localStorage.setItem("ViewStudent",response.data);
                        dispatch({
                            type: ViewStudent,
                            data: response.data
                        });
                        return resolve(response);
                    }
                }).catch((error) => {
                    if (error) {
                        dispatch({ type: ERROR, data: "error" })
                        return reject(error);

                    }
                })
        })
    }
}

export const ShowPlacedStudent = () => {
    debugger;
    return dispatch => {
      return new Promise((resolve, reject) => {
        axios.get("http://localhost:3010/ShowPlacedStudent")
          .then(res => {
            console.log(res);
            const d = JSON.stringify(res.data)
            localStorage.setItem("Placed",d)
            dispatch({
              type: SHOWPLACEDSTUDENT,
              data: res.data
            });
            return resolve(res.data);
          });
      });
    };
  };

  export const AddDrive = (data) => {
    debugger;
    return dispatch => {
      return new Promise((resolve, reject) => {
        axios.post("http://localhost:3010/AddDrive",data)
          .then(res => {
            console.log(res);
            // const d = JSON.stringify(res.data)
            // localStorage.setItem("result",d)
            dispatch({
              type: AddDrive,
              data: res.data
            });
            return resolve(res.data);
          });
      });
    };
  };


  export const ShowPending = (page) => {
    debugger;
    return dispatch => {
      return new Promise((resolve, reject) => {
        axios.post("http://localhost:3010/ShowPending",{page:page})
          .then(res => {
            console.log(res);
            const d = JSON.stringify(res.data)
            localStorage.setItem("Pending",d)
            dispatch({
              type: SHOWPENDING,
              data: res.data
            });
            return resolve(res.data);
          });
      });
    };
  };


  export const Logout = () => {
    debugger;
    return dispatch => {
            dispatch({
              type: LOGOUT,
              data:" "
            });
    
    };
  };