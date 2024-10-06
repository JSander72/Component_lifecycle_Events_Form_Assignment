import React, { useEffect } from 'react'
import { useState } from 'react'
import ReusableButton from './ReusableButton'
import axios from 'axios'
import CreateUserForm from './CreateUserForm'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const AxiosUserList = () => {
    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState(null)
    const [selectedUserInfo, setSelectedUserInfo] = useState(null)

    const navigate = useNavigate()

    const deleteUser = (index) => {
        const newUsers = users.filter((user, i) => i !== index)
        setUsers(newUsers)
    }

    const selectUser = (id) => {
        setSelectedUser(id)
        navigate(`/axios-users/${id}`)
    }

    const getUserInfo = (id) => {
        axios.get(`https://fakestoreapi.com/users/${id}`)
            .then(response => {
                console.log(response)
                setSelectedUserInfo(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        axios.get('https://fakestoreapi.com/users')
            .then(response => {
                console.log(response)
                setUsers(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <h3>Create User</h3>
            <CreateUserForm />

            <h1>List of Users</h1>

            { selectedUserInfo && 
                <div>
                    <h3>Selected User</h3>
                    <p>{selectedUserInfo.name.firstname}</p>
                    <p>{selectedUserInfo.name.lastname}</p>
                    <p>{selectedUserInfo.email}</p>
                </div>
            }

            <h3>Users</h3>

            { users.map((user, index) => 
                <div key={index}>
                    <p>{user.name.firstname}</p>
                    <ReusableButton handleClick={() => deleteUser(index)} title="Delete User"/>
                    <br />
                    <ReusableButton handleClick={() => selectUser(user.id)} title="Select User"/>
                    <Link to={`/axios-users/${user.id}`}>Details</Link>
                </div>
            )}
        </div>
    )
}

export default AxiosUserList
