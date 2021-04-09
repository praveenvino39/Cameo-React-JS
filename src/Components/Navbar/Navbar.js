import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, Typography, TextField, makeStyles, Button, Avatar, Menu, MenuItem, useTheme } from '@material-ui/core'
import Styles from './Navbar.module.css'
import { Search } from '@material-ui/icons'
import Login from '../Login/Login'


const useStyles = makeStyles({
    searchInput: {
        color: 'rgb(255, 255, 255)'
    }
})

function Navbar() {
    const theme = useTheme()
    const classes = useStyles()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loginModalOpen, setLoginModalOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(() => {
        const user = localStorage.getItem('userId')
        if (user) setIsLoggedIn(true)
        else setIsLoggedIn(false)
    }, [])
    return (
        <div>
            <AppBar elevation={0}>
                <Toolbar>
                    <div style={{ flexGrow: '1', marginRight: '10px' }}>
                        <img alt="logo" id={Styles.logo} src="https://cdn.cameo.com/staticDir/logo_white.svg" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgb(37, 37, 37)', padding: '5px 10px', borderRadius: '100px', width: '450px' }}>
                        <Search />
                        <TextField style={{ marginLeft: '5px' }} InputProps={{ disableUnderline: true, className: classes.searchInput, placeholder: "Search" }} />
                    </div>
                    {!isLoggedIn ? <Button data-bs-toggle="modal" data-bs-target="#login" style={{ marginLeft: '10px' }} color="secondary"><Typography variant="body2" color="secondary">Login</Typography></Button> : <Avatar onClick={handleClick} style={{ marginLeft: '10px' }}>PV</Avatar>}

                </Toolbar>
            </AppBar>
            <Login loginModalOpen={loginModalOpen} setLoginModalOpen={setLoginModalOpen} />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Typography color="primary">My Profile</Typography></MenuItem>
                <MenuItem onClick={handleClose}><Typography color="primary">My Sales</Typography></MenuItem>
                <MenuItem onClick={handleClose}><Typography color="primary">My Purchase</Typography></MenuItem>
                <MenuItem onClick={handleClose}><Typography color="primary">Logout</Typography></MenuItem>
            </Menu>
        </div>
    )
}

export default Navbar
