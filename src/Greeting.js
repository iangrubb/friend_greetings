import React from 'react'

const Greeting = ({name, color, background}) => {
    return (
        <h2 className="greeting" style={{color, background}}>Hello, {name}</h2>
    )
}

export default Greeting
