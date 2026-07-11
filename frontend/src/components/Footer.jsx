import React from 'react';

const Footer = ({ setPage }) => {
  return (
    <footer>
      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex">
                <div className="de-flex-col">
                  <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }}>
                    <img alt="Stradale Logo" className="f-logo" src="images/logo.png" />
                    <span className="copy">&copy; Copyright 2025 - Stradale by Designesia</span>
                  </a>
                </div>
                <div className="de-flex-col">
                  <div className="social-icons">
                    <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                    <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                    <a href="#"><i className="fa fa-linkedin fa-lg"></i></a>
                    <a href="#"><i className="fa fa-pinterest fa-lg"></i></a>
                    <a href="#"><i className="fa fa-rss fa-lg"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
