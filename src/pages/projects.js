/** @jsx jsx */
import React from 'react'
import { jsx, Grid, Heading } from 'theme-ui'

import Layout from '../components/layout'
import SEO from '../components/seo'


const Projects = () => {

  return (
  <Layout>
    <SEO title='Projects' />
    <Grid px={25} pb={5} columns={1} gap={4} as='section' sx={{justifyItems:'center'}}>
        <Heading variant='caps'>Comming Soon</Heading>
      <iframe src="https://audiomack.com/embed/song/boboshan/calling-wind?background=1" title='Calling Wind' scrolling="no" width="100%" height="252" scrollbars="no" frameBorder="0"></iframe>
    </Grid>
  </Layout>
  )
}

export default Projects
