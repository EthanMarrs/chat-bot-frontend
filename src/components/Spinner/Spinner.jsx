import styles from './styles'

const Spinner = () => (
  <div css={styles.wrapper}>
    <span css={[styles.circle, styles.first]} />
    <span css={[styles.circle, styles.second]} />
    <span css={[styles.circle, styles.third]} />
  </div>
)

export default Spinner
