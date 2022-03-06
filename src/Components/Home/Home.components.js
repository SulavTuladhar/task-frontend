import React, { Component } from "react";

import { connect } from 'react-redux';

import './Home.components.css';
import { fetchUser_ac, removeUser_ac } from "../../actions/user/user.ac";

class Home extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetch();
    }

    componentDidUpdate(prevProps){
        if(this.props.singleUser !== prevProps.singleUser){
            this.props.fetch();
        }
    }

    

    editUser(id){
        this.props.history.push(`/edit-user/${id}`);
    }

    removeUser(id){
        const confirmation = window.confirm('Are you sure to remove?');
        if(confirmation){
           this.props.remove(id)
        }
    }

    render(){
        let content = this.props.isLoading
            ? <p> Loading please wait </p>
            :   
                <table className="table">
                     <thead>
                        <tr>
                            <th> S.N </th>
                            <th> Name </th>
                            <th> Email </th>
                            <th> Phone Number </th>
                            <th> Address </th>
                            <th> Options </th>
                        </tr>
                    </thead>
                    <tbody>
                        {(this.props.user || []).map((user,index)=>(
                            <tr key={index}>
                                <td> {index + 1} </td>
                                <td> {user.name} </td>
                                <td> {user.email} </td>
                                <td> {user.phoneNumber} </td>
                                <td> {user.address} </td>
                                <td> 
                                    <button className="btn" onClick={()=> this.editUser(user._id)}> Edit </button> 
                                    <button  className="btn mx-2" style={{background:"#dc3545"}} onClick={()=> this.removeUser(user._id,index)}> Remove </button> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

        return(
            <>
            <h1 className="text-center mt-5"> User Management System </h1>
            <div className="container mt-5 pt-5">   
            <button className="btn float-end" style={{background: '#198754', width: '4rem'}} onClick={()=>this.props.history.push('/add-user')}> Add </button>
                {content}                    
            </div>
            </>
        )
    }
}

// Map state to props (All incomming data from store as an props inside component)
const mapStateToProps = RootStore => ({
    isLoading: RootStore.user.isLoading,
    user: RootStore.user.data,
    singleUser: RootStore.user.singleData,
})

// Map dispach to props (All actions to be dispached from this component as an props)
const mapDispachToProps = dispach => ({
    fetch: ()=>dispach(fetchUser_ac()),
    remove: (id)=>dispach(removeUser_ac(id))
})
export const HomeComponent = connect(mapStateToProps, mapDispachToProps)(Home)