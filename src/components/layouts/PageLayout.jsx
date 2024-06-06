import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

const PageLayout = ({children, nama}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default PageLayout