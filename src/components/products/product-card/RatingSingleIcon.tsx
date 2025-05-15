"use client"

import { PiRocketLaunchFill, PiSmileyFill, PiSmileySadFill } from 'react-icons/pi';

const RatingStars = ({ rating, position = "absolute" }: { rating: number, position?: "relative" | "absolute" }) => {

    const icon = rating >= 4.0 ? <PiRocketLaunchFill /> : (rating >= 3.0 ? <PiSmileyFill /> : <PiSmileySadFill />)

    return (
        <span className={`${position === "absolute" ? "absolute right-2 top-2 z-2" : position}
            text-base font-semibold rounded-md bg-transparent
            border border-foreground text-foreground px-2 py-0.5`}>
            {icon}
        </span>
    )
}
export default RatingStars