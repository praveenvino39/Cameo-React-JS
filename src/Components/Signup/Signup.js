import { Button } from '@material-ui/core'
import React from 'react'

function Signup() {
    return (
        <div class="modal fade mt-5" id="signup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="text-white modal-dialog">
                <div style={{ backgroundColor: 'rgb(28, 28, 28)' }} class=" modal-content">
                    <div class="modal-header" style={{ borderBottom: '0px', padding: '20px 40px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <h5 class="modal-title text-center" id="exampleModalLabel">Welcome to Cameo</h5>
                            <p>Book personalized video shoutouts from your favorite people</p>
                        </div>

                        <button type="button" class="btn-close btn-sm" style={{ color: 'white !important', backgroundColor: 'white' }} data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                        <input placeholder="Full name" style={{ paddingLeft: '20px', backgroundColor: 'rgba(0,0,0,0)', color: 'white', borderWidth: '1px', width: '100%', borderColor: 'rgba(225,225,225,.5)', borderRadius: '7px', height: '50px', margin: '5px 0px 0px 0px' }} />
                        <input placeholder="Birthday" style={{ paddingLeft: '20px', backgroundColor: 'rgba(0,0,0,0)', color: 'white', borderWidth: '1px', width: '100%', borderColor: 'rgba(225,225,225,.5)', borderRadius: '7px', height: '50px', margin: '5px 0px 0px 0px' }} />
                        <input placeholder="Email" style={{ paddingLeft: '20px', backgroundColor: 'rgba(0,0,0,0)', color: 'white', borderWidth: '1px', width: '100%', borderColor: 'rgba(225,225,225,.5)', borderRadius: '7px', height: '50px', margin: '5px 0px 0px 0px' }} />
                        <input placeholder="Password" type="password" style={{ paddingLeft: '20px', backgroundColor: 'rgba(0,0,0,0)', color: 'white', borderWidth: '1px', width: '100%', borderColor: 'rgba(225,225,225,.5)', borderRadius: '7px', height: '50px', margin: '5px 0px 0px 0px' }} />
                        <input placeholder="Invite code (Optional)" style={{ paddingLeft: '20px', backgroundColor: 'rgba(0,0,0,0)', color: 'white', borderWidth: '1px', width: '100%', borderColor: 'rgba(225,225,225,.5)', borderRadius: '7px', height: '50px', margin: '5px 0px 0px 0px' }} />

                        <Button variant="contained" style={{ backgroundColor: 'rgb(69, 255, 255)', color: 'black', minWidth: '100%', height: '50px', margin: '10px 0px 10px 0px' }}>Login with email</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
