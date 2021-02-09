import React from "react";
import {CALL_API} from "middleware/Api";
import {addUser, deleteUser, fetchUsers, updateUser} from "reducers/assignment/UserActions";
import {fetchTransactions} from "reducers/assignment/TransactionActions";

class UserTransactionService {
    constructor(dispatch) {
        this.dispatch = dispatch
    }

    getAllUsers() {
        return this.dispatch({
            [CALL_API]: {
                endpoint: '/users'
            }
        }).then((users) => {
            this.dispatch(fetchUsers(users))
            return users
        }, (error) => {
            console.log(error)
            return error
        })
    }

    addNewUser(user) {
        return this.dispatch({
            [CALL_API]: {
                endpoint: `/users`,
                options: {
                    method: 'POST',
                    body: JSON.stringify(user),
                }
            }
        }).then((user) => {
            console.log('Item', user)
            this.dispatch(addUser(user))
            return user
        }, (error) => {
            console.log('Error', error)
            return error
        })
    }

    updateUser(user, id) {
        return this.dispatch({
            [CALL_API]: {
                endpoint: `/users/${id}`,
                options: {
                    method: 'PUT',
                    body: JSON.stringify(user),
                }
            }
        }).then((user) => {
            this.dispatch(updateUser(user, id))
            return user
        }, (error) => {
            console.log('Error', error)
            return error
        })
    }

    deleteUser(id) {
        return this.dispatch({
            [CALL_API]: {
                endpoint: `/users/${id}`,
                options: {
                    method: 'DELETE'
                }
            }
        }).then((user) => {
            this.dispatch(deleteUser(user))
            return user
        }, (error) => {
            console.log('Error', error)
            return error
        })
    }

    getAllTransactions(id) {
        return this.dispatch({
            [CALL_API]: {
                endpoint: `/users/${id}/transactions`
            }
        }).then((items) => {
            this.dispatch(fetchTransactions(items))
            return items
        }, (error) => {
            console.log(error)
            return error
        })
    }
}

export default UserTransactionService