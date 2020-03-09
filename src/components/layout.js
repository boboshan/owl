/** @jsx jsx */
import {useTransition, animated} from 'react-spring'
import React, { useEffect, useState } from 'react'
import { useBreakpoints } from 'react-device-breakpoints'

import { jsx, Box, IconButton, } from 'theme-ui'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'

import Header from './header'
import Nav from './nav'
import Footer from './footer'

// Global Style
export const GlobalStyle = (props) => 
  <Global
    styles={theme => ({
        '*': { 
            'scrollBehavior': 'smooth', 
            '::selection': { 
                color: 'red', 
                background: 'yellow',
            }
        }
    })}
/>

// ToTop
export const ToTop=()=> {
  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    const handleScroll = ()=>{
      setVisible(window.scrollY>90)
    }
    window.addEventListener('scroll', handleScroll)
    return ()=>(window.removeEventListener('scroll', handleScroll))
  })

  const handleClick = () => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }

  const transitions = useTransition(visible, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    transitions.map(({ item, key, props }) =>
    item && 
    <animated.div key={key} style={props}> 
      <IconButton aria-label='Back to Top' onClick={handleClick} variant='top'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24'
        height='24'
        fill='currentColor'>
        <path fill='currentColor' d='M4 18 h16 l-8 -14 l-8 14 z'/>
      </svg>
    </IconButton>
  </animated.div>
    )
  )
}

// Layout
const Layout = ({ children }) => {
  const device = useBreakpoints()
  
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Nav />   
      <Box as='main'sx={{mx:'auto', maxWidth: 1100, px: [15, 50, 50]}}>
        {children}
      </Box>
      { !device.isMobile && <ToTop /> }
      <Footer/>
    </>
  )
}

export default Layout


//PostLayout
export const PostLayout = ({ children }) => {
  const device = useBreakpoints()

  return (
    <>
      <GlobalStyle/>
      <Header/>
        {children}
      { !device.isMobile && <ToTop /> }
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

PostLayout.propTypes ={
  children: PropTypes.node.isRequired,
}

// const data = useStaticQuery(graphql`
// query SiteTitleQuery {
//   site {
//     siteMetadata {
//       title
//     }
//   }
// }
// `)