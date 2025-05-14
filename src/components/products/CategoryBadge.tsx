import React from 'react'

const CategoryBadge = ({ category, position = "absolute" }: { category: string, position?: "absolute" | "relative" }) => {
    return (
        <span className={`${position === "absolute" ? "absolute left-1.5 top-1.5 z-2 text-xs " : "relative text-sm"}
            font-semibold rounded-md bg-transparent
            border border-foreground text-foreground px-2 py-0.5`}>{category}</span>
    )
}

export default CategoryBadge