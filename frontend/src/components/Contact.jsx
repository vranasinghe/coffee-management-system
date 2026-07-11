import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus('error');
      return;
    }
    
    setStatus('loading');
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const res = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const json = await res.json();
      
      if (res.ok && json.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error(json.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>
      
      {/* subheader */}
      <section id="subheader" className="jarallax text-light">
        <img className="jarallax-img" src="images/background/5.jpg" alt="Contact Header" />
        <div className="center-y relative text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Contact Us</h1>
                <p>Welcome to Stradale Cafe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* form section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {status !== 'success' && (
                <form name="contactForm" id="contact_form" className="form-border" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb10">
                        <input 
                          type="text" 
                          name="name" 
                          id="name" 
                          className="form-control" 
                          placeholder="Your Name" 
                          value={formData.name}
                          onChange={handleChange}
                          required 
                          disabled={status === 'loading'}
                        />
                      </div>

                      <div className="mb10">
                        <input 
                          type="email" 
                          name="email" 
                          id="email" 
                          className="form-control" 
                          placeholder="Your Email" 
                          value={formData.email}
                          onChange={handleChange}
                          required 
                          disabled={status === 'loading'}
                        />
                      </div>

                      <div className="mb-sm-10">
                        <input 
                          type="text" 
                          name="phone" 
                          id="phone" 
                          className="form-control" 
                          placeholder="Your Phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          required 
                          disabled={status === 'loading'}
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div>
                        <textarea 
                          name="message" 
                          id="message" 
                          className="form-control" 
                          placeholder="Your Message" 
                          value={formData.message}
                          onChange={handleChange}
                          rows="6"
                          required
                          disabled={status === 'loading'}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-12 text-center">
                      <p id="submit" className="mt20">
                        <input 
                          type="submit" 
                          id="send_message" 
                          value={status === 'loading' ? 'Sending...' : 'Submit Form'} 
                          className="btn btn-main" 
                          disabled={status === 'loading'}
                        />
                      </p>
                    </div>
                  </div>
                </form>
              )}

              {status === 'success' && (
                <div id="success_message" className="success" style={{ display: 'block' }}>
                  Your message has been sent successfully. We will get back to you shortly.
                  <div className="text-center mt20">
                    <button className="btn btn-main" onClick={() => setStatus('idle')}>Send Another Message</button>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div id="error_message" className="error" style={{ display: 'block' }}>
                  Sorry, there was an error sending your form. Please try again.
                  <div className="text-center mt20">
                    <button className="btn btn-main" onClick={() => setStatus('idle')}>Try Again</button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* location list */}
      <section id="section-location" className="jarallax" aria-label="section">
        <img className="jarallax-img" src="images/background/6.jpg" alt="Map Location Background" />
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center text-light">
              <i className="icon_pin_alt fontsize48 id-color mb30"></i>
              <h3>Location</h3>
              08 W 36th St, New York, NY 10001
            </div>

            <div className="col-md-4 text-center text-light">
              <i className="icon_mug fontsize48 id-color mb30"></i>
              <h3>We're Open</h3>
              Weekdays 08:00 - 22:00. Weekends 08:00 - 24:00.
            </div>

            <div className="col-md-4 text-center text-light">
              <i className="icon_mail_alt fontsize48 id-color mb30"></i>
              <h3>Contact Us</h3>
              P: +1 333 1000 2000. E: contact@example.com.
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
