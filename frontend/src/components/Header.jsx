import React from 'react';

const Header = ({ page, setPage }) => {
  return (
    <header className="transparent">
      <div className="container">
        <div className="row">
          <div class="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div className="de-flex-col">
                  {/* logo begin */}
                  <div id="logo">
                    <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }}>
                      <img alt="Stradale Logo" src="images/logo.png" />
                    </a>
                  </div>
                  {/* logo close */}
                </div>
              </div>
              <div className="de-flex-col header-col-mid">
                {/* mainmenu */}
                <ul id="mainmenu">
                  <li>
                    <a 
                      href="#" 
                      className={page === 'home' ? 'active' : ''} 
                      onClick={(e) => { e.preventDefault(); setPage('home'); }}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className={page === 'menu' ? 'active' : ''} 
                      onClick={(e) => { e.preventDefault(); setPage('menu'); }}
                    >
                      Menu
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className={page === 'reservation' ? 'active' : ''} 
                      onClick={(e) => { e.preventDefault(); setPage('reservation'); }}
                    >
                      Reservation
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className={page === 'blog' || page === 'blog-single' ? 'active' : ''} 
                      onClick={(e) => { e.preventDefault(); setPage('blog'); }}
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className={page === 'gallery' ? 'active' : ''} 
                      onClick={(e) => { e.preventDefault(); setPage('gallery'); }}
                    >
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className={page === 'contact' ? 'active' : ''} 
                      onClick={(e) => { e.preventDefault(); setPage('contact'); }}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                {/* mainmenu */}
              </div>
              <div className="de-flex-col">
                <div className="menu_side_area">
                  <a 
                    href="#" 
                    className="btn-main sm-hide" 
                    onClick={(e) => { e.preventDefault(); setPage('reservation'); }}
                  >
                    Reservation
                  </a>
                  <span id="menu-btn"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
