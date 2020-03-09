import React from 'react'
import { graphql, Link } from 'gatsby'
import { Flex, Heading, Box, Text, Divider, Badge, Container } from 'theme-ui'
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useBreakpoints } from 'react-device-breakpoints'
import { DiscussionEmbed } from "disqus-react"

import { PostLayout } from '../components/layout'
import Nav from '../components/nav'
import { BeforeNext } from '../components/pagination'
import SEO from '../components/seo'
import Toc from '../components/toc'

export default ({ data, pageContext }) => {
  const device = useBreakpoints()
  const { prev, next } = pageContext
  const { mdx } = data
  const {
    title,
    date,
    tags,
    TOC,
  } = mdx.frontmatter

  const prevPath = prev ? prev.fields.slug : null
  const nextPath = next ? next.fields.slug : null
  const prevName = prev ? ('<- ' + prev.frontmatter.title) : null
  const nextName = next ? (next.frontmatter.title + ' ->') : null

  const tagPrint = tags && tags.toString() === "uncategorized" ? null : tags.map(tag => (
    <Link key={tag} to={`archives/tag/${tag}`}><Badge mr={1} variant='badges.tag'>{tag}</Badge></Link>
  ))

  const disqusConfig = {
    shortname: "owl-monster",
    config: { identifier: mdx.id, title },
  }
  
  return (
    <PostLayout>
      <SEO title ={title}/>
      <Nav Toc={{isToc: TOC, tableOfContents: mdx.tableOfContents}}/>
      <Flex as='section' sx={{mx:'auto', maxWidth: 1100, justifyContent: 'center', px: [25, 50, 50]}}>
        <Box as='article' sx={{felxShrink: 0, width: 800}}>
          <Heading as='h1'>{title}</Heading>
          <Text>{date} ~ {mdx.timeToRead} min read</Text>
          {tagPrint}
          <Divider />
          <MDXRenderer>
          {mdx.body}
          </MDXRenderer>
          <Divider/>
          <BeforeNext
            prevName={prevName}
            nextName={nextName}
            prevPath={prevPath}
            nextPath={nextPath}
          />
          <Container mb={4}>
            <DiscussionEmbed {...disqusConfig} />
          </Container>
        </Box>
        { 
          device.isMobile ?
            null
          : TOC && <Toc tableOfContents={mdx.tableOfContents}/> 
        }
      </Flex>
    </PostLayout>
  )
}

export const postQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      tableOfContents(maxDepth: 3)
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM, D YYYY")
        author
        tags
        TOC
      }
    }
  }
`
