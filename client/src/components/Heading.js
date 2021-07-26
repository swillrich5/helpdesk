import React from 'react';
import thumbsUp from '../images/scott-thumbs-up.png';

const Heading = () => {
    return (
        <div className="text-center">
                <h3 className="text-primary d-inline">Scott's</h3>
                <img id="app-logo" className="" src={thumbsUp} alt="thumbs up pic" />
                <h3 className="text-primary d-inline">Helpdesk</h3>
        </div>
    )


}

export default Heading
