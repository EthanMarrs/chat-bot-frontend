const styles = {
  '@font-face': {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontDisplay: 'swap',
    fontStretch: '100%',
    src: 'url(https://fonts.gstatic.com/s/opensans/v34/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4taVIUwaEQbjB_mQ.woff2) format(\'woff2\')',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
  },

  html: {
    height: '100%',
    padding: 0,
    margin: 0,
    fontFamily: "'Open Sans', sans-serif",
  },

  body: {
    height: '100%',
    margin: 0,
  },

  '#root': {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
  },

  'button, input, textarea': {
    fontFamily: "'Open Sans', sans-serif",
  },

  '*': {
    boxSizing: 'border-box',
  },
}

export default styles
