import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import API from '../utils/API';
import Spinner from '../components/Spinner';
import moment from 'moment';

const RequestList = () => {

    const [loading, setLoading] = useState(false);
    const [requests, setRequests] = useState([]);
    const [showOpen, setShowOpen] = useState(false);
    const [titleSortedAscending, setTitleSortedAscending] = useState();
    const [usernameSortedAscending, setUsernameSortedAscending] = useState();
    const [prioritySortedAscending, setPrioritySortedAscending] = useState();
    const [requestDateSortedAscending, setRequestDateSortedAscending] = useState();
    const [assignedToSortedAscending, setAssignedToSortedAscending] = useState();
    const [statusSortedAscending, setStatusSortedAscending] = useState();


    useEffect(() => {
        setLoading(true);
        API.getRequests() 
            .then(res => {
                setRequests(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
}, []);

    const onlyOpenRequestsChange = (e) => {
        setShowOpen(e.target.checked);
    }

    const sortByTitle = () => {
        if (!titleSortedAscending) {
            const sortedArray = [].concat(requests)
            .sort((a,b) => a.requestTitle > b.requestTitle ? 1 : -1);
            // reset sort variables
            setUsernameSortedAscending(false);
            setPrioritySortedAscending(false);
            setRequestDateSortedAscending(false);
            setAssignedToSortedAscending(false);
            setStatusSortedAscending(false);

            setTitleSortedAscending(true);
            setRequests(sortedArray);
        } else {
            const sortedArray = [].concat(requests)
            .sort((a,b) => a.requestTitle < b.requestTitle ? 1 : -1);
            // reset sort variables
            setUsernameSortedAscending(false);
            setPrioritySortedAscending(false);
            setRequestDateSortedAscending(false);
            setAssignedToSortedAscending(false);
            setStatusSortedAscending(false);

            setTitleSortedAscending(false);
            setRequests(sortedArray);
        }
    }


    const sortByRequestor = () => {
        if (!usernameSortedAscending) {
            const sortedArray = [].concat(requests)
            .sort((a,b) => a.requestUsername > b.requestUsername ? 1 : -1);
            // reset sort variables
            setTitleSortedAscending(false);
            setPrioritySortedAscending(false);
            setRequestDateSortedAscending(false);
            setAssignedToSortedAscending(false);
            setStatusSortedAscending(false);

            setUsernameSortedAscending(true);
            setRequests(sortedArray);
        } else {
            const sortedArray = [].concat(requests)
            .sort((a,b) => a.requestUsername < b.requestUsername ? 1 : -1);
            // reset sort variables
            setTitleSortedAscending(false);
            setPrioritySortedAscending(false);
            setRequestDateSortedAscending(false);
            setAssignedToSortedAscending(false);
            setStatusSortedAscending(false);

            setUsernameSortedAscending(false);
            setRequests(sortedArray);
        }
    }

    const sortByPriority = () => {
        if (!prioritySortedAscending) {
            const sortedArray = [].concat(requests)
            .sort((a,b) => a.requestPriority > b.requestPriority ? 1 : -1);
            // reset sort variables
            setTitleSortedAscending(false);
            setUsernameSortedAscending(false);
            setRequestDateSortedAscending(false);
            setAssignedToSortedAscending(false);
            setStatusSortedAscending(false);

            setPrioritySortedAscending(true);
            setRequests(sortedArray);
        } else {
            const sortedArray = [].concat(requests)
            .sort((a,b) => a.requestPriority < b.requestPriority ? 1 : -1);
            // reset sort variables
            setTitleSortedAscending(false);
            setUsernameSortedAscending(false);
            setRequestDateSortedAscending(false);
            setAssignedToSortedAscending(false);
            setStatusSortedAscending(false);

            setPrioritySortedAscending(false);
            setRequests(sortedArray);
        }
    }

    const sortByRequestDate = () => {
        if (!requestDateSortedAscending) {
            const sortedArray = [].concat(requests)
            .sort((a,b) => a.requestDate > b.requestDate ? 1 : -1);
            // reset sort variables
            setTitleSortedAscending(false);
            setUsernameSortedAscending(false);
            setPrioritySortedAscending(true);
            setAssignedToSortedAscending(false);
            setStatusSortedAscending(false);

            setRequestDateSortedAscending(true);
            setRequests(sortedArray);
        } else {
            const sortedArray = [].concat(requests)
            .sort((a,b) => a.requestDate < b.requestDate ? 1 : -1);
            // reset sort variables
            setTitleSortedAscending(false);
            setUsernameSortedAscending(false);
            setPrioritySortedAscending(true);
            setAssignedToSortedAscending(false);
            setStatusSortedAscending(false);

            setRequestDateSortedAscending(false);
            setRequests(sortedArray);
        }
    }


    const sortByAssignedTo = () => {
        if (!assignedToSortedAscending) {
            const sortedArray = [].concat(requests)
            .sort((a,b) => a.assignedTo > b.assignedTo ? 1 : -1);
            // reset sort variables
            setTitleSortedAscending(false);
            setUsernameSortedAscending(false);
            setPrioritySortedAscending(false);
            setRequestDateSortedAscending(false);
            setStatusSortedAscending(false);

            setAssignedToSortedAscending(true);
            setRequests(sortedArray);
        } else {
            const sortedArray = [].concat(requests)
            .sort((a,b) => a.assignedTo < b.assignedTo ? 1 : -1);
            // reset sort variables
            setTitleSortedAscending(false);
            setUsernameSortedAscending(false);
            setPrioritySortedAscending(false);
            setRequestDateSortedAscending(false);
            setStatusSortedAscending(false);

            setAssignedToSortedAscending(true);
            setRequests(sortedArray);
        }
    }


    const sortByStatus = () => {
        if (!statusSortedAscending) {
            const sortedArray = [].concat(requests)
            .sort((a,b) => a.resolved > b.resolved ? 1 : -1);
            // reset sort variables
            setTitleSortedAscending(false);
            setUsernameSortedAscending(false);
            setPrioritySortedAscending(false);
            setRequestDateSortedAscending(false);
            setAssignedToSortedAscending(false);

            setStatusSortedAscending(true);
            setRequests(sortedArray);
        } else {
            const sortedArray = [].concat(requests)
            .sort((a,b) => a.assignedTo < b.assignedTo ? 1 : -1);
            // reset sort variables
            setTitleSortedAscending(false);
            setUsernameSortedAscending(false);
            setPrioritySortedAscending(false);
            setRequestDateSortedAscending(false);
            setAssignedToSortedAscending(false);

            setStatusSortedAscending(false);
            setRequests(sortedArray);
        }
    }



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
                            <th scope="col-4" className="font-weight-bold lead"><a href="#0" className="request-list-title" onClick={sortByTitle}>Title</a></th>
                            <th scope="col-2" className="font-weight-bold lead"><a href="#0" className="request-list-title" onClick={sortByRequestor}>Requestor</a></th>
                            <th scope="col-2" className="font-weight-bold lead"><a href="#0" className="request-list-title" onClick={sortByPriority}>Priority</a></th>
                            <th scope="col-2" className="font-weight-bold lead" ><a href="#0" className="request-list-title" onClick={sortByRequestDate}>Request Date</a></th>
                            <th scope="col-2" className="font-weight-bold lead" ><a href="#0" className="request-list-title" onClick={sortByAssignedTo}>Assigned To</a></th>
                            <th scope="col-2" className="font-weight-bold lead" ><a href="#0" className="request-list-title" onClick={sortByStatus}>Status</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        {(!loading) && requests.map(request => {
                            return (
                                 ((showOpen === true && request.resolved === false) || (showOpen === false)) && (
                                    <tr key={ request._id }>
                                            <td><Link to={`/editRequest/${request._id}`} className="requestTitle">{ request.requestTitle }</Link></td>
                                            <td>{ request.requestUsername }</td>
                                            {(request.requestPriority === "1") && <td>High</td>}
                                            {(request.requestPriority === "2") && <td>Medium</td>}
                                            {(request.requestPriority === "3") && <td>Low</td>}
                                            {(request.requestPriority === "4") && <td>When you can get to it</td>}
                                            <td>{moment(request.requestDate).format('MM-DD-YYYY h:mma')}</td>
                                            <td>{request.assignedTo}</td>
                                            <td>{(request.resolved === true) ? <span>Closed</span> : <span>Open</span>}</td>
                                    </tr> )
                                
                                )
                        })}
                    </tbody>
                </table>
                <div className="form-group text-primary container">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="onlyOpenRequests" name="statusCheckbox" checked={showOpen} onChange={(e) => onlyOpenRequestsChange(e)} />
                        <label className="form-check-label" htmlFor="onlyOpenRequests">
                            Display only Open Requests
                        </label>
                    </div>
                </div>

            </div>
        )
    }
}

export default RequestList
