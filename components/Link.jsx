/* eslint-disable jsx-a11y/anchor-has-content */
import { Popover } from '@headlessui/react'
import Link from 'next/link'

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink || isAnchorLink) {
    return <Link href={href} {...rest} />
  }
  return <a target='_blank' rel='noopener noreferrer' href={href} {...rest} />

  // return <Popover className="inline-block" >
  //   <Popover.Button>
  //     <a target='_blank' rel='noopener noreferrer' href={href} {...rest} />
  //   </Popover.Button>
  //   <Popover.Panel className="absolute z-50">
  //     <div className="grid grid-cols-2 bg-black">
  //       111
  //     </div>
  //     {/* <img src="/solutions.jpg" alt="" /> */}
  //   </Popover.Panel>
  // </Popover>
}

export default CustomLink
