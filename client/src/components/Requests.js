import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Requests = (props) => {
    console.log("Hello from Requests.js");
    console.log(props.requests);

    const[requests, setRequests] = useState(props.requests);

    return (
        <div className="row">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Requestor</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                    { props.requests.map(request =>
                        <Link>
                            <tr>
                                <td>{ request.title }</td>
                                <td>{ request.username }</td>
                                <td>{ request.priority }</td>
                                <td>Open</td>
                            </tr>
                        </Link>    
                    )}

            </table>

        </div>
    )
}

export default Requests

