import React, { useState, useEffect } from 'react';

const fallbackImages = [
  { title: "Cozy Dining", url: "images/gallery/1.jpg" },
  { title: "Premium Espresso", url: "images/gallery/2.jpg" },
  { title: "Warm Brew", url: "images/gallery/3.jpg" },
  { title: "Pastry & Coffee", url: "images/gallery/4.jpg" },
  { title: "Rustic Interior", url: "images/gallery/5.jpg" },
  { title: "Barista Specials", url: "images/gallery/6.jpg" }
];

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingBackup, setUsingBackup] = useState(false);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
        const res = await fetch(`${apiUrl}/gallery`);
        if (!res.ok) throw new Error('API failed');
        const json = await res.json();
        if (json.data && json.data.length > 0) {
          setImages(json.data);
          setUsingBackup(false);
        } else {
          setImages(fallbackImages);
          setUsingBackup(true);
        }
      } catch (err) {
        console.warn('Backend gallery API not available. Using frontend fallback images.');
        setImages(fallbackImages);
        setUsingBackup(true);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>
      
      {/* subheader */}
      <section id="subheader" className="jarallax text-light">
        <img className="jarallax-img" src="images/background/10.jpg" alt="Gallery Header" />
        <div className="center-y relative text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Gallery</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* gallery list */}
      <section aria-label="section" className="no-top no-bottom">
        <div className="container-fluid">
          {loading ? (
            <div className="text-center py-5">
              <h3>Loading cafe gallery...</h3>
            </div>
          ) : (
            <div id="gallery" className="row g-0">
              {usingBackup && (
                <div className="col-md-12 text-center text-muted py-3">
                  <small>Offline Mode: Showing pre-cached local images</small>
                </div>
              )}
              
              {images.map((image, idx) => (
                <div key={image._id || idx} className="col-md-4 item">
                  <div className="de-image-hover rounded">
                    <a href={image.url} className="image-popup">                                
                      <span className="dih-title-wrap">
                        <span className="dih-title">{image.title}</span>
                      </span>
                      <span className="dih-overlay"></span>
                      <img src={image.url} className="lazy img-fluid" alt={image.title} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
