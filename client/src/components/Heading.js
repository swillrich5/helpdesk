import React from 'react';
import thumbsUp from '../images/scott-thumbs-up.png';

const Heading = () => {
    return (
        <div className="text-center">
                <h1 className="text-primary d-inline acme">Scott's</h1>
                <img id="app-logo" className="" src={thumbsUp} alt="thumbs up pic" />
                <h1 className="text-primary d-inline acme">Helpdesk</h1>
        </div>
    )


}

export default Heading
