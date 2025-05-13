"use client"

import Image from 'next/image'

const Logo = () => {
    return (
        <div className='pr-1 shadow-md card'>
            <Image src="/fanap.png" alt="Logo" width={45} height={57} loading='lazy' onLoad={(_) => { console.log(_) }} />
        </div>
    )
}

export default Logo