export default {
// Config
useColorSchemeMediaQuery: false,
  useCustomProperties: true,
  initialColorMode: 'dark',
  colors: {
    text: '#eee',
    background: '#111',
    primary: '#33e',
    secondary: '#FF1493', // #e0f
    thirdary: '#00009f',
    muted: '#191919',
    highlight: '#444',
    gray: '#999',
    accent: '#c0f',
    lessmuted: '#222',
    header: 'yellow',
    special: 'orangered',
    logoText: '#111',
    eyes: 'orangered',
    eyebrow: '#eee',
    mouth: '#eee',
    teeth: 'orangered',
    // code
    string: '#7ec699',
    function: '#f08d49',
    keyword: '#cc99cd',
    comment: '#999988',
    punctuation: '#ccc',
    attr: '#e2777a',
    constant: '#f8c555',
    functionName: '#6196cc',

    modes: {
      light: {
        text: '#000',
        background: '#fff',
        primary: '#33e',
        secondary: '#119',
        thirdary: '#00009f',
        muted: '#f6f6f6',
        highlight: '#efeffe', // '#ffffcc',
        gray: '#777',
        accent: '#609',
        lessmuted: '#eee',
        header: '#000',
        logoText: '#fff',
        eyes: 'orangered',
        eyebrow: '#000',
        mouth: 'orangered',
        teeth: '#000',
        //code
        string: '#e3116c',
        function: '#d73a49',
        variable: '#36acaa',
        keyword: '#00009f',
        comment: '#999',
        punctuation: '#393A34',
        attr: '#00a4db',
        constant: '#36acaa',
        functionName: '#d73a49',


      },
      deep: {
        text: 'hsl(210, 50%, 96%)',
        background: 'hsl(230, 25%, 18%)',
        primary: 'hsl(260, 100%, 80%)',
        secondary: 'hsl(290, 100%, 80%)',
        highlight: 'hsl(260, 20%, 40%)',
        accent: 'hsl(290, 100%, 80%)',
        muted: 'hsla(230, 20%, 0%, 20%)',
        gray: 'hsl(210, 50%, 60%)',
        lessmuted: 'hsla(230, 20%, 0%, 10%)',
      },

      swiss: {
        text: 'hsl(10, 20%, 20%)',
        background: 'hsl(10, 10%, 98%)',
        primary: 'hsl(10, 80%, 50%)',
        secondary: 'hsl(10, 60%, 50%)',
        highlight: 'hsl(10, 40%, 90%)',
        accent: 'hsl(250, 60%, 30%)',
        muted: 'hsl(10, 20%, 94%)',
        gray: 'hsl(10, 20%, 50%)',
        bright: 'hsl(10, 20%, 20%)',
        eyes: 'hsl(10, 80%, 50%)',
        eyebrow: 'hsl(10, 20%, 20%)',
        mouth: 'hsl(10, 20%, 20%)',
        lessmuted: 'hsla(10, 20%, 60%, 20%)',
        logoText: '#fff',
        teeth: 'orangered',
        header: 'hsl(10, 80%, 50%)',
        //code
        string: '#e3116c',
        function: '#d73a49',
        variable: '#36acaa',
        keyword: '#00009f',
        comment: '#999',
        punctuation: '#393A34',
        attr: '#00a4db',
        constant: '#36acaa',
        functionName: '#d73a49',
      },
    },
  },

    fonts: {
      body: 'system, -apple-system, "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
      heading: 'inherit',
      monospace: 'Menlo, monospace',
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    fontWeights: {
      body: 400,
      heading: 700,
      display: 900,
    },
    lineHeights: {
      body: 1.65,
      heading: 1.25,
    },
    radii: [1, 3, 5, 7, 9, 11, 13, 15, 17],

    // Handle Responsive
    breakpoints: ['40em', '56em', '64em',],

    // Variants
    text: {
      heading: {
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 5,
        textTransform: 'capitalize'
      },
      display: {
        variant: 'text.heading',
        fontSize: [5, 6],
        fontWeight: 'display',
        letterSpacing: '-0.03em',
        mt: 3,
      },
      caps: {
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      },
    },

    images: {
      coverImg:{
        borderRadius: 3,
        '@keyframes flashIn': {
          'from': {
            opacity: 0.4,
            filter: 'grayscale(100%)',
          },
          to: {
            opacity: 1,
            filter: 'grayscale(0)',
          }
        },
        '&:hover': {
          animation: 'flashIn 0.5s'
        }
      },
    },

    buttons: {
      tag:{
        fontWeight: 'heading',
        borderRadius: 1,
        py: 1,
        px: 2,
        m: 1,
        color: 'text',
        bg: 'primary',
        cursor: 'pointer',
        '&:focus':{
          outline: 'none',
          boxShadow: theme=> `inset 0 0 0 1px ${theme.colors.text}`
        },
        '&:hover':{
          bg: 'secondary',
        },
      },

      top: {
        height: 35,
        width: 35,
        position:'fixed', 
        borderRadius: '50%', 
        right: [25, 5], 
        bottom: [60, 5], 
        bg: 'primary',
        cursor: 'pointer',  
        '&:hover': {
          animation: 'flashIn 0.5s',
          animationFillMode: 'forwards',
        },
        '&:focus': {
          outline: 'none',
        },
      },

      icon:{
        toggle: {
          mx: 2, 
          bg: 'muted', 
          borderRadius: 0, 
          cursor:'pointer',
          '&:hover': {
            color:'primary',
          },
          '&:focus': {
            outline: 'none', 
            boxShadow: theme=>`inset 0 0 0 2px ${theme.colors.primary}`,
          },
        }, 
      },
    },

    links: {
      nav: {
        color: 'text',
        fontWeight: 'heading',
        textDecoration:'none',
        px: 2,
        py: 1,
        textTransform: 'capitalize',
        '&:hover': {
          color: 'primary'
        },
      },
      title: {
        color: 'text',
        textDecoration:'none',
        textTransform: 'capitalize',
        '&:hover': {
          color: 'primary'
        },
      },
      heading: {
        color: 'text',
        '&:hover': {
          color: 'primary'
        },
      },
      pagination: {
        variant: 'links.nav',
      },
      before: {
        variant: 'links.nav',
        '&:hover': {
          '&::before': {
            content:`'\\003C\\002D\\205F'`,
          },
        },
      },
      next: {
        variant: 'links.nav',
          '&:hover': {
            '&::after': {
              content:`'\\205F\\002D\\003E'`,
          },
        },
      },
    },

    badges: {
      tag: {
        color: 'background',
        bg: 'primary',
        '&:hover': {
          bg: 'secondary',
        },
      },
      toc: {
        color: 'primary',
        bg: 'transparent',
        boxShadow: 'inset 0 0 0 1px',
        cursor: 'pointer'
      },
      tagNumber: {
        color: 'secondary',
        bg: 'transparent',
        boxShadow: 'inset 0 0 0 1px',
      },
    },
    
    // Styles for MDX
    styles: {
      Container: {
        p: 3,
        maxWidth: 1024,
      },
      root: {
        fontFamily: 'body',
        lineHeight: 'body',
        fontWeight: 'body',
        fontSize: 17,
        a:{
          color: 'primary',
          textDecoration:'none',
          '&:hover': {
            color: 'special'
          },
          '&.active': {
            color: 'special'
          },
        },
        // scrollbar
        '::-webkit-scrollbar': {
          height: 6,
          width: 10,
        },
        '::-webkit-scrollbar-track': {
          background: theme => theme.colors.lessmuted, 
        },
        '::-webkit-scrollbar-thumb': {
          background: theme => theme.colors.highlight, 
          '&:hover': {
            background: theme => theme.colors.primary, 
          },
        },
      },
        
      h1: {
        variant: 'text.display',
        fontSize: 5,
        mt: 5,
        mb: 3,
      },
      h2: {
        variant: 'text.heading',
        fontSize: 5,
        mt: 5,
        mb: 3,
      },
      h3: {
        variant: 'text.heading',
        fontSize: 4,
        mt: 5,
        mb: 3,
      },
      h4: {
        variant: 'text.heading',
        fontSize: 3,
        mt: 5,
        mb: 3,
      },
      h5: {
        variant: 'text.heading',
        fontSize: 2,
        mt: 5,
        mb: 3,
      },
      h6: {
        variant: 'text.heading',
        fontSize: 1,
        mt: 5,
        mb: 3,
      },
      a: {
        color: 'primary',
        transition: '0.2s',
        '&:hover': {
          color: 'background',
          backgroundColor: 'secondary',
        },
        overflowWrap: 'anywhere',
      },
      pre: {
        // scrollbar
        '::-webkit-scrollbar': {
          height: 6,
          width: 6,
        },
        '::-webkit-scrollbar-track': {
          background: theme => theme.colors.lessmuted, 
        },
        '::-webkit-scrollbar-thumb': {
          background: theme => theme.colors.highlight, 
          '&:hover': {
            background: theme => theme.colors.primary, 
          },
        },
        // pre 
        '.comment,.block-comment,.prolog,.doctype,.cdata': {
          'color': 'comment',
          'fontStyle': 'italic',
        },
        '.punctuation': {
          'color': 'punctuation'
        },
        '.tag,.attr-name,.namespace,.deleted': {
          'color': 'attr'
        },
        '.function-name': {
          'color': 'functionName'
        },
        '.boolean,.number,.function': {
          'color': 'function'
        },
        '.property,.class-name,.constant,.symbol': {
          'color': 'constant'
        },
        '.selector,.important,.atrule,.keyword,.builtin': {
          'color': 'keyword'
        },
        '.string,.char,.attr-value,.regex,.variable': {
          'color': 'string'
        },
        '.operator,.entity,.url,.inserted': {
          'color': '#67cdcc'
        },
        '.function-variable': {
          'color': '#6f42c1'
        },
        '.important,.bold': {
          'fontWeight': 'bold'
        },
        '.entity': {
          'cursor': 'help'
        },

        fontFamily: 'monospace',
        fontSize: 1,
        p: 3,
        color: 'text',
        bg: 'muted',
        overflow: 'auto',
        code: {
          color: 'inherit',
        },
      },
      code: {
        fontFamily: 'monospace',
        fontSize: 15,
      },
      inlineCode: {
        fontFamily: 'monospace',
        fontSize: 15,
        color: 'secondary',
        bg: 'muted',
        overflowWrap: 'anywhere',
      },
      blockquote:{
        m: 0,
        my: 4,
        px: 4,
        py: 2,
        borderLeft: theme=> `4px solid ${theme.colors.primary}`,
        bg: 'muted',
      },
      table: {
        width: '100%',
        my: 4,
        borderCollapse: 'separate',
        borderSpacing: 0,
        'th,td': {
          textAlign: 'left',
          py: '4px',
          pr: '4px',
          pl: 0,
          borderColor: 'muted',
          borderBottomStyle: 'solid',
        },
      },
      th: {
        verticalAlign: 'bottom',
        borderBottomWidth: '2px',
      },
      td: {
        verticalAlign: 'top',
        borderBottomWidth: '1px',
      },
      hr: {
        border: 0,
        borderBottom: '1px solid',
        borderColor: 'muted',
      },
    },
}