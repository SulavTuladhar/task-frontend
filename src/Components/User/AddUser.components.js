import React, { Component } from 'react'
import { UserForm } from './UserForm.components'

import { connect } from 'react-redux';
import { addUser_ac } from '../../actions/user/user.ac';

class Add extends Component {

    add = (data) =>{
       this.props.add(data)
        this.props.history.push('/')

    }

  render() {
    console.log('stateee >>>>>>>>', this.props);
    return (
      <UserForm
        isSubmitting = {this.props.isSubmitting}
        submitCallback = {this.add}
      />
    )
  }
}

// Map state to props (All Incomming data from store as an props inside this component)
const mapStateToProps = RootStore =>({
    isSubmitting: RootStore.user.isSubmitting,
})

// Map dispach to props (All actions to be dispached from this component as an props)
const mapDispachToProps = dispach =>({
    add: (data)=>dispach(addUser_ac(data))
})

export const AddUser = connect(mapStateToProps, mapDispachToProps)(Add)