/* eslint-disable jsx-a11y/anchor-has-content */
import { Popover } from '@headlessui/react'
import Link from 'next/link'
import { useState } from 'react'

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')
  const [open, setOpen] = useState(false)

  if (isInternalLink || isAnchorLink) {
    return <Link href={href} {...rest} />
  }

  return <a target='_blank' rel='noopener noreferrer' href={href} {...rest} />

  // return <Popover className="inline-block">
  //   {() => {
  //     return <>
  //       <Popover.Button onMouseOver={() => {
  //         setOpen(true)
  //       }} onMouseOut={() => {
  //         setOpen(false)
  //       }}>
  //         <a target='_blank' rel='noopener noreferrer' href={href} {...rest} />
  //       </Popover.Button>
  //       {open && <Popover.Panel show={true} className="absolute z-10">
  //         324234234
  //       </Popover.Panel>}
  //     </>
  //   }}
  // </Popover>
}

export default CustomLink
