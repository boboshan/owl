/** @jsx jsx */
import { graphql } from 'gatsby'
import { jsx, Box, Flex, Text, Heading } from 'theme-ui'
import MasonryGrid from "masonry-grid"
import PostCard from '../components/post-card'
import Pagination from '../components/pagination'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data, pageContext }) => {
  const posts = data.allMdx.edges
  const totalCount = data.allMdx.totalCount
  const pathname = 'posts'

  const postList = posts.map(({node}) =>{
    return (
      <PostCard key={node.id} node={node}/>
    )
  })

  return (
    <Layout>
      <SEO title = 'Posts'/>
      <Flex as='section' sx={{alignItems:'flex-end', justifyContent:'space-between', pb: 3, px: [15,4]}}>
        <Heading as='h1'>All Posts</Heading>
        <Text variant='body'> {totalCount} {totalCount===1 ? 'Article' : 'Articles'}</Text>  
      </Flex>   
      <Box as='section'>
          <MasonryGrid gap='3.5vmin' minWidth={500}>
            {postList}
          </MasonryGrid>
      </Box>
      <Pagination pathname={pathname} pageContext={pageContext} />
    </Layout>
  )
}

export const postListQuery = graphql`
  query PostListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: {fileAbsolutePath: {regex: "/posts/"}}
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            date(formatString: "MMMM, D YYYY")
            author
            coverImg {
              childImageSharp {
                fluid(maxHeight: 400) {
                  presentationHeight
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          fields{
            slug
          }
          timeToRead
        }
      }
      totalCount
    }
  }
`
