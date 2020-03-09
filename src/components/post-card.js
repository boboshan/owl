/** @jsx jsx */
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { jsx, Box } from 'theme-ui'

const PostCard = ({ node }) =>{

  return(
  <Box 
      sx={{
        p: [20, 4, 4], 
        bg:'muted', 
        borderRadius: 4, 
        '&:hover': {
          bg: 'lessmuted',    
        }}}>
    {
      node.frontmatter.coverImg && 
      <Link to={node.fields.slug}>
        <Img alt={node.frontmatter.title} 
            sx={{variant:'images.coverImg', mb: 3}} 
            fluid={node.frontmatter.coverImg.childImageSharp.fluid}
            />
      </Link>
    }
    <h1 
      sx={{
        variant:'text.heading', 
        fontSize: 4, 
        mt: 0, 
        mb: 2
      }}>
      <Link 
        to={node.fields.slug} 
        sx={{variant: 'links.title'}}
      >
        {node.frontmatter.title}
      </Link>
    </h1>

    <span 
      sx={{color:'primary'}}
    >
      {node.frontmatter.date} ~ {node.timeToRead} min read
    </span>

    <p sx={{my: 2,}}>{node.excerpt}</p>
    <Link 
      to={node.fields.slug}
    >
      <span 
        sx= {{'&:hover': {'&::before': {content:`'\\2014'`}}}}
      >
        <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 12 14'
        width='12'
        height='14'
        fill='currentColor'>
        <path fill='currentColor' d='M0 0 v14 l12 -7 -12 -7 z'/>
      </svg> Read more
      </span>
   </Link>
  </Box>
  )
}

export default PostCard