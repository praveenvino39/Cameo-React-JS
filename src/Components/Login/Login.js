import { Button, Dialog, DialogTitle, Menu, MenuItem, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import axios from 'axios'
import { Facebook } from '@material-ui/icons'
import { faFontAwesome, faGoogle } from '@fortawesome/free-brands-svg-icons'
import Signup from '../Signup/Signup'

function Login({ loginModalOpen, setLoginModalOpen }) {
    // eslint-disable-next-line
    const [username, setUsername] = useState("")
    // eslint-disable-next-line
    const [password, setPassword] = useState("")
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const loginHandle = async (e) => {
        e.preventDefault()
        const response = await fetch('http://cameo.deliveryventure.com/api/user/login', {
            method: 'POST',
            body: {
                "username": "demouser",
                "password": "Demo@123"
            },
            mode: "no-cors",
            headers: {

            }
        })
        // const data = await response.json()
        // const response = await axios.post('https://cameo.deliveryventure.com/api/user/login', { "username": username, "password": password })
        console.log(response);
        // localStorage.setItem("userId", Math.random())
        // setLoginModalOpen(false)
        // window.location.reload()
    }

    return (
        <div class="modal fade mt-5" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <title>Login</title>
            <div class="text-white modal-dialog">
                <div style={{ backgroundColor: 'rgb(28, 28, 28)' }} class=" modal-content">
                    <div class="modal-header" style={{ borderBottom: '0px', padding: '20px 40px' }}>
                        <h3 style={{ textAlign: 'center', width: '100%' }} class="modal-title text-center" id="exampleModalLabel">Log in to Cameo</h3>
                        <button type="button" class="btn-close btn-sm" style={{ color: 'white !important', backgroundColor: 'white' }} data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                        <Button variant="contained" style={{ backgroundColor: '#1877f2', color: 'white', minWidth: '100%', height: '50px', margin: '10px 0px 5px 0px ' }}><Facebook style={{ marginRight: '7px' }} /> Continue with Facebook</Button>
                        <Button variant="contained" style={{ backgroundColor: 'white', color: 'black', minWidth: '100%', height: '50px', margin: '5px 0px 10px 0px ' }}><img style={{ marginRight: '7px' }} src="https://img.icons8.com/fluent/25/000000/google-logo.png" /> Continue with Facebook</Button>
                        <p style={{ width: '100%', margin: '0px auto', textAlign: 'center' }}>OR</p>
                        <input placeholder="Email" style={{ paddingLeft: '20px', backgroundColor: 'rgba(0,0,0,0)', color: 'white', borderWidth: '1px', width: '100%', borderColor: 'rgba(225,225,225,.5)', borderRadius: '7px', height: '50px' }} />
                        <input placeholder="Password" type="password" style={{ paddingLeft: '20px', marginTop: '10px', backgroundColor: 'rgba(0,0,0,0)', color: 'white', borderWidth: '1px', width: '100%', borderColor: 'rgba(225,225,225,.5)', borderRadius: '7px', height: '50px' }} />
                        <Button variant="contained" style={{ backgroundColor: 'rgb(69, 255, 255)', color: 'black', minWidth: '100%', height: '50px', margin: '10px 0px 10px 0px' }}>Login with email</Button>
                        <p data-bs-toggle="modal" data-bs-target="#signup" style={{ width: '100%', textAlign: 'center' }}>Don't have an account?</p>
                    </div>
                </div>
            </div>
            <Signup />
        </div>
    )
}

export default Login
