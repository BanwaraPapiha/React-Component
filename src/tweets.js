import React, { useState } from "react"

function Tweet({ name, role }) {
    const [count, setcount] = useState(0);
    const [isRed, setRed] = useState(false);
    const increment = () => {
        setcount(count + 1)
        setRed(true)
    }
    return (
        <div className="Tweet">
            <h1>{name}</h1>
            <p>{role}</p>
            <h3 className={isRed ? "red" : ""}> Likes
            <button onClick={increment}>Like    {count} </button>
            </h3>
        </div>
    );
}

export default Tweet;