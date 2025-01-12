import { useInView } from 'react-intersection-observer'
import { useSpring } from '@react-spring/web'

export const useScrollAnimation = (threshold = 0.1) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true
  })

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)'
  })

  return { ref, animation }
}
