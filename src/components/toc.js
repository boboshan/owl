/** @jsx jsx */
import React, { useState } from 'react'
import {useTransition, useSpring, animated} from 'react-spring'
import { jsx, Divider, Container, Badge, IconButton } from 'theme-ui'

const Toc = ({ tableOfContents }) => {

  const { items } = tableOfContents
  const [tocShow, setTocShow] = useState(true)
  const [list, setList] = useState(items)

  let newList = []

  const showList = () => {
    items.map(item => {
      newList.push(item) 
      setList(newList)
    })
  }

  const removeList = () => {
    for (let i=0; i<items.length; i++) {
      newList.pop()
      setList(newList)
    }
  }
  
  const handleClick = () => {
    setTocShow(!tocShow)
    tocShow ? removeList() : showList()
  }

  const transitionList = useTransition(list, item=>item.url, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const tocWidth = useSpring({
    width: tocShow ? '270px' : '66px',
  })

  const Aside = ({children}) =>(
    <animated.aside style={tocWidth}
        sx={{felxShrink: 15,
        height: 'fit-content',
        position: ['fixed', 'sticky', 'sticky'], 
        top: [null, 5], 
        right: 25, 
        ml: 4, 
        p: '20px', 
        bg: 'background',
        border: '1px solid', 
        borderColor: 'muted',
    }}>
     {children}
    </animated.aside>
  )

  if(typeof tableOfContents.items !== 'undefined') {
    return(
      <Aside>
        <ul
          sx={{listStyleType: 'none', 
          px: 0, 
          py: 0, 
          m:0, 
          maxWidth: 'fit-content',
          a:{
            '&:hover':{
              color: 'secondary',
            }
          }
        }}>
          <Container>
            <IconButton
              sx={{bg: 'transparent', m: 0, p: 0, height: 16, width: 16, cursor: 'pointer', '&:hover':{color:'primary'}, '&:focus':{outline: 'none'}}} 
              aria-label='Toggle Table of Contents' 
              onClick={handleClick}
            > 
              {tocShow 
              ? <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  width='16'
                  height='16'
                  >
                  <path sx={{fill: 'primary'}} d='M1 1 v14 l12 -7 -12 -7 z'/>
                </svg> 
               : <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  width='16'
                  height='16'
                  >
                  <path sx={{fill: 'primary'}} d='M15 1 v14 l-12 -7 12 -7 z'/>
                </svg>}
            </IconButton>
            {tocShow && <Divider/>}
          </Container>    
          {
            transitionList.map(({item, key, props})=>
            <animated.li key={key} style={props}>           
            <a href={item.url}>{item.title}</a>
            {
              (typeof item.items !== 'undefined')
              ? <ul sx={{listStyleType: 'none', m:0, pl: 3}}>
                  {item.items.map(i=>
                    <li key={i.url}>
                      <a href={i.url}>
                        <small>{i.title}</small>
                      </a>
                    </li>
                  )}
                </ul>
              : null
            } 
            </animated.li>
            )
          }     
        </ul> 
      </Aside>
    )}
  return null 
}

export default Toc