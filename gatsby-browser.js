const React = require('react')
const {Breakpoints} = require('react-device-breakpoints')

const breakpoints = {
    isDesktop: '(min-width: 1024px)',
    isTablet: '(max-width: 1023px) and (min-width: 768px)',
    isMobile: '(max-width: 767px)'
}

exports.wrapPageElement = ({ element, props }) => {
    return <Breakpoints {...breakpoints}>{element}</Breakpoints>
}