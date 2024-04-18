/** @jsx jsx */
import { jsx } from '@emotion/react'
import { type ReactElement } from 'react'
import { createRoot } from 'react-dom/client'
import { FrameSVGOctagon } from '@arwes/react-frames'

const Sandbox = (): ReactElement => {
  return (
    <div
      style={{
        position: 'relative',
        width: 150,
        height: 300
      }}
    >
      <FrameSVGOctagon
        css={{
          '[data-name=bg]': {
            color: 'hsl(120, 75%, 10%)'
          },
          '[data-name=line]': {
            color: 'hsl(120, 75%, 50%)'
          }
        }}
        leftTop={false}
        rightTop={true}
        rightBottom={true}
        leftBottom={false}
      />
    </div>
  )
}

createRoot(document.querySelector('#root')!).render(<Sandbox />)
