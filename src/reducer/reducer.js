import { ViewStudent, AddDrive } from "../action/action/action";

const INITIAL_STATE = {
    Email: "",
    Token:"",
    Role:"",
    Name:"",
    msg:"",
    Data:[""],
    result:'',
    Pending:'',
}

export const LOGIN="LOGIN";
export const REGISTERED = "REGISTERED";
export const VIEW_SUCCESSFULL = "VIEW_SUCCESSFULL";
export const ERROR = "ERROR";
export const UNAUTHORISEZ="UNAUTHORISEZ";
export const SHOWPLACEDSTUDENT="SHOWPLACEDSTUDENT";
export const SHOWPENDING="SHOWPENDING"
export const LOGOUT ="LOGOUT";
export default (state = INITIAL_STATE, action) => {

    const newState = { ...state };
    switch (action.type) {
        case REGISTERED: {
            debugger
            return{
                ...state,
                msg:action.data
            }
        }
        case VIEW_SUCCESSFULL: {
            return newState.data = action.data

        }
        case LOGIN: {
            debugger
            return{
                ...state,
                Data:action.data,
                Token:action.data.token,
                Role:action.data.result[0].Role,
                Name:action.data.result[0].Name,

            }
        }

        case ViewStudent: {
            debugger
            return{
                ...state,
                Data:action.data.result
            }
        }
        case UNAUTHORISEZ:{
            debugger
            return{
                ...state,
                Token:action.data.token,
               

            }
        }
        case SHOWPLACEDSTUDENT:{
            return Object.assign({},state,{result:action.data})
        }
        case AddDrive:{
            return{
                ...state,
                msg:action.data
            }
        }
        case SHOWPENDING:{
            return Object.assign({},state,{result:action.data})
        }
        debugger
        case LOGOUT:{
            debugger
            return{
                ...state,
                Token:"",
                Role:"",
               
            }
        }
        default:
            return state;


    }
}
