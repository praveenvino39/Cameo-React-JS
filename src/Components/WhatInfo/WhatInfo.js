import { PhoneAndroid, Style, ThumbUpAlt, Videocam } from '@material-ui/icons'
import React from 'react'
import Styles from './WhatInfo.module.css'

function WhatInfo() {
    return (
        <div style={{ marginTop: '20px', color: 'white', display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'flex-start' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>About Cameo</p>
            <div className={Styles.what_info_container} style={{ display: 'grid', marginBottom: '10px', marginTop: '10px', width: '100%', columnGap: '2.5rem', gridTemplateColumns: '1fr 1fr' }}>
                <div style={{ borderRadius: '10px', width: '100%', backgroundColor: 'rgb(28, 28, 28)', padding: '2rem' }}>
                    <p style={{ color: 'rgb(255, 3, 124)', fontSize: '1.1rem', fontWeight: 'bold' }}>
                        What is cameo?
                        </p>
                    <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', }}><PhoneAndroid /> <p style={{ marginTop: '5px' }}>Send your request</p></div>
                        <div style={{ display: 'flex', flexDirection: 'column', }}><Videocam /><p style={{ marginTop: '5px' }}>Get your video</p></div>
                        <div style={{ display: 'flex', flexDirection: 'column', }}><ThumbUpAlt /> <p style={{ marginTop: '5px' }}>Make their year</p></div>
                    </div>
                </div>
                <div className={Styles.second_grid} style={{ borderRadius: '10px', width: '100%', backgroundColor: 'rgb(28, 28, 28)', padding: '2rem' }}>
                    <p style={{ color: 'rgb(69, 255, 255)', fontSize: '1.1rem', fontWeight: 'bold' }}>
                        What does a good request look like?
                        </p>
                    <p style={{ marginTop: '20px' }}>Tip #1</p>
                    <p style={{ marginTop: '10px', color: 'grey' }}>Try to be as specific as possible with your request such as your relationship to the Cameo recipient, numbers &amp; details. Ex. "tell my BFF Cam congrats on graduating from UCLA."</p>
                </div>
            </div>
        </div >
    )
}

export default WhatInfo
