/** @jsx jsx */
import { jsx } from 'theme-ui'
import Prism from '@theme-ui/prism'
import { GoLink } from "react-icons/go"

const heading = Tag => props => {
  if (!props.id) return <Tag {...props} />
  return (
    <Tag sx={{'&:hover':{a:{display:'inline-block', position: ['relative','absolute'], ml: [0, '-1.1em'], pr: [0, '0.3em']}}}} {...props}>
      <a
        sx ={{display:'none', variant:'links.heading'}}
        href={`#${props.id}`}><GoLink/></a>
        {props.children}
    </Tag>
  )
}

const components = {
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),

  pre: props => props.children,
  code: Prism,
}

export default components