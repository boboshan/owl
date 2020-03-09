import React from 'react'
import { Box } from 'theme-ui'

const Footer = () => (

  <footer>
    <Box sx={{mx:'auto', maxWidth: 1100, px: [20, 50, 50], pb: 5, textAlign: 'center'}}>
      © {new Date().getFullYear()}, 
      <a href="https://owl.monster"> Owl.monster</a>
    </Box>
  </footer>

)

export default Footer