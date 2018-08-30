import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <div className="Footer">
            <hr></hr>
            <footer className="page-footer font-small mdb-color lighten-3 pt-4">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
                            <h5 className="font-weight-bold text-uppercase mb-4">Marble</h5>
                            <p>Contact us! We're always here to help with any questions you may have.</p>
                        </div>
                        <hr className="clearfix w-100 d-md-none"></hr>
                        <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                            <h5 className="font-weight-bold text-uppercase mb-4">Navigation</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <p>
                                        <Link to="/products" className="nav-link">Products</Link>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <Link to="/contact" className="nav-link">Contact</Link>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        {props.user ? <Link to="/myaccount" className="nav-link">My Account</Link> : null}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        {props.user ? <Link to="/cart" className="nav-link"><img src="https://i.imgur.com/0jN4CC9.png" alt="cart" style={{ height: 20, width: 20 }}></img></Link> : null}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none"></hr>
                        <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
                            <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <p>
                                        <i className="fa fa-home mr-3"></i> Santa Moncia, CA 90405, US</p>
                                </li>
                                <li>
                                    <p>
                                        <a href="mailto:mikebkim@gmail.com" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-envelope mr-3"></i> mikebkim@gmail.com</a></p>
                                </li>
                                <li>
                                    <p>
                                        <i className="fa fa-phone mr-3"></i> +1 310-729-7796</p>
                                </li>
                                <li>
                                    <p>
                                        <i className="fa fa-phone mr-3"></i> +1 310-849-8448</p>
                                </li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none"></hr>
                        <div className="col-md-2 col-lg-2 text-center mx-auto my-4">
                            <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>
                            <a href="https://www.facebook.com/mike.kim.3766" target="_blank" rel="noopener noreferrer" className="btn-floating btn">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="https://twitter.com/mikebkim" target="_blank" rel="noopener noreferrer" className="btn-floating btn">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="https://plus.google.com/u/0/108229612972667118924" target="_blank" rel="noopener noreferrer" className="btn-floating btn">
                                <i className="fa fa-google-plus"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="https://https://marblejerky.herokuapp.com/"> Marble</a>
                </div>

            </footer>
        </div>
    )
}

export default Footer;