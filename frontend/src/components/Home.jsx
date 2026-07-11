import React from 'react';

const Home = ({ setPage }) => {
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>
      
      {/* section-hero */}
      <section 
        id="section-hero" 
        className="no-top no-bottom full-height text-light jarallax" 
        aria-label="section" 
        data-video-src="mp4:video/local-video.mp4,webm:video/local-video.webm,ogv:video/local-video.ogv"
      >
        <div className="container position-relative z1000">
          <div className="row align-items-center">
            <div className="col-lg-6 offset-lg-1 mb-sm-30">
              <div className="de-title-2">
                <h3 className="id-color wow fadeInUp" data-wow-delay=".3s">Specials</h3>
                <h1 className="s1 wow fadeInUp" data-wow-delay=".6s">Premium Authentic Coffee</h1>
                <a href="#" className="btn-border wow fadeInUp" data-wow-delay="1.1s" onClick={(e) => { e.preventDefault(); setPage('menu'); }}>
                  Explore Menu
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <p className="wow fadeInRight" data-wow-delay="1s">
                Stradale is an exclusive website template specially made for Cafe and Coffee Shops. Made using only the finest coding and design practices. Get Stradale now!
              </p>
            </div>
          </div>
        </div>
        <a href="#section-gallery" className="mouse-s1 mouse-icon-click scroll-to wow fadeInUp" data-wow-delay="2s">
          <span className="mouse fadeScroll relative" data-scroll-speed="2">
            <span className="scroll"></span>
          </span>
        </a>
        <div className="overlay-bg"></div>
      </section>

      {/* section-gallery */}
      <section id="section-gallery" className="no-top no-bottom" aria-label="section">
        <div className="container-fluid">
          <div className="row g-0">
            <div className="col-md-3">
              <div className="de-image-hover">
                <a href="images/gallery/1.jpg" className="image-popup">
                  <span className="dih-title-wrap">
                    <span className="dih-title">Fresh Ingredients</span>
                    <span className="dih-wm">01</span>
                  </span>
                  <span className="dih-overlay"></span>
                  <img src="images/gallery/1.jpg" className="lazy img-fluid" alt="Fresh Ingredients" />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="de-image-hover">
                <a href="images/gallery/2.jpg" className="image-popup">
                  <span className="dih-title-wrap">
                    <span className="dih-title">Authentic Taste</span>
                    <span className="dih-wm">02</span>
                  </span>
                  <span className="dih-overlay"></span>
                  <img src="images/gallery/2.jpg" className="lazy img-fluid" alt="Authentic Taste" />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="de-image-hover">
                <a href="images/gallery/3.jpg" className="image-popup">
                  <span className="dih-title-wrap">
                    <span className="dih-title">Cozy Atmosphere</span>
                    <span className="dih-wm">03</span>
                  </span>
                  <span className="dih-overlay"></span>
                  <img src="images/gallery/3.jpg" className="lazy img-fluid" alt="Cozy Atmosphere" />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="de-image-hover">
                <a href="images/gallery/4.jpg" className="image-popup">
                  <span className="dih-title-wrap">
                    <span className="dih-title">Live Music</span>
                    <span className="dih-wm">04</span>
                  </span>
                  <span className="dih-overlay"></span>
                  <img src="images/gallery/4.jpg" className="lazy img-fluid" alt="Live Music" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section-about */}
      <section id="section-about">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 wow fadeInRight">
              <img src="images/misc/icon-1.png" alt="Aromatic Taste" />
              <div className="spacer-single"></div>
              <h3>Aromatic Taste</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
              <a href="#" className="btn-border">Read More</a>
            </div>
            <div className="col-md-4 wow fadeInRight" data-wow-delay=".1s">
              <img src="images/misc/icon-2.png" alt="Delicious Foods" />
              <div className="spacer-single"></div>
              <h3>Delicious Foods</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
              <a href="#" className="btn-border">Read More</a>
            </div>
            <div className="col-md-4 wow fadeInRight" data-wow-delay=".2s">
              <img src="images/misc/icon-3.png" alt="Make Your Party" />
              <div className="spacer-single"></div>
              <h3>Make Your Party</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
              <a href="#" className="btn-border">Read More</a>
            </div>
          </div>
        </div>
      </section>

      {/* section-quote */}
      <section id="section-quote" aria-label="section" className="jarallax">
        <img className="jarallax-img" src="images/background/9.jpg" alt="Coffee Background" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 offset-md-3 text-center">
              <blockquote className="wow fadeInUp" data-wow-delay=".5s">
                It’s amazing how the world begins to change through the eyes of a cup of coffee.<span>Donna A. Favors</span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* section-specials */}
      <section id="section-specials" aria-label="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 offset-md-1 text-center">
              <div className="de-title">
                <h5 className="s1 wow fadeInUp" data-wow-delay=".5s"><span className="id-color-2">Specials</span></h5>
                <h2 className="wow fadeInUp" data-wow-delay=".75s">Of The Day</h2>
              </div>
              <div className="wow fadeInUp" data-wow-delay="1s">
                <h3>Classic Cappuccino</h3>
                <p>Composed of a single espresso shot and hot milk, with the surface topped with foamed milk. Prepared with an espresso machine.</p>
              </div>
            </div>
            <div className="col-md-6 offset-md-1">
              <div className="image-with-counter">
                <img className="img-1 img-fluid wow zoomIn" src="images/misc/1.png" alt="Cappuccino" />
                <div className="div-1 wow zoomIn" data-wow-delay=".5s">
                  <div className="de_count">
                    <h3><span className="timer" data-to="600" data-speed="3000">0</span></h3>
                    <h5 className="id-color">Sold Today</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section-drinks */}
      <section id="section-drinks" aria-label="section" className="jarallax">
        <img className="jarallax-img" src="images/background/1.jpg" alt="Drinks Background" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 offset-md-3 text-center">
              <div className="de-title">
                <h5 className="s1 wow fadeInUp" data-wow-delay=".5s"><span className="id-color-2">Favorite</span></h5>
                <h2 className="wow fadeInUp" data-wow-delay=".75s">Drinks</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section-drinks-menu */}
      <section id="section-drinks-menu" aria-label="section">
        <div className="container">
          <div className="row g-5 masonry">
            
            <div className="col-md-6 col-sm-12 col-xs-12 item">
              <div className="menu-wrap">
                <div className="menu-item thead">
                  <div className="c1">coffee</div>
                  <div className="c2">Medium<span>16 oz</span></div>
                  <div className="c3">Large<span>20 oz</span></div>
                </div>
                <div className="menu-item">
                  <div className="c1">Brewed coffee<i className="fa fa-thumbs-up" title="recommend"></i></div>
                  <div className="c2"><span className="cur">$</span>1.85</div>
                  <div className="c3"><span class="cur">$</span>2.35</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Cafe au lait</div>
                  <div className="c2"><span className="cur">$</span>2.65</div>
                  <div className="c3"><span className="cur">$</span>3.40</div>
                </div>
                <div className="menu-item">
                  <div className="c1">French press</div>
                  <div className="c2"><span className="cur">$</span>2.65</div>
                  <div className="c3"><span className="cur">$</span>3.40</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Iced coffee</div>
                  <div className="c2"><span className="cur">$</span>1.85</div>
                  <div className="c3"><span className="cur">$</span>2.35</div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 col-xs-12 item">
              <div className="menu-wrap">
                <div className="menu-item thead">
                  <div className="c1">espresso</div>
                  <div className="c2">Medium<span>16 oz</span></div>
                  <div className="c3">Large<span>20 oz</span></div>
                </div>
                <div className="menu-item">
                  <div className="c1">Espresso</div>
                  <div className="c2"><span className="cur">$</span>1.75</div>
                  <div className="c3"><span className="cur">$</span>2.20</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Mocchiato</div>
                  <div className="c2"><span className="cur">$</span>1.95</div>
                  <div className="c3"><span className="cur">$</span>2.25</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Con panna<span>new</span></div>
                  <div className="c2"><span className="cur">$</span>1.95</div>
                  <div className="c3"><span className="cur">$</span>2.25</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Cafe latte</div>
                  <div className="c2"><span className="cur">$</span>3.15</div>
                  <div className="c3"><span className="cur">$</span>4.15</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Classic Cappucino<i className="fa fa-thumbs-up" title="recommend"></i></div>
                  <div className="c2"><span className="cur">$</span>2.90</div>
                  <div className="c3"><span className="cur">$</span>3.90</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Cappucino</div>
                  <div className="c2"><span className="cur">$</span>3.15</div>
                  <div className="c3"><span className="cur">$</span>4.15</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Mocha latte</div>
                  <div className="c2"><span className="cur">$</span>3.45</div>
                  <div className="c3"><span className="cur">$</span>4.35</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Caramel late</div>
                  <div className="c2"><span className="cur">$</span>3.45</div>
                  <div className="c3"><span className="cur">$</span>4.35</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Vanilla late</div>
                  <div className="c2"><span className="cur">$</span>3.45</div>
                  <div className="c3"><span className="cur">$</span>4.35</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Cafe miel</div>
                  <div className="c2"><span className="cur">$</span>3.85</div>
                  <div className="c3"><span className="cur">$</span>4.70</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Cafe americano</div>
                  <div className="c2"><span className="cur">$</span>2.25</div>
                  <div className="c3"><span className="cur">$</span>3.50</div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 col-xs-12 item">
              <div className="menu-wrap">
                <div className="menu-item thead">
                  <div className="c1">non coffee</div>
                  <div className="c2">Medium<span>16 oz</span></div>
                  <div className="c3">Large<span>20 oz</span></div>
                </div>
                <div className="menu-item">
                  <div className="c1">Hot tea</div>
                  <div className="c2"><span className="cur">$</span>1.85</div>
                  <div className="c3"><span className="cur">$</span>2.35</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Iced tea</div>
                  <div className="c2"><span className="cur">$</span>2.65</div>
                  <div className="c3"><span className="cur">$</span>3.40</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Steamer<span>new</span></div>
                  <div className="c2"><span className="cur">$</span>2.85</div>
                  <div className="c3"><span className="cur">$</span>3.85</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Hot chocolate<i className="fa fa-thumbs-up" title="recommend"></i></div>
                  <div className="c2"><span className="cur">$</span>2.85</div>
                  <div className="c3"><span className="cur">$</span>3.85</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Lemonade</div>
                  <div className="c2"><span className="cur">$</span>2.50</div>
                  <div className="c3"><span className="cur">$</span>3.50</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Fruit smoothie</div>
                  <div className="c2"><span className="cur">$</span>3.15</div>
                  <div className="c3"><span className="cur">$</span>4.15</div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 col-xs-12 item">
              <div className="menu-wrap">
                <div className="menu-item thead">
                  <div className="c1">add ons</div>
                </div>
                <div className="spacer-half"></div>
                <div className="menu-item">
                  <div className="c1">Pearl</div>
                  <div className="c2"></div>
                  <div className="c3"><span className="cur">$</span>1.15</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Almond</div>
                  <div className="c2"></div>
                  <div className="c3"><span className="cur">$</span>1.15</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Coffee Jelly</div>
                  <div className="c2"></div>
                  <div className="c3"><span className="cur">$</span>1.15</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* section-food */}
      <section id="section-food" aria-label="section" className="jarallax">
        <img className="jarallax-img" src="images/background/2.jpg" alt="Food Background" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 offset-md-3 text-center">
              <div className="de-title">
                <h5 class="s1 wow fadeInUp" data-wow-delay=".5s"><span className="id-color-2">Favorite</span></h5>
                <h2 className="wow fadeInUp" data-wow-delay=".75s">Food</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section-food-menu */}
      <section id="section-food-menu" aria-label="section">
        <div className="container">
          <div className="row g-5 masonry">
            
            <div className="col-md-6 col-sm-12 col-xs-12 item">
              <div className="menu-wrap">
                <div className="menu-item thead">
                  <div className="c1">breads</div>
                  <div className="c2"></div>
                  <div className="c3">Price</div>
                </div>
                <div className="spacer-half"></div>
                <div className="menu-item">
                  <div className="c1">Plain bread</div>
                  <div className="c2"></div>
                  <div className="c3"><span className="cur">$</span>2.75</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Milk bread</div>
                  <div className="c2"></div>
                  <div className="c3"><span className="cur">$</span>2.75</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Sandwich bread</div>
                  <div className="c2"></div>
                  <div className="c3"><span className="cur">$</span>2.75</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Brown bread</div>
                  <div className="c2"></div>
                  <div className="c3"><span className="cur">$</span>2.75</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Garlic bread<i className="fa fa-thumbs-up" title="recommend"></i></div>
                  <div className="c2"></div>
                  <div className="c3"><span className="cur">$</span>2.75</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Wheat bread</div>
                  <div className="c2"></div>
                  <div className="c3"><span className="cur">$</span>2.75</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Bannana bread</div>
                  <div className="c2"></div>
                  <div className="c3"><span className="cur">$</span>2.75</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Burger bun</div>
                  <div className="c2"></div>
                  <div className="c3"><span className="cur">$</span>2.75</div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 col-xs-12 item">
              <div className="menu-wrap">
                <div className="menu-item thead">
                  <div className="c1">snacks</div>
                  <div className="c2"></div>
                  <div className="c3">Price</div>
                </div>
                <div className="spacer-half"></div>
                <div className="menu-item">
                  <div className="c1">Chicken burger</div>
                  <div className="c2"></div>
                  <div className="c3"><span className="cur">$</span>4.75</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Chicken pizza</div>
                  <div className="c2"></div>
                  <div className="c3"><span className="cur">$</span>8.75</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Veg pizza<span>new</span></div>
                  <div className="c2"></div>
                  <div className="c3"><span className="cur">$</span>6.75</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Chicken grilled pizza</div>
                  <div className="c2"></div>
                  <div className="c3"><span className="cur">$</span>8.75</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Veg grilled pizza</div>
                  <div className="c2"></div>
                  <div className="c3"><span className="cur">$</span>6.75</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Chicken sandwich</div>
                  <div className="c2"></div>
                  <div className="c3"><span className="cur">$</span>4.75</div>
                </div>
                <div className="menu-item">
                  <div className="c1">Veg sandwich</div>
                  <div className="c2"></div>
                  <div className="c3"><span className="cur">$</span>3.75</div>
                </div>
                <div className="menu-item">
                  <div className="c1">French fries</div>
                  <div className="c2"></div>
                  <div className="c3"><span className="cur">$</span>2.75</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* section-blog */}
      <section id="section-blog" className="jarallax">
        <img className="jarallax-img" src="images/background/3.jpg" alt="Blog Background" />
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="de-title">
                <h5 className="s1 wow fadeInUp" data-wow-delay=".5s"><span className="id-color-2">Latest</span></h5>
                <h2 className="wow fadeInUp" data-wow-delay=".75s">Blog</h2>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="d-items">
                <div className="card-image-1 mod-b">
                  <a href="#" className="d-text" onClick={(e) => { e.preventDefault(); setPage('blog-single'); }}>
                    <div className="d-inner">
                      <span className="atr-date">Aug 8, 2025</span>
                      <h3>This Will Fundamentally Change the Way You Look at Coffee</h3>
                      <h5 className="d-tag">all about coffee</h5>
                    </div>
                  </a>
                  <img src="images/blog/1.jpg" className="img-fluid" alt="Blog Post 1" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="d-items">
                <div className="card-image-1 mod-b">
                  <a href="#" className="d-text" onClick={(e) => { e.preventDefault(); setPage('blog-single'); }}>
                    <div className="d-inner">
                      <span className="atr-date">Aug 8, 2025</span>
                      <h3>7 Cult-Favorite Coffee Products You Should Know</h3>
                      <h5 className="d-tag">all about coffee</h5>
                    </div>
                  </a>
                  <img src="images/blog/2.jpg" className="img-fluid" alt="Blog Post 2" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="d-items">
                <div className="card-image-1 mod-b">
                  <a href="#" className="d-text" onClick={(e) => { e.preventDefault(); setPage('blog-single'); }}>
                    <div className="d-inner">
                      <span className="atr-date">Aug 8, 2025</span>
                      <h3>14 Unbelievable Things You Never Knew About Coffee</h3>
                      <h5 className="d-tag">all about coffee</h5>
                    </div>
                  </a>
                  <img src="images/blog/3.jpg" className="img-fluid" alt="Blog Post 3" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="d-items">
                <div className="card-image-1 mod-b">
                  <a href="#" className="d-text" onClick={(e) => { e.preventDefault(); setPage('blog-single'); }}>
                    <div className="d-inner">
                      <span className="atr-date">Aug 8, 2025</span>
                      <h3>The Best Type of Coffee for Every Zodiac Sign</h3>
                      <h5 className="d-tag">all about coffee</h5>
                    </div>
                  </a>
                  <img src="images/blog/4.jpg" className="img-fluid" alt="Blog Post 4" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="d-items">
                <div className="card-image-1 mod-b">
                  <a href="#" className="d-text" onClick={(e) => { e.preventDefault(); setPage('blog-single'); }}>
                    <div className="d-inner">
                      <span className="atr-date">Aug 8, 2025</span>
                      <h3>Some Feel-Good News About Coffee to Brighten Your Day</h3>
                      <h5 className="d-tag">all about coffee</h5>
                    </div>
                  </a>
                  <img src="images/blog/5.jpg" className="img-fluid" alt="Blog Post 5" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* section-location */}
      <section id="section-location" aria-label="section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-sm-30 text-center">
              <i className="icon_pin_alt fontsize48 id-color mb20"></i>
              <h3>Location</h3>
              08 W 36th St, New York, NY 10001
            </div>
            <div className="col-md-4 mb-sm-30 text-center">
              <i className="icon_mug fontsize48 id-color mb20"></i>
              <h3>We're Open</h3>
              Weekdays 08:00 - 22:00. Weekends 08:00 - 24:00.
            </div>
            <div className="col-md-4 mb-sm-30 text-center">
              <i className="icon_mail_alt fontsize48 id-color mb20"></i>
              <h3>Contact Us</h3>
              P: +1 333 1000 2000. E: contact@example.com.
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
