"use client"

import { PiRocketLaunchFill, PiSmileyFill, PiSmileySadFill } from 'react-icons/pi';

const RatingStars = ({ rating }: { rating: number }) => {

    const icon = rating >= 4.0 ? <PiRocketLaunchFill /> : (rating >= 3.0 ? <PiSmileyFill /> : <PiSmileySadFill />)

    return (
        <span className="absolute right-1.5 top-1.5 z-2
    text-base font-semibold rounded-md bg-transparent
border border-foreground text-foreground px-2 py-0.5">
            {icon}
        </span>
    )
}
export default RatingStars