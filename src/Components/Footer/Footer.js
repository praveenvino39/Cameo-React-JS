import { Button } from '@material-ui/core'
import { Apple, ArrowForward, ArrowForwardIos, Email, Facebook, Instagram, Twitter } from '@material-ui/icons'
import React from 'react'
import Styles from './Footer.module.css'

function Footer() {
    return (
        <div className={Styles.switch_column} style={{ display: 'flex', color: 'white', backgroundColor: 'rgb(28, 28, 28)', padding: '0px 2rem', justifyContent: 'space-evenly' }}>
            <div style={{ width: '100%', padding: '3rem 0rem' }}>
                <div style={{ padding: '0px 20px' }}>
                    <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Join our mailing list</p>
                    <p style={{ marginTop: '10px', fontSize: '.9rem' }}>Be the first to know about the newest stars and best deals on Cameo</p>
                    <div style={{ display: 'flex', marginTop: '20px' }}>
                        <input placeholder="Email" style={{ paddingLeft: '20px', backgroundColor: 'rgba(0,0,0,0)', borderWidth: '1px', width: '80%', borderColor: 'rgba(225,225,225,.5)', borderRadius: '7px', height: '50px' }} />
                        <Button variant="contained" style={{ backgroundColor: 'rgb(255, 3, 124)', marginLeft: '20px', }} ><ArrowForward style={{ color: 'white' }} /></Button>
                    </div>
                    <p style={{ marginTop: '10px', fontSize: '.9rem' }}>Emails subject to privacy policy</p>
                </div>
            </div>
            <div style={{ width: '100%', height: "200px", padding: '3rem 0px 0px' }}>
                <div style={{ padding: '0px 20px' }}>
                    <div style={{ width: '65%', display: 'flex', justifyContent: 'space-between' }}>
                        <Facebook />
                        <Instagram />
                        <Twitter />
                        <Email />
                        <Apple />
                    </div>
                    <p style={{ marginTop: '10px', fontSize: '.9rem' }}>Ready to become a talent on Cameo?</p>
                    <Button style={{ border: '1px solid white', marginTop: '20px', padding: '1rem' }}>Enroll as talent</Button>
                </div>
            </div>
        </div>
    )
}

export default Footer
