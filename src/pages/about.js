/** @jsx jsx */
import React from 'react'
import { jsx, Grid, Heading, Box } from 'theme-ui'

import Layout from '../components/layout'
import SEO from '../components/seo'


const Projects = () => {

  return (
  <Layout>
    <SEO title='About' />
    <Grid px={25} pb={5} columns={1} gap={4} as='section' sx={{justifyItems:'center'}}>
      <Heading variant='caps'>Comming Soon</Heading>
      <Box as='section' sx={{p:4, bg: 'muted', border: '2px solid', borderColor: 'text'}}>
        About boboshan
         / About owl.monster
      </Box>
    </Grid>
  </Layout>
  )
}

export default Projects
