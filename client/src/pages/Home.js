import React, { useState, useEffect } from 'react';
import Heading from '../components/Heading';
import API from '../utils/API';

const Home = () => {

    const [requestTitle, setRequestTitle] = useState("");
    const [username, setUsername] = useState("");
    const [priority, setPriority] = useState("");
    const [description, setDescription] = useState("");
    const [messageOne, setMessageOne] = useState("");

    useEffect(() => {
        if (!username) {
            setUsername("Cheryl");
        }
        if (!priority) {
            setPriority("High");
        }
    }, [username, priority]);

    const handleSubmit = (e) => {
        e.preventDefault();

        API.saveRequest({
            requestTitle: requestTitle,
            requestDescription: description,
            requestUsername: username,
            requestPriority: priority,
            requestDate: new Date(),
            assignedTo: "Unassigned",
            resolved: false
        })
        .then(res => {
            console.log("Request Created");
        })
        .catch(err => {
            console.log(err);
        });

        setMessageOne("Your request has been logged");
        const timer = setTimeout(() => {
            setMessageOne("");
            setRequestTitle("");
            setDescription("");
            setPriority("");
            setUsername("");
        }, 3000 );
        return () => clearTimeout(timer);
    }

    function requestTitleChange (e) {
        setRequestTitle(e.target.value);
    }

    function usernameChange (e) {
        setUsername(e.target.value);
    }

    function priorityChange (e) {
        setPriority(e.target.value);
    }

    function descriptionChange (e) {
        setDescription(e.target.value);
    }


    return (
        <div>
            <Heading />
            <div className="container px-5">
                <form className="text-primary col-8 mx-auto mt-5" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="lead font-weight-bold" htmlFor="exampleFormControlInput1">Title</label>
                        <input type="text" name="requestTitle" value={ requestTitle } onChange={(e) => requestTitleChange(e)} className="form-control" id="request-title" placeholder="I need help..." />
                    </div>
                    <div className="row ml-1">
                        <div className="form-group col-xs-5 mr-5">
                            <label className="lead font-weight-bold" htmlFor="username">Name</label>
                            <select className="form-control" id="username" name="username" onChange={(e) => usernameChange(e)} value={ username } >
                                <option value="Cheryl">Cheryl</option>
                                <option  value="Truman">Truman</option>
                                <option value="Scott">Scott</option>
                                <option value="Charlie">Charlie</option>
                                <option value="Guest">Guest</option>
                            </select>
                        </div>
                        <div className="form-group col-xs-5">
                            <label className="lead font-weight-bold" htmlFor="priority" >Priority</label>
                            <select className="form-control" id="priority" name="priority" onChange={(e) => priorityChange(e)} >
                                <option value="1">High</option>
                                <option value="2">Medium</option>
                                <option value="3">Low </option>
                                <option value="4">When you can get to it</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="lead font-weight-bold" htmlFor="Description">Description</label>
                        <textarea className="form-control" id="request-description" rows="5" name="description" value={ description } onChange={(e) => descriptionChange(e)}></textarea>
                    </div>
                    <div className="row ml-1">
                        <button type="submit" className="btn btn-primary btn-lg px-5 font-weight-bold">Submit</button>
                        { (messageOne.length > 0) && <p className="lead ml-5">{messageOne}</p> }
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Home
