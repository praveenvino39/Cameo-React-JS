import { Avatar, Breadcrumbs, Button, CircularProgress, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Styles from './CameoDetail.module.css'
import { Link, PhoneAndroid, Search, ThumbUpAlt, Videocam, } from '@material-ui/icons'
import { Link as MUILink } from '@material-ui/core/';
import HowPopup from '../../Components/HowPopup/HowPopup';
import WhatInfo from '../../Components/WhatInfo/WhatInfo';
import axios from 'axios';
import { useParams } from 'react-router';

function CameoDetail() {
    const [cameo, setCameo] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    let { id } = useParams();
    useEffect(() => {
        const cameoDetail = async () => {
            const response = await fetch(`http://127.0.0.1:4000/featured/${id}`)
            const data = await response.json()
            setCameo(data)
            setTimeout(() => { setIsLoading(false) }, 1700)
        }
        cameoDetail()

    }, [])
    return (
        isLoading ? <div style={{ width: '100%', height: '70vh', display: 'grid', placeItems: 'center' }}> <CircularProgress style={{ color: 'rgb(255, 3, 124)' }} /> </div> :
            <div className={Styles.cameo_detail_content}>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', margin: '10px 0px', justifyContent: 'space-between' }}>
                    <Breadcrumbs style={{ color: 'rgb(69, 255, 255)' }} aria-label="breadcrumb">
                        <MUILink color="inherit" href="/">
                            Material-UI
  </MUILink>
                        <MUILink color="inherit" href="/getting-started/installation/">
                            Core
  </MUILink>
                        <Typography >Breadcrumb</Typography>
                    </Breadcrumbs>
                    <div style={{ display: 'flex' }}>
                        <div><Button style={{ color: 'black', backgroundColor: 'rgb(62, 62, 62)', borderRadius: '1000px', color: 'rgb(69, 255, 255)' }} variant="outlined">Join Fan Club</Button></div>
                        <Button style={{ borderRadius: '100px', marginLeft: '10px', backgroundColor: 'rgb(62, 62, 62)', color: 'rgb(69, 255, 255)' }}><Link style={{ color: 'white' }} /></Button>
                    </div>
                </div>
                <div className={Styles.avatar_container} style={{ display: 'flex', alignItems: 'center', color: 'white', marginTop: '20px', maxWidth: '84rem' }}>

                    <Avatar className={Styles.avatar} style={{ width: '180px', height: '180px', marginRight: '30px' }}><img style={{ width: '180px', height: '180px' }} src={cameo.image} /></Avatar>

                    <div className={Styles.info_container} style={{ minHeight: '200px', maxWidth: '70%' }}>
                        <p className={Styles.name} style={{ fontSize: "2em", marginLeft: '20px', fontWeight: 'bold' }}>{cameo.title}</p>
                        <p style={{ marginLeft: '20px', color: 'grey', marginTop: '2px' }}>{cameo.position}</p>
                        <p style={{ marginLeft: '20px', color: 'grey', marginTop: '20px' }}>{cameo.description}</p>
                    </div>
                </div>
                <div style={{ marginTop: '10px', minHeight: '75px', minWidth: '100%', backgroundColor: 'rgb(28, 28, 28)', borderRadius: '0.8rem', color: 'white', display: 'flex', justifyContent: 'space-evenly' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', alignItems: 'center', width: '100%' }}>
                        <p style={{ display: 'block', color: 'grey', fontSize: '.9rem' }}>Responds in</p>
                        <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>

                            <i class="far fa-clock"></i><p style={{ display: 'inline', marginLeft: '5px' }}>6 Days</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', alignItems: 'center', width: '100%' }}>
                        <p style={{ display: 'block', color: 'grey', fontSize: '.9rem' }}>Review</p>
                        <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>

                            <i style={{ color: 'yellow' }} class="fas fa-star"></i><p style={{ display: 'inline', marginLeft: '5px' }}>4.7</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', alignItems: 'center', width: '100%' }}>
                        <p style={{ display: 'block', color: 'grey', fontSize: '.9rem' }}>Responds in</p>
                        <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                            <i style={{ color: "#ff08c5" }} class="fas fa-heart"></i><p style={{ display: 'inline', marginLeft: '5px' }}>1K</p>
                        </div>
                    </div>
                </div>
                <Button variant="contained" style={{ backgroundColor: 'rgb(255, 3, 124)', color: 'white', width: '100%', marginTop: '1.4rem', padding: '.9rem 1.1rem', borderRadius: '500px', fontSize: '1rem', fontWeight: 'bold' }}>Request ${cameo.price}</Button>
                <button type="button" data-bs-toggle="modal" data-bs-target="#how" style={{ marginTop: '1.4rem', width: '100%', display: 'flex', outline: 'none', backgroundColor: 'rgba(0,0,0,0)', border: 'none', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: 'white', fontSize: '1.2rem', }}>
                    <i class="fas fa-info-circle" style={{ marginRight: '5px' }}></i><p>How does it work ?</p>
                </button>

                {/* How it works */}
                <HowPopup />
                <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '1rem', color: 'white', fontWeight: 'bold' }}>Reviews</div>
                    <div style={{ fontSize: '1rem', color: 'rgb(69, 255, 255)', fontWeight: 'bold' }}>See all reviews</div>
                </div>
                <div style={{ marginTop: '10px', minHeight: '75px', minWidth: '100%', backgroundColor: 'rgb(28, 28, 28)', borderRadius: '0.8rem', color: 'white', display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
                    <div>
                        <i style={{ color: 'yellow' }} class="fas fa-star"></i>
                        <i style={{ color: 'yellow' }} class="fas fa-star"></i>
                        <i style={{ color: 'yellow' }} class="fas fa-star"></i>
                        <i style={{ color: 'yellow' }} class="fas fa-star"></i>
                        <i style={{ color: 'yellow' }} class="fas fa-star"></i><span style={{ marginLeft: '10px' }}>5.0</span>
                    </div>

                    <p style={{ marginTop: '20px', fontSize: '.9rem' }}>Reviewed by A***** on April 4th, 2021</p>
                    <p style={{ marginTop: '10px', fontSize: '.9rem', color: 'grey' }}>Amazing!! You are the man! I couldn't wait for her birthday, I had to show her. I wish that I would have video taped her reaction. She loved it and now she wants to show everyone! Thank you very much. I couldn't have asked for a better video.</p>
                </div>
                <div style={{ marginTop: '10px', minHeight: '75px', minWidth: '100%', backgroundColor: 'rgb(28, 28, 28)', borderRadius: '0.8rem', color: 'white', display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
                    <div>
                        <i style={{ color: 'yellow' }} class="fas fa-star"></i>
                        <i style={{ color: 'yellow' }} class="fas fa-star"></i>
                        <i style={{ color: 'yellow' }} class="fas fa-star"></i>
                        <i style={{ color: 'yellow' }} class="fas fa-star"></i>
                        <i style={{ color: 'yellow' }} class="fas fa-star"></i><span style={{ marginLeft: '10px' }}>5.0</span>
                    </div>

                    <p style={{ marginTop: '20px', fontSize: '.9rem' }}>Reviewed by A***** on April 4th, 2021</p>
                    <p style={{ marginTop: '10px', fontSize: '.9rem', color: 'grey' }}>Amazing!! You are the man! I couldn't wait for her birthday, I had to show her. I wish that I would have video taped her reaction. She loved it and now she wants to show everyone! Thank you very much. I couldn't have asked for a better video.</p>
                </div>
                <div style={{ marginTop: '20px', color: 'white', display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Related Categories</p>
                    <div style={{ display: 'flex', marginTop: '10px' }}>
                        <div style={{ border: '1px solid rgba(255,255,255,0.4)', marginRight: '10px', padding: '3px 7px', borderRadius: '100px' }}><Search />Actors</div>
                        <div style={{ border: '1px solid rgba(255,255,255,0.4)', marginRight: '10px', padding: '3px 7px', borderRadius: '100px' }}><Search />Actors</div>
                        <div style={{ border: '1px solid rgba(255,255,255,0.4)', marginRight: '10px', padding: '3px 7px', borderRadius: '100px' }}><Search />Actors</div>
                        <div style={{ border: '1px solid rgba(255,255,255,0.4)', marginRight: '10px', padding: '3px 7px', borderRadius: '100px' }}><Search />Actors</div>
                    </div>
                </div>
                <WhatInfo />
            </div>
    )
}

export default CameoDetail
