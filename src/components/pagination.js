/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, Flex } from 'theme-ui'
import PropTypes from 'prop-types'

export const BeforeNext = (props) =>{
  const {prevPath, nextPath, children, prevName, nextName} = props

  return(
    <Flex as='section' sx={{justifyContent: 'center', py: 4,}}>
      {prevPath && <Link to={prevPath} sx= {{variant: 'links.before'}}>{prevName}</Link>}
      {children}
      {nextPath && <Link to={nextPath} sx={{variant: 'links.next'}}>{nextName}</Link>}
    </Flex>
  )
}

const Pagination = ({pathname, pageContext }) => { 
  const { previousPagePath, nextPagePath, numberOfPages } = pageContext
  const pagination = numberOfPages === 1 ? null : [...Array(numberOfPages).keys()].map((page,index)=>{
    return (
      <Link key={'page'+index} to={`${pathname}/${index===0? "" : index+1}`} activeClassName='active' sx={{variant: 'links.pagination'}}>{index+1}</Link>
    )
  })

  return(
    <BeforeNext 
      prevPath={previousPagePath}
      nextPath={nextPagePath}
      prevName='Prev'
      nextName='Next'
    >
      {pagination}
    </BeforeNext>
  )
}

export default Pagination


BeforeNext.propTypes = {
  children: PropTypes.node,
  prevPath: PropTypes.string,
  nextPath: PropTypes.string,
  prevName: PropTypes.string,
  nextName: PropTypes.string,
}

BeforeNext.defaultProps ={
  children: null,
  prevName: 'Prev',
  nextName: 'Next',
}