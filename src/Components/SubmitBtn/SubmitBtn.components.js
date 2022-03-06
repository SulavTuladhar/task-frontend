import React from 'react'
import './SubmitBtn.components.css';

export const SubmitBtn = (props)=> {
    console.log('Props in btn is >>',props)
    let btn = props.isSubmitting === true
        ? <button disabled className="btn" > submitting </button>
        : <button type="submit" className="btn" disabled={props.isDisabled}> submit </button>
    return btn;

}
