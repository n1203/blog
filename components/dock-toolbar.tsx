/* eslint-disable react/display-name */
// @ts-nocheck
import React, { useEffect, useState } from 'react'
import Button from './Button'
import ToggleThemeButton from './ToggleThemeButton'
import {
  RiArrowUpLine,
  RiChat2Line,
  RiCloseFill,
  RiListCheck,
} from 'react-icons/ri'
import Rotate from './Rotate'
import useGlobal from '@/utils/useGlobal'
import { navigationLinks } from '@/lib/config'

const ToggleToc = ({ show, setShow }) => {
  const buttonRef = useRef(null)

  const handler = useCallback(
    (event) => {
      const mobileToc = document.getElementById('tableOfContent') as HTMLElement
      if (!mobileToc) return
      if (
        !document.activeElement ||
        (!mobileToc.contains(event.target) &&
          !buttonRef.current.contains(event.target))
      )
        setShow(false)
    },
    [setShow]
  )

  useClickOutside(buttonRef, handler, true)

  return (
    <Button
      className='lg:hidden rounded-full'
      onClick={() => setShow((show) => !show)}
      ref={buttonRef}
      title={show ? 'Hide table of content' : 'Show table of content'}
      icon={
        <Rotate show={show}>
          <RiCloseFill />
          <RiListCheck />
        </Rotate>
      }
    ></Button>
  )
}

export default ({ hasToc = false, hasComment = false }) => {
  const [hasMounted, setHasMounted] = useState(false)
  const { isMobileTocVisible, setIsMobileTocVisible } = useGlobal()

  const links = React.useMemo(
    () =>
      navigationLinks
        ?.map(({ icon, url, title }, index) => (
          <dock-item key={index}>
            <div className='item'>
              <Button
                href={url}
                className='rounded-full'
                icon={icon}
                title={title}
              />
            </div>
          </dock-item>
        ))
        .filter(Boolean),
    []
  )

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null

  // @ts-ignore
  return (
    <div className='z-50'>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <dock-wrapper
        id='dock'
        size={40}
        padding={8}
        gap={8}
        class="bg-neutral-50 dark:bg-neutral-900"
        max-scale={2}
        max-range={200}
        direction='horizontal'
        position='bottom'
      >
        {links}
        <dock-item>
          <div className='item'>
            <ToggleThemeButton className="rounded-full" />
          </div>
        </dock-item>
        {hasToc && isMobileTocVisible && (
          <dock-item>
            <div className='item'>
              <ToggleToc
                show={isMobileTocVisible}
                setShow={setIsMobileTocVisible}
              />
            </div>
          </dock-item>
        )}
        {hasComment && (
          <dock-item>
            <div className='item'>
              <Button
                onClick={() =>
                  document
                    .getElementsByTagName('giscus-widget')[0]
                    .scrollIntoView()
                }
                icon={<RiChat2Line />}
                title='Go to comments'
                className='rounded-full'
              />
            </div>
          </dock-item>
        )}
        <dock-item>
          <div className='item'>
            <Button
              className='rounded-full'
              title='Go to top'
              onClick={() => window.scrollTo({ top: 0 })}
              icon={<RiArrowUpLine />}
            ></Button>
          </div>
        </dock-item>
      </dock-wrapper>
      <style>
        {`#dock {
          position: fixed;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 999px;
        }
        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
        }
        #dock {
          visibility: hidden;
        }
        #dock:defined {
          visibility: visible;
        }`}
      </style>
    </div>
  )
}
