import { css } from '@emotion/react'
import {
  spacing, colors, fontSize, borderRadius,
} from '../../styles'

const styles = {
  form: css({
    width: '100%',
    display: 'flex',
    alignItems: 'stretch',
  }),

  input: css({
    width: '100%',
    resize: 'none',
    fontSize: fontSize.small,
    padding: `${spacing.small}px ${spacing.medium}px`,
    borderRadius: borderRadius.small,
    border: `2px solid ${colors.black}`,
    outline: 'none',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  }),

  button: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `2px solid ${colors.black}`,
    borderLeft: 0,
    borderRadius: borderRadius.small,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    background: colors.blue,

    '&:hover': {
      cursor: 'pointer',
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },
  }),

  image: css({
    height: 35,
    width: 35,
  }),

  error: css({
    color: colors.red,
  }),
}

export default styles
