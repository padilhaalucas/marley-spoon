import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  id?: string
}

const CoverImage = ({ title, src, id }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className='w-full shadow-md rounded-xl border-2 border-slate-300'
      width={1300}
      height={630}
    />
  )
  return (
    <div className="sm:mx-0">
      {id ? (
        <Link as={`/${id}`} href="/[id]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
