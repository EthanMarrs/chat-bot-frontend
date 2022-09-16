import { css } from '@emotion/react'
import {
  spacing, colors, borderRadius, breakpoints,
} from '../../../styles'

const styles = {
  wrapper: css({
    display: 'flex',
    maxWidth: '80%',
    borderRadius: borderRadius.small,
    padding: spacing.medium,
    margin: `${spacing.large}px 0`,
    border: `2px solid ${colors.black}`,

    [`@media (min-width: ${breakpoints.tablet}px)`]: {
      maxWidth: '60%',
    },

    [`@media (min-width: ${breakpoints.desktop}px)`]: {
      maxWidth: '40%',
    },
  }),
}

const messageTheme = from => {
  if (from === 'BOT') {
    return css({
      backgroundColor: colors.yellow,
      alignSelf: 'flex-end',
    })
  }

  if (from === 'ERROR') {
    return css({
      backgroundColor: colors.red,
      alignSelf: 'flex-end',
    })
  }

  return css({
    backgroundColor: colors.white,
    alignSelf: 'flex-start',
  })
}

export default styles

export { messageTheme }
