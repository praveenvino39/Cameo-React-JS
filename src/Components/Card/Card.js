import { Typography } from '@material-ui/core'
import React from 'react'
import Styles from './Card.module.css'
import { Link } from 'react-router-dom'

function Card(props) {
    return (
        <Link to={"/detail/" + props.id}>
            <div className={Styles.card} style={{ width: '200px', margin: '10px' }}>
                <div style={{ minWidth: '200px', position: 'relative', width: '200px', minHeight: '200px', margin: '5px', backgroundImage: `url(${props.image})`, backgroundRepeat: 'no-repeat', borderRadius: '10px', backgroundPosition: 'center', backgroundSize: '210px' }}>
                    <div style={{ position: 'absolute', bottom: '5px', right: '5px', zIndex: '1', fontWeight: 'bold', color: 'white' }}>${props.price}</div>
                    <div style={{ position: 'absolute', bottom: '0px', height: '100px', width: '100%', background: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)' }}></div>
                </div>
                <Typography variant="h6" style={{ width: '180px', fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', color: 'white', textOverflow: 'ellipsis' }}>{props.title}</Typography>
                <Typography variant="body2" style={{ width: '180px', fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', color: 'grey', textOverflow: 'ellipsis' }}>{props.position}</Typography>
            </div>
        </Link>

    )
}

export default Card
