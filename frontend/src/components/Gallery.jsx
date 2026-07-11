import React from 'react';

const Gallery = () => {
  const images = [
    { id: 1, title: "Cozy Dining", url: "images/gallery/1.jpg" },
    { id: 2, title: "Premium Espresso", url: "images/gallery/2.jpg" },
    { id: 3, title: "Warm Brew", url: "images/gallery/3.jpg" },
    { id: 4, title: "Pastry & Coffee", url: "images/gallery/4.jpg" },
    { id: 5, title: "Rustic Interior", url: "images/gallery/5.jpg" },
    { id: 6, title: "Barista Specials", url: "images/gallery/6.jpg" }
  ];

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
          <div id="gallery" className="row g-0">
            
            {images.map((image) => (
              <div key={image.id} className="col-md-4 item">
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
        </div>
      </section>
    </div>
  );
};

export default Gallery;
