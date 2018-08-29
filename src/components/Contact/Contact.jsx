import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="Contact">
            <h1>Contact</h1>
            <div className="form-group">
                <div className="col-sm-12">
                    <input type="text" className="form-control contact" placeholder="Name" />&nbsp;&nbsp;
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12">
                    <input type="email" className="form-control contact" placeholder="Email" />&nbsp;&nbsp;
                    </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12">
                    <textarea class="form-control" rows="5" id="comment" placeholder="Comment"></textarea>&nbsp;&nbsp;
                    </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12 text-center">
                    <button className="btn-default btn">Submit</button>&nbsp;&nbsp;
                        </div>
            </div>
        </div>
    )
}

export default Contact;