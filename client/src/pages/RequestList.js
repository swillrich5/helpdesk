import React, { useState, useEffect } from 'react'
import Heading from '../components/Heading';

const RequestList = () => {
    useEffect(() => {
        console.log("Hello from RequestList.js useEffect");
}, []);

    return (
        <div>
            <Heading />
        </div>
    )
}

export default RequestList
