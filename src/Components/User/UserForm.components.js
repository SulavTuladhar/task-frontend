import React, { Component } from 'react'
import { notify } from '../../utils/toaster';
import { SubmitBtn } from '../SubmitBtn/SubmitBtn.components';

const defaultForm = {
    name: '',
    email: '',
    phoneNumber: '',
    address: ''
}

export class UserForm extends Component {

    constructor(){
        super();
        
        this.state = {
            data: {...defaultForm}
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.user !== prevProps.user){
            const {user} = this.props;
            if(this.props.user){
                this.setState({
                    data:{
                        ...defaultForm,
                        ...user
                    }
                })
            }
        }
    }

    handleChange = e =>{
        let {name,value} = e.target;

        this.setState(preState=>({
            data: {
                ...preState.data,
                [name]: value
            }
        }))
    }

    onSubmit = e =>{
        e.preventDefault();
        if(this.state.data.name === ""){
            notify.showError('Please enter your name')
        }
            else if(this.state.data.email === ""){
                notify.showError('Please enter your email')
            }
                else if(this.state.data.phoneNumber === ""){
                    notify.showError('Please enter your phone number')
                }
                    else if(this.state.data.address === ""){
                        notify.showError('Please enter your address')
                    }
        else{
            this.props.submitCallback(this.state.data);
        }
    }  

  render() {
    return (
      <> 
      <h1 className="text-center mt-5 pt-5"> {this.props.isEditMode ? 'Update' : 'Add'} User </h1>
        <div className='container mt-5'>  
            <h1>  </h1>

            <form onSubmit={this.onSubmit} className="form" noValidate>
                <label htmlFor='name'> Name </label>
                <input type='text' className='form-control' value={this.state.data.name} name='name' id='name' onChange={this.handleChange} />

                <label htmlFor='email'> Email </label>
                <input type='email' className='form-control' value={this.state.data.email || ''} name='email' id='email' onChange={this.handleChange} />

                <label htmlFor='phone'> Phone </label>
                <input type='number' className='form-control' value={this.state.data.phoneNumber || ''} name='phoneNumber' id='phone' onChange={this.handleChange} />

                <label htmlFor='address'> Address </label>
                <input type='text' className='form-control mb-3' value={this.state.data.address || ''} name='address' id='address' onChange={this.handleChange} />

                <SubmitBtn isSubmitting = {this.props.isSubmitting} ></SubmitBtn>

            </form>
        </div>
      </>
    )
  }
}

// const mapStateToProps = RootStore =>({
//     singleUser: RootStore.user.singleData
// })
