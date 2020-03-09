/** @jsx jsx */
import React from 'react'
import { jsx, Heading, Flex} from 'theme-ui'
import { useSpring, animated } from 'react-spring'
import range from 'lodash-es/range'

import Layout from '../components/layout'
import SEO from '../components/seo'


const IndexPage = () => {

  const items = range(12)
  const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  })

  return (
  <Layout>
    <SEO title='O W L' />
      <Flex sx={{width: 'fit-content', mx: 'auto', my: 5,}}>
        {items.map(i => 
          <animated.div 
            key={i} 
            sx={{width: 13, 
              height: 300, 
              bg: 'text', 
              mx: 10, 
              willChange: 'transform'
            }} 
            style={{ transform: radians.interpolate(interp(i)) }} />
        )}
      </Flex>
      <Heading variant='caps' sx={{width: 'fit-content', mx:'auto'}}>Comming Soon</Heading>
  </Layout>
  )
}

export default IndexPage
