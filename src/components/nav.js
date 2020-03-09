/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { jsx, Flex, IconButton, useColorMode, } from "theme-ui"
import { Link } from "gatsby"
import { useBreakpoints } from 'react-device-breakpoints'
import TocBlock from '../components/toc'

export const ColorToggle = ({onClick}) => (
  <IconButton
    aria-label='Toggle Dark Mode'  
    variant='icon.toggle'
    sx={{borderRadius:'50%'}}
      onClick={onClick}
  >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24'
        height='24'>
        <circle fill='currentColor' r={11} cx={12} cy={12}/>
        <path sx={{fill:'background'}} d="M12 3 v18 a9 9 0 0,0 0 -18 z"/>
      </svg>
    </IconButton>
)

export const MenuToggle = ({onClick}) => (
  <IconButton
    aria-label='Toggle Menu'
    variant='icon.toggle'
    onClick={onClick}
  >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24'
        height='24'>
        <rect sx={{fill: 'currentColor'}} x={1} y={1} width={22} height={22}/>
        <rect sx={{fill: 'background'}} x={3} y={11} width={18} height={10}/>
      </svg>
  </IconButton>
)

export const TopToggle = ({onClick}) => (
  <IconButton
    aria-label='Back to Top'
    variant='icon.toggle'
    onClick={onClick}
  >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24'
        height='24'>
        <path fill='currentColor' d="M12 3 l10 16 h-20 l10 -16 z"/>
      </svg>
  </IconButton>
)

export const TocToggle = ({onClick}) => (
  <IconButton
    aria-label='Toggle Table of Contents'
    variant='icon.toggle'
    onClick={onClick}
  >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24'
        height='24'>
        <path fill='currentColor' d="M19 2 v20 l-16 -10 16 -10 z"/>
      </svg>
  </IconButton>
)

const Nav = ({Toc={isToc: null, tableOfContents: null}}) => {
  const navLinks = { 
    home: '/',
    posts: '/posts/',
    projects: '/projects',
    archives: '/archives',
    about: '/about',
  }
  const arrangeLinks = (obj) => Object.entries(obj).map(
    ([key,value]) => (
      <Link to={value} key={key} partiallyActive={key==='home' ? false : true} activeClassName='active' sx={{variant:'links.nav'}}>{key}</Link>
    )
  )
  const {isToc, tableOfContents} = Toc
  const device = useBreakpoints()
  const modes = ['dark', 'light', 'deep', 'swiss']
  const [mode, setMode] = useColorMode()
  const [menu, setMenu] = useState(false)
  const [tocVisible, setTocVisible] = useState(false)
  const [topVisible, setTopVisible] = useState(false)

  const handleColorMode = () =>{
    const index = modes.indexOf(mode)
    const next = modes[(index + 1) % modes.length]
    setMode(next)
  }

  const handleToTop = () => {
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

  useEffect(()=>{
    const handleScroll = ()=>{
      setTopVisible(window.scrollY>90)
    }
    window.addEventListener('scroll', handleScroll)
    return ()=>(window.removeEventListener('scroll', handleScroll))
  })

  return(
    device.isMobile ?
        <>
        <Flex 
          sx={{mx: 'auto',
            zIndex: 10,
            position: 'sticky',
            top: 4,
            mb: 4, 
            justifyContent: 'center', 
            alignItems: 'center'
          }}>
            <MenuToggle onClick={()=>setMenu(!menu)}/> 
            <ColorToggle onClick={handleColorMode}/>
           {topVisible && <TopToggle onClick={handleToTop} />}
           {isToc && <TocToggle onClick={()=>setTocVisible(!tocVisible)} /> }
        </Flex>     
        {menu &&  
          <Flex 
          sx={{flexDirection: 'column',
            position: 'sticky',
            top: '22vmin',
            zIndex: 10,
            mb: 4,
            width: '100%',
            p: 20,
            bg:'background', 
          }}>
          {arrangeLinks(navLinks)}
        </Flex>}
        {tocVisible && <TocBlock tableOfContents={tableOfContents}/>}
        </>
      :
      <Flex as='nav' sx={{mt: 2, mb: 4, bg:'background', justifyContent: 'center', alignItems: 'center', }}>
        <Flex sx={{px: 1, bg:'muted', borderRadius: 4, width: 'fit-content', height:'fit-content', }}>
          {arrangeLinks(navLinks)}
        </Flex>
        <ColorToggle onClick={handleColorMode}/>
      </Flex>
    )
}

export default Nav