import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserForm } from './UserForm.components'
import { edit_ac, fetchSingleUser_ac } from '../../actions/user/user.ac';


class Edit extends Component {

    componentDidMount(){
        this.productId = this.props.match.params['id'];
        this.props.fetch(this.productId)
    }

    edit = (data) =>{
        this.props.editUser(this.productId, data);
        this.props.history.push('/');
    }

  render() {
    return (
        <>
            <UserForm 
                isEditMode
                submitCallback = {this.edit}
                user = {this.props.user}
                isSubmitting = {this.props.isSubmitting}
            />
        </>
    )
  }
}

// Map state to props (All incomming data from store as an props inside components)
const mapStateToProps = RootStore =>({
    user: RootStore.user.singleData,
    isSubmitting: RootStore.user.isSubmitting
})

// Map dispach to props (All actions to be dispached from this component as an props)
const mapDispachToProps = dispach => ({
    fetch: (id)=> dispach(fetchSingleUser_ac(id)),
    editUser: (id,data)=> dispach(edit_ac(id,data))
})

export const EditUser = connect(mapStateToProps,mapDispachToProps )(Edit);