import React from 'react'
import Styles from './Layout.module.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div className={Styles.page_content}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
