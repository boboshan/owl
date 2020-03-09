/** @jsx jsx */
import { jsx, } from "theme-ui"

export default props => {   
    return(
        <div sx={{m: 3, p: 3, border:'10px solid', borderColor: 'text', }}>{props.children}</div>
    )
}