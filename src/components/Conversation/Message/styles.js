import { css } from '@emotion/react'
import {
  spacing, colors, borderRadius,
} from '../../../styles'

const styles = {
  wrapper: css({
    display: 'flex',
    maxWidth: '40%',
    borderRadius: borderRadius.small,
    padding: spacing.medium,
    margin: `${spacing.large}px 0`,
    border: `2px solid ${colors.black}`,
  }),
}

const messageTheme = from => {
  if (from === 'BOT') {
    return css({
      backgroundColor: colors.grey,
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
