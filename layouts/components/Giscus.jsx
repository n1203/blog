import 'giscus'
import { useDarkMode } from 'lib/use-dark-mode'

const GiscusComponent = ({ className = undefined }) => {
  const { isDarkMode } = useDarkMode()

  return (
    <section className={className ?? ''}>
      <giscus-widget
        repo='n1203/blog'
        repoid='R_kgDOJYNtFg'
        category='Show and tell'
        categoryid='DIC_kwDOJYNtFs4CV3C2'
        mapping='pathname'
        strict='0'
        reactionsenabled='1'
        emitmetadata='0'
        inputposition='bottom'
        theme={isDarkMode ? 'transparent_dark' : 'light'}
        crossorigin='anonymous'
      ></giscus-widget>
    </section>
  )
}

export default GiscusComponent
