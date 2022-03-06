import { handleError } from "../../utils/errorhandler"
import { httpClient } from "../../utils/httpClient"
import { notify } from "../../utils/toaster"
import { SET_ISLOADING, SET_SUBMITTING, SINGLE_USER_RECEIVED, USER_ADDED, USER_RECEIVED, USER_REMOVED, USER_UPDATED } from "./type"

// Action file which will dispach action to reducer
export const fetchUser_ac = params => dispach => {
    dispach(isLoading(true))
        httpClient.GET('/user')
            .then(res=>{
                dispach({
                    type: USER_RECEIVED,
                    payload: res.data
                })
            })
            .catch(err=>{
                handleError(err)
            })
            .finally(()=>{
                dispach(isLoading(false))
            })
}

export const fetchSingleUser_ac = (id) => dispach =>{
        dispach(isLoading(true))
        httpClient.GET(`/user/${id}`)
            .then(res=>{
               dispach({
                   type: SINGLE_USER_RECEIVED,
                   payload: res.data
               })
            })
            .catch(err=>{
                handleError(err)
            })
            .finally(()=>{
                dispach(isLoading(false))
            })
    
}

export const addUser_ac = (data)=> dispach =>{
    dispach(isSubmitting(true))
    httpClient.POST('/user', data)
    .then(res=>{
        notify.showSucess('User Added Sucessfully');
        dispach({
            type: USER_ADDED,
            payload: res.data
        })
    })
    .catch(err=>{
        handleError(err)
    })
    .finally(()=>{
        dispach(isSubmitting(false))
    })
}

export const removeUser_ac = (id) => dispach =>{
    httpClient.DELETE(`/user/${id}`)
    .then(res=>{
        notify.showInfo('User removed');
        dispach({
            type: USER_REMOVED,
            userId: id
        })
    })
    .catch(err=>{
        handleError(err)
    })
}

export const edit_ac = (id,data) => dispach => {
   dispach(isSubmitting(true))
    httpClient.PUT(`/user/${id}`,data)
        .then(res=>{
            notify.showInfo('User updated')
            dispach({
                type: USER_UPDATED,
                payload: res.data
            })
        })
        .catch(err=>{
            handleError(err)
        })
        .finally(()=>{
            dispach(isSubmitting(false))
        })
}


const isLoading = loading =>({
    type: SET_ISLOADING,
    payload: loading
})

const isSubmitting = submitting => ({
    type: SET_SUBMITTING,
    payload: submitting
})