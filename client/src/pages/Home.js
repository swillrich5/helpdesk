import React, { useState } from 'react';
import Heading from '../components/Heading';
import API from '../utils/API';

const Home = () => {

    const [requestTitle, setRequestTitle] = useState("");
    const [username, setUsername] = useState("");
    const [priority, setPriority] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        API.saveRequest({
            requestTitle: requestTitle,
            requestDescription: description,
            requestUsername: username,
            requestPriority: priority,
            // requestDate: new Date(),
            // resolved: false
        })
        .then(res => {
            console.log("it worked");
        })
        .catch(err => {
            console.log("What the fuck!")
            console.log(err);
            console.log("What the fuck!")
        });
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
                        <input type="text" name="requestTitle" onChange={requestTitleChange} className="form-control" id="request-title" placeholder="I need help..." />
                    </div>
                    <div className="row ml-1">
                        <div className="form-group col-xs-5 mr-5">
                            <label className="lead font-weight-bold" htmlFor="username">Name</label>
                            <select className="form-control" id="username" name="username" onChange={usernameChange} >
                                <option>Cheryl</option>
                                <option>Truman</option>
                                <option>Scott</option>
                                <option>Charlie</option>
                                <option>Guest</option>
                            </select>
                        </div>
                        <div className="form-group col-xs-5">
                            <label className="lead font-weight-bold" htmlFor="priority" >Priority</label>
                            <select className="form-control" id="priority" name="priority" onChange={priorityChange} >
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low </option>
                                <option>When you can get to it</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="lead font-weight-bold" htmlFor="Description">Description</label>
                        <textarea className="form-control" id="request-description" rows="5" name="description" onChange={descriptionChange}></textarea>
                    </div>
                    <div className="row ml-1">
                        <button type="submit" className="btn btn-primary btn-lg px-5 font-weight-bold">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Home
