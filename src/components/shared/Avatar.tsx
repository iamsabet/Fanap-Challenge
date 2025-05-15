
import Image from 'next/image'

const Avatar = ({ src = "/fanap.logo", alt = "Logo", width = 100, height = 100 }: { src?: string, alt?: string, width?: number, height?: number }) => {
    return (
        <div className='pr-1 shadow-md card'>
            <Image src={src} alt={alt} width={width} height={height} loading='lazy' />
        </div>
    )
}

export default Avatar