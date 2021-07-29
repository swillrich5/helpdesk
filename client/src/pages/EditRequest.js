import React, { useState, useEffect } from 'react'
import Heading from '../components/Heading';
import API from '../utils/API';

const EditRequest = ({ match }) => {

    console.log("Match = ");
    console.log(match.params.id);

    const [loading, setLoading] = useState(false);
    const [request, setRequest] = useState({});
    const [messageOne, setMessageOne] = useState("");

    useEffect(() => {
        console.log("Hello from RequestList.js useEffect");
        setLoading(true);
        API.getRequest(match.params.id) 
            .then(res => {
                console.log(res.data);
                setRequest(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
}, [match]);

const handleSubmit = (e) => {
    e.preventDefault();

    API.updateRequest(request._id, request)
    .then(res => {
        console.log("Request Updated");
        console.log("Request ====>");
        console.log(request);
    })
    .catch(err => {
        console.log(err);
    });

    setMessageOne("Your request has been updated");
    const timer = setTimeout(() => {
        setMessageOne("");
    }, 3000 );
    return () => clearTimeout(timer);

    }

    function requestTitleChange (e) {
        console.log(e.target.value);
        setRequest(prevState => ({
            ...prevState,
            requestTitle: e.target.value
        }))
    }

    function usernameChange (e) {
        console.log(e.target.value);
        setRequest(prevState => ({
            ...prevState,
            requestUsername: e.target.value
        }))
    }

    function priorityChange (e) {
        console.log(e.target);
        setRequest(prevState => ({
            ...prevState,
            requestPriority: e.target.value
        }))
    }

    function descriptionChange (e) {
        console.log(e.target.value);
        setRequest(prevState => ({
            ...prevState,
            requestDescription: e.target.value
        }))
    }

    function assignedToChange (e) {
        console.log(e.target.value);
        setRequest(prevState => ({
            ...prevState,
            assignedTo: e.target.value
        }))
    }
    function statusChange (e) {
        console.log(e.target.value);
        setRequest(prevState => ({
            ...prevState,
            resolved: e.target.value
        }))
    }

    return (
        <div>
            <Heading />
            {!loading && 
            <div className="container px-5">
                <form className="text-primary col-8 mx-auto mt-5" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="lead font-weight-bold" htmlFor="exampleFormControlInput1">Title</label>
                        <input type="text" name="requestTitle" value={ request.requestTitle } onChange={(e) => requestTitleChange(e)} className="form-control" id="request-title" placeholder="I need help..." />
                    </div>
                    <div className="row ml-1">
                        <div className="form-group col-xs-5 mr-3">
                            <label className="lead font-weight-bold" htmlFor="username">Name</label>
                            <select className="form-control" id="username" name="requestUsername" onChange={(e) => usernameChange(e)} value={ request.requestUsername } >
                                <option value="Cheryl">Cheryl</option>
                                <option  value="Truman">Truman</option>
                                <option value="Scott">Scott</option>
                                <option value="Charlie">Charlie</option>
                                <option value="Guest">Guest</option>
                            </select>
                        </div>
                        <div className="form-group col-xs-5">
                            <label className="lead font-weight-bold" htmlFor="priority" >Priority</label>
                            <select className="form-control" id="priority" name="requestPriority" value={request.requestPriority} onChange={(e) => priorityChange(e)} >
                                <option value="1">High</option>
                                <option value="2">Medium</option>
                                <option value="3">Low </option>
                                <option value="4">When you can get to it</option>
                            </select>
                        </div>
                        <div className="form-group col-xs-5 ml-3">
                            <label className="lead font-weight-bold" htmlFor="assignedTo" >Assigned To</label>
                            <select className="form-control" id="assignedTo" name="assignedTo" value={request.assignedTo} onChange={(e) => assignedToChange(e)} >
                                <option value="Unassigned">Unassigned</option>                                
                                <option value="Scott">Scott</option>
                                <option value="Chico">Chico</option>
                                <option value="Charlie">Charlie</option>
                            </select>
                        </div>
                        <div className="form-group col-xs-5 ml-3">
                            <label className="lead font-weight-bold" htmlFor="resolved" >Status</label>
                            <select className="form-control" id="resolved" name="resolved" value={request.resolved} onChange={(e) => statusChange(e)} >
                                <option value={false}>Open</option>
                                <option value={true}>Closed</option>
                            </select>
                        </div>                    
                    </div>
                    <div className="form-group">
                        <label className="lead font-weight-bold" htmlFor="Description">Description</label>
                        <textarea className="form-control" id="request-description" rows="5" name="requestDescription" value={ request.requestDescription } onChange={(e) => descriptionChange(e)}></textarea>
                    </div>
                    <div className="row ml-1">
                        <button type="submit" className="btn btn-primary btn-lg px-5 font-weight-bold">Update</button>
                        { (messageOne.length > 0) && <p className="lead ml-5">{messageOne}</p> }
                    </div>
                </form>
            </div> }
        </div>
    )
}

export default EditRequest
