import { css } from '@emotion/react'
import { spacing, breakpoints } from '../../styles'

const styles = {
  wrapper: css({
    marginTop: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${spacing.large}px ${spacing.large}px`,

    [`@media (min-width: ${breakpoints.tablet}px)`]: {
      width: 728,
    },

    [`@media (min-width: ${breakpoints.desktop}px)`]: {
      width: 1200,
    },
  }),
}

export default styles
