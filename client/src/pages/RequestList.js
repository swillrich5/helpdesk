import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import API from '../utils/API';
import Spinner from '../components/Spinner';

const RequestList = () => {

    const [loading, setLoading] = useState(false);
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        console.log("Hello from RequestList.js useEffect");
        setLoading(true);
        API.getRequests() 
            .then(res => {
                console.log(res.data);
                setRequests(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
}, []);

    if (loading) {
        return (
            <Spinner />
        )
    } else {
        return (
            <div>
                <Heading />
                <div className="container px-5 py-3">
                    <h2 className="acme text-primary text-center">Helpdesk Requests</h2>
                </div>
                <table className="container table table-striped table-dark text-primary">
                    <thead>
                        <tr>
                            <th scope="col-4" className="font-weight-bold lead">Title</th>
                            <th scope="col-2" className="font-weight-bold lead">Requestor</th>
                            <th scope="col-2" className="font-weight-bold lead">Priority</th>
                            <th scope="col-2" className="font-weight-bold lead">Request Date</th>
                            <th scope="col-2" className="font-weight-bold lead">Assigned To</th>
                            <th scope="col-2" className="font-weight-bold lead">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(!loading) && requests.map(request =>
                                <tr key={ request._id }>
                                        <td><Link to={`/editRequest/${request._id}`} className="requestTitle">{ request.requestTitle }</Link></td>
                                        <td>{ request.requestUsername }</td>
                                        <td>{ request.requestPriority }</td>
                                        <td>{request.requestDate}</td>
                                        <td>{request.assignedTo}</td>
                                        <td>{(request.resolved === true) ? <span>Closed</span> : <span>Open</span>}</td>
                                </tr>
                        )}
                    </tbody>
                </table>


            </div>
        )
    }
}

export default RequestList
