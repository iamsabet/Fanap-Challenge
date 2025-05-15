import { FaStar } from 'react-icons/fa';

const RatingStars = ({ rating }: { rating: number }) => {

    const fullStars = Math.floor(rating);
    const partialStarPercentage = rating % 1;

    return (
        <div className="flex flex-1">
            <span className='text-sm font-semibold pb-1 mr-1'>{rating}</span>
            {[...Array(fullStars)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400" />
            ))}
            {partialStarPercentage > 0 && (
                <div
                    className="relative"
                    style={{ display: "inline-block" }}
                >
                    <FaStar className="text-transparent absolute z-2" />
                    <div className='relative' style={{ width: "1em", height: "1em" }}>
                        <FaStar className="text-muted w-full h-full" />
                        <div
                            style={{ width: `${(partialStarPercentage) * 100}%` }}
                            className="bg-transparent top-0 left-0 absolute overflow-hidden h-full w-full z-3">
                            <FaStar className="text-yellow-400 w-[1em] h-[1em]" />
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}
export default RatingStars