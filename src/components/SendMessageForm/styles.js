import { css } from '@emotion/react'
import {
  spacing, colors, fontSize, borderRadius,
} from '../../styles'

const styles = {
  form: css({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  }),

  textarea: css({
    width: '100%',
    resize: 'none',
    fontSize: fontSize.small,
    padding: `${spacing.small}px ${spacing.medium}px`,
    borderRadius: borderRadius.extraLarge,
    border: `2px solid ${colors.black}`,

    '&:focus': {
      outline: 'none',
      border: `2px solid ${colors.blue}`,
    },
  }),

  button: css({
    marginLeft: spacing.small,
    borderRadius: borderRadius.medium,
    border: 'none',
    background: 'none',

    '&:hover': {
      cursor: 'pointer',
    },
  }),

  image: css({
    height: 40,
    width: 40,
  }),
}

export default styles
