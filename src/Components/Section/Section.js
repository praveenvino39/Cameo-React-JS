import { Typography, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'


const useStyles = makeStyles({
    hideScrollBar: {
        '&::-webkit-scrollbar': {
            width: 0,  /* Remove scrollbar space */
            background: "none",  /* Optional: just make scrollbar invisible */
        }
    }
})
function Section({ title }) {
    const classes = useStyles()
    const [cameos, setCameos] = useState([])
    useEffect(() => {
        const featured = async () => {
            const response = await fetch('http://127.0.0.1:4000/featured')
            const data = await response.json()
            setCameos(data)
        }
        featured()
    }, [])
    return (
        <div>
            <Typography variant="h5" style={{ fontWeight: 'bolder', marginLeft: '10px', color: 'white' }}>{title}</Typography>
            <div className={classes.hideScrollBar} style={{ display: 'flex', width: '100%', whiteSpace: 'nowrap', flexWrap: 'nowrap', overflowX: 'auto', scrollBehavior: 'smooth', scrollbarColor: 'red', color: 'white' }}>
                {cameos.map((cameo) => <Card image={cameo.image} title={cameo.title} id={cameo.id} position={cameo.position} price={cameo.price} />)}
            </div>
        </div>
    )
}

export default Section
