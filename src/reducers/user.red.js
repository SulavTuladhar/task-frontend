// Simple js plain function that holds logic to update

import { SET_ISLOADING, SINGLE_USER_RECEIVED, USER_ADDED, USER_RECEIVED, USER_REMOVED, USER_UPDATED } from "../actions/user/type"

const defaultData = {
    isLoading: false,
    data: [],
    singleData:{}
}

export const UserReducer = (state=defaultData, action )=>{

    switch(action.type){
        case SET_ISLOADING:
            return{
                ...state,
                isLoading: action.payload
            }
        case USER_RECEIVED:
            return{
                ...state,
                data: action.payload
            }
        case USER_REMOVED:
            const {data} = state
            data.forEach((item,index)=>{
                if(item._id === action.userId){
                    data.splice(index,1);
                }
            })
            return{
                ...state,
                data: [...data]
            }
        case SINGLE_USER_RECEIVED:
            return{
                ...state,
                singleData: action.payload
            }
        case USER_ADDED:
            return{
                ...state,
                singleData: action.payload
            }
        case USER_UPDATED:
            return{
                ...state,
                singleData: action.payload
            }
        
        default:
            return {
                ...state
            }
        }
}
