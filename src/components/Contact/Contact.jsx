import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <div className="form-group">
                <div className="col-sm-12">
                    <input type="text" className="form-control" placeholder="Name" />&nbsp;&nbsp;
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12">
                    <input type="email" className="form-control" placeholder="Email" />&nbsp;&nbsp;
                    </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12">
                    <input type="text" className="form-control" placeholder="Comments" />&nbsp;&nbsp;
                    </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12 text-center">
                    <button className="btn btn-default">Submit</button>&nbsp;&nbsp;
                        </div>
            </div>
        </div>
    )
}

export default Contact;