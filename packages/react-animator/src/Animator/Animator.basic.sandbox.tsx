import React, { type ReactElement, useState, useRef, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { animate } from 'motion'
import { type AnimatorNode } from '@arwes/animator'
import { Animator, useAnimator } from '@arwes/react-animator'

const AnimatorUIListener = (): ReactElement => {
  const elementRef = useRef<HTMLDivElement>(null)
  const animator = useAnimator()!

  useEffect(() => {
    // If the animator are disabled/dismissed, ignore animations.
    if (!animator) {
      return
    }

    let animation: { cancel: () => void } | undefined

    // A subscription function to be called every time the state changes.
    const unsubscribe = animator.node.subscribe((node: AnimatorNode) => {
      const element = elementRef.current as HTMLElement
      const { duration } = node // Getting the duration once is faster.

      switch (node.state) {
        case 'entering': {
          animation?.cancel() // Cancel current animation.
          animation = animate(
            element,
            { x: [0, 100], backgroundColor: ['#0ff', '#ff0'] },
            { duration: duration.enter }
          )
          break
        }
        case 'exiting': {
          animation?.cancel()
          animation = animate(
            element,
            { x: [100, 0], backgroundColor: ['#ff0', '#0ff'] },
            { duration: duration.exit }
          )
          break
        }
      }
    })

    return () => {
      animation?.cancel()
      unsubscribe()
    }
  }, [animator])

  return (
    <div ref={elementRef} style={{ margin: 10, width: 40, height: 40, backgroundColor: '#777' }} />
  )
}

const Sandbox = (): ReactElement => {
  const [active, setActive] = useState(true)

  useEffect(() => {
    const tid = setInterval(() => setActive((active) => !active), 2000)
    return () => clearInterval(tid)
  }, [])

  return (
    <Animator active={active}>
      <AnimatorUIListener />
    </Animator>
  )
}

createRoot(document.querySelector('#root')!).render(<Sandbox />)
