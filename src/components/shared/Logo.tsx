import Image from 'next/image'

const Logo = ({ width = 40, height = 40 }: { width?: number, height?: number }) => {
    return (
        <div className='pr-1 shadow-md card'>
            <Image src="/fanap.png" alt="Logo" width={width} height={height} loading='lazy' />
        </div>
    )
}

export default Logo