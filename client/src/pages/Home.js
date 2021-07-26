import React from 'react';
import Heading from '../components/Heading';

const Home = () => {
    return (
        <div>
            <Heading />
            <div className="container px-5">
                <form className="text-primary col-8 mx-auto mt-5">
                    <div className="form-group">
                        <label className="lead" htmlFor="exampleFormControlInput1">Title</label>
                        <input type="text" className="form-control" id="request-title" placeholder="I need help..." />
                    </div>
                    <div className="row ml-1">
                        <div className="form-group col-xs-5 mr-5">
                            <label className="lead" htmlFor="username">Name</label>
                            <select className="form-control" id="username">
                                <option>Cheryl</option>
                                <option>Truman</option>
                                <option>Scott</option>
                                <option>Charlie</option>
                                <option>Guest</option>
                            </select>
                        </div>
                        <div className="form-group col-xs-5">
                            <label className="lead" htmlFor="priority">Priority</label>
                            <select className="form-control" id="priority">
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low </option>
                                <option>When you can get to it</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="lead" htmlFor="Description">Description</label>
                        <textarea className="form-control" id="request-description" rows="5"></textarea>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Home
