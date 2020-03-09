/** @jsx jsx */
import React from "react"
import { jsx, Box, Button, Grid } from 'theme-ui'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const tagGroup = data.tagGroup.group
  const categoryGroup = data.categoryGroup.group
  const tagList = tagGroup.map(tag=>
      <Button key={tag.fieldValue} variant='tag'><small>{tag.fieldValue} ({tag.totalCount})</small></Button>
  )
  
  const categoryList = categoryGroup.map(category=>
      <Button key={category.fieldValue} variant='tag'><small>{category.fieldValue} ({category.totalCount})</small></Button>
  )

  return(
  <Layout>
    <SEO title="Archives" />
      <Grid as='section' gap={[3, 4]} columns={[[1, 2], '1fr 2fr']} mb={6}>
        <Grid as='section' gap={[3, 4]} columns={1}>
          <Box sx={{bg: 'muted', p: 25, borderRadius: 4, }}>
            {tagList}
          </Box>
          <Box sx={{bg: 'muted', p: 25, borderRadius: 4, }}>
            {categoryList}
          </Box>
        </Grid>
        <Box as='aside' sx={{p: 25, bg: 'muted', borderRadius: 4}}>comming soon</Box>
      </Grid>
  </Layout>
  )
}


export default IndexPage


export const archiveQuery = graphql`
  query ArchiveQuery{

    tagGroup: allMdx (filter: {fileAbsolutePath: {regex: "/posts/"}}) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    categoryGroup: allMdx (filter: {fileAbsolutePath: {regex: "/posts/"}}) {
      group(field: fields___category){
        fieldValue
        totalCount
      }
    }
  } 
`
    // dateGroup: allMarkdownRemark {
    //   group(field: frontmatter___date) {
    //     fieldValue
    //     nodes {
    //       id
    //       frontmatter {
    //         title
    //         path
    //       }
    //     }
    //   }
    // }