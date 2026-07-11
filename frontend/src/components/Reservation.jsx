import React, { useState } from 'react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: 'Select time',
    guests: '1-4',
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
    if (!formData.name || !formData.email || !formData.phone || formData.time === 'Select time' || !formData.date) {
      setStatus('error');
      return;
    }
    
    setStatus('loading');
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const res = await fetch(`${apiUrl}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          type: 'reservation'
        })
      });
      
      const json = await res.json();
      
      if (res.ok && json.success) {
        setStatus('success');
        setFormData({
          date: '',
          time: 'Select time',
          guests: '1-4',
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error(json.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Reservation submission error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>
      
      {/* subheader */}
      <section id="subheader" className="jarallax text-light">
        <img className="jarallax-img" src="images/background/5.jpg" alt="Reservation Header" />
        <div className="center-y relative text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Reservation</h1>
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
                <form name="contactForm" id="contact_form" onSubmit={handleSubmit}>
                  <div id="step-1" className="row">
                    <div className="col-md-4 mb10">
                      <h4>Select Date</h4>
                      <input 
                        type="date" 
                        name="date" 
                        id="date" 
                        className="form-control" 
                        value={formData.date}
                        onChange={handleChange}
                        required 
                        disabled={status === 'loading'}
                      />
                    </div>

                    <div className="col-md-4 mb10">
                      <h4>Select Time</h4>
                      <select 
                        name="time" 
                        id="time" 
                        className="form-control"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        disabled={status === 'loading'}
                      >
                        <option disabled>Select time</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                        <option value="22:00">22:00</option>
                      </select>
                    </div>

                    <div className="col-md-4 mb10">
                      <h4>How Many Guests?</h4>
                      <select 
                        name="guests" 
                        id="guests" 
                        className="form-control"
                        value={formData.guests}
                        onChange={handleChange}
                        disabled={status === 'loading'}
                      >
                        <option value="1-4">1 - 4</option>
                        <option value="5-8">5 - 10</option>
                        <option value="11-20">11 - 20</option>
                        <option value="20+">More than 20</option>
                      </select>
                    </div>
                  </div>

                  <div id="step-2" className="row">
                    <h4 className="mt20">Enter your details</h4>

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
                          rows="4"
                          disabled={status === 'loading'}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-12 text-center">
                      <p id="submit" className="mt20">
                        <input 
                          type="submit" 
                          id="send_message" 
                          value={status === 'loading' ? 'Submitting Request...' : 'Submit Form'} 
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
                  Your reservation request has been sent successfully. We look forward to serving you!
                  <div className="text-center mt20">
                    <button className="btn btn-main" onClick={() => setStatus('idle')}>Book Another Table</button>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div id="error_message" className="error" style={{ display: 'block' }}>
                  Sorry, there was an error sending your form. Please check your inputs.
                  <div className="text-center mt20">
                    <button className="btn btn-main" onClick={() => setStatus('idle')}>Try Again</button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
