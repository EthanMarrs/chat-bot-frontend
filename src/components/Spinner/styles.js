import { css, keyframes } from '@emotion/react'
import { spacing, colors, borderRadius } from '../../styles'

// Inspired by: https://codepen.io/rprom/pen/OPdpQR

const bounce = keyframes`
  0% {
    transform: translateY(0)
  }

  40% {
    transform: translateY(5px)
  }

  60% {
    transform: translateY(-10px)
  }

  80% {
    transform: translateY(0)
  }
`

const styles = {
  wrapper: css({
    margin: `${spacing.medium}px 0 ${spacing.large}px`,
    alignSelf: 'flex-end',
  }),

  circle: css({
    display: 'inline-block',
    backgroundColor: colors.black,
    height: 10,
    width: 10,
    borderRadius: borderRadius.large,
    marginLeft: spacing.extraSmall,
  }),

  first: css({
    animation: `1.2s 0s infinite ${bounce}`,

  }),

  second: css({
    animation: `1.2s 0.1s infinite ${bounce}`,
  }),

  third: css({
    animation: `1.2s 0.2s infinite ${bounce}`,
  }),
}

export default styles
