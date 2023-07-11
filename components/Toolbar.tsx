import useGlobal from '@/utils/useGlobal'
import React, { useRef, useEffect, useState, useCallback } from 'react'
import {
  RiArrowUpLine,
  RiChat2Line,
  RiCloseFill,
  RiListCheck,
} from 'react-icons/ri'
import Button from './Button'
import Rotate from './Rotate'
import ToggleThemeButton from './ToggleThemeButton'
import useClickOutside from '@/utils/useClickOutside'
import cx from 'clsx'
import { navigationLinks } from '@/lib/config'

const AnimateButton = ({ children }) => {
  return (
    <div className={`
      rounded-full hover:scale-150 hover:mx-4 hover:-translate-y-4 dark:bg-black bg-white bg-opacity-100 transition-all duration-200 aspect-square overflow-hidden
      border border-gray-200 dark:border-gray-700
    `}>
      {children}
    </div>
  )
}

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

export default function Toolbar({
  hasToc = false,
  hasComment = false,
}) {
  const [hasMounted, setHasMounted] = useState(false)
  const { isMobileTocVisible, setIsMobileTocVisible } = useGlobal()

  const links = React.useMemo(
    () =>
      navigationLinks
        ?.map(({ icon, url, title }, index) => (
          <AnimateButton key={index}>
            <Button
              href={url}
              className='rounded-full'
              icon={icon}
              title={title}
            />
          </AnimateButton>
        ))
        .filter(Boolean),
    []
  )
  
  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null

  return (
    <div
      className={cx(
        'absolute-center-x flex text-inherit z-30 shadow-md transition-all duration-150',
        'fixed bottom-8 p-4 bg-white dark:bg-black dark:bg-opacity-60 bg-opacity-60 rounded-full backdrop-blur-sm gap-2 border dark:border-gray-700 border-gray-200'
      )}
    >
      {links}
      <AnimateButton>
        <ToggleThemeButton />
      </AnimateButton>

      {hasToc && isMobileTocVisible && (
        <AnimateButton>
          <ToggleToc
            show={isMobileTocVisible}
            setShow={setIsMobileTocVisible}
          />
        </AnimateButton>
      )}
      {hasComment && (
        <AnimateButton>
          <Button
            onClick={() =>
              document.getElementsByTagName('giscus-widget')[0].scrollIntoView()
            }
            icon={<RiChat2Line />}
            title='Go to comments'
            className='rounded-full'
          />
        </AnimateButton>
      )}
      <AnimateButton>
        <Button
          className='rounded-full'
          title='Go to top'
          onClick={() => window.scrollTo({ top: 0 })}
          icon={<RiArrowUpLine />}
        ></Button>
      </AnimateButton>
    </div>
  )
}
