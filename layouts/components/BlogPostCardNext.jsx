import Icon from '@/components/Icon'
import Image from 'next/legacy/image'
import Link from 'next/link'
import React from 'react'
import TagItemMini from '../../components/TagItemMini'

const BlogPostCard = ({
  date,
  description,
  index,
  url,
  title,
  tags,
  coverImage,
  icon,
  isEnd = false,
}) => {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])
  return <Link className="relative border rounded-2xl translate-x-8 transform-gpu transition-transform hover:-translate-y-1" href={url} passHref style={{
    height: '288px',
    width: `calc(100% - 32px)`,
  }}>
    <time className="absolute z-10 transform-gpu rotate-90 origin-top-left -left-2 rounded border px-2 text-black text-opacity-60 text-sm p-1 bg-white font-bold" dateTime={date}>
      {mounted ? new Date(date).toLocaleDateString() : ''}
    </time>
    {!isEnd && <div className='w-0 h-full border-l transform-gpu -translate-x-6 translate-y-8 z-0' />}
    <div  className="absolute top-0 left-0 right-0 bottom-0 z-10">
      <div className="top-0 right-0 absolute p-4 flex gap-2">
        {tags.map((tag) => (
          <TagItemMini key={tag.name} tag={tag} />
        ))}
      </div>
      </div>
      <Image
        className="absolute top-0 left-0 right-0 bottom-20 z-0 rounded-2xl overflow-hidden"
        src={coverImage.src}
        alt={title}
        blurDataURL={coverImage.dataURIBase64}
        layout='fill'
        objectFit='cover'
        priority={index < 3 ? true : false}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 flex gap-2 items-center" style={{
        }}>
          {icon && (
            <Icon icon={icon} size={28} sizeCls='h-6 w-6 lg:h-7 lg:w-7 bg-white bg-opacity-60 backdrop-blur-sm rounded' />
          )}
          <p className="backdrop-blur-sm inline-block bg-white bg-opacity-60 py-0.5  px-2 text-black rounded whitespace-nowrap text-ellipsis overflow-hidden">
            {title}
          </p>
          
        </div>
    </Link>
}

export default BlogPostCard
