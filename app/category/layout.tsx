"use client"
import React from 'react'

const CategoryLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="main-content">
            {children}
        </div>
    )
}

export default CategoryLayout 