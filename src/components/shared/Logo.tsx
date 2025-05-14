"use client"

import Image from 'next/image'

const Logo = ({ width = 45, height = 45 }: { width?: number, height?: number }) => {
    return (
        <div className='pr-1 shadow-md card'>
            <Image src="/fanap.png" alt="Logo" width={width} height={height} loading='lazy' onLoad={(_) => { console.log(_) }} />
        </div>
    )
}

export default Logo