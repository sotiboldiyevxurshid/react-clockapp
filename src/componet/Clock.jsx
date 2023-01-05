import React, { useEffect, useState } from 'react'

export default function Clock() {
    const [first, setfirst] = useState()
    useEffect(() => {
      setInterval(() => {
        const date = new Date()
        setfirst(date.toLocaleTimeString())
        
      }, 1000);

    }, [])
    
    return (
        <>
            <p>{first} </p>
        </>
    )
}
