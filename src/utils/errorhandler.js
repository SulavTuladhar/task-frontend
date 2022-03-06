import { notify } from "./toaster";

export const handleError = (error) =>{
    debugger;
    let err = error.response;
    let errMsg = 'Something went wrong. Please refresh this page';
    if(err){
        errMsg = err && err.data && err.data.msg;
    }
    notify.showError(errMsg)
}