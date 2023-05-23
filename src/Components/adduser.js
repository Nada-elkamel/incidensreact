import React from 'react'
import { ReactComponent as Registerr } from '../assets/register.svg';
import axios from 'axios';
const AddUser = () => {
    const [firstname, setFirstName] = React.useState('');
    const [lastname, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [role, setRole] = React.useState('USER');
    const [users, setUsers] = React.useState([])
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:8000/api/users', { firstname, lastname, email, role })
        setUsers([...users, response.data])
        setFirstName('')
        setLastName('')
        setEmail('')
        setRole('USER')
    }
    return (
        <>
            <section class="credit-card">
                <div class="container">
                    <div class="card-holder">
                        <div class="card-box bg-news">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="img-box">
                                        <Registerr height="310px" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <form onSubmit={handleSubmit}>
                                        <div class="card-details">
                                            <h3 class="title">Add User</h3>
                                            <div class="row">
                                                <div class="form-group col-sm-7 mt-3">
                                                    <div class="inner-addon right-addon">
                                                        <label for="card-holder">First Name</label>
                                                        <i class="far fa-user"></i>
                                                        <input id="card-holder" type="text" class='form-control' value={firstname} onChange={event => setFirstName(event.target.value)}></input>
                                                    </div>
                                                </div>
                                                <div class="form-group col-sm-8 mt-3">
                                                    <div class="inner-addon right-addon">
                                                        <label for="card-number">Last Name</label>
                                                        <i class="far fa-credit-card"></i>
                                                        <input id="card-number" type="text" class='form-control' value={lastname} onChange={event => setLastName(event.target.value)}></input>
                                                    </div>
                                                </div>
                                                <div class="form-group col-sm-8 mt-3">
                                                    <div class="inner-addon right-addon">
                                                        <label for="card-number">Email</label>
                                                        <i class="far fa-credit-card"></i>
                                                        <input id="card-number" class="form-control" type="text" value={email} onChange={event => setEmail(event.target.value)}></input>
                                                    </div>
                                                </div>
                                                <div class='form-group col-sm-8 mt-3'>
                                                    <label>
                                                        Role:
                                                        <select  class='form-control' value={role} onChange={event => setRole(event.target.value)}>
                                                            <option value="USER">User</option>
                                                            <option value="ADMIN">Admin</option>
                                                        </select>
                                                    </label>
                                                </div>
                                                <div class="form-group col-sm-12">
                                                    <button type='submit' class="btn btn-primary ">Proceed</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddUser