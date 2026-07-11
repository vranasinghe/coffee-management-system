import React, { useState, useEffect } from 'react';

const fallbackMenuItems = [
  // coffee
  { name: 'Brewed coffee', category: 'coffee', priceMedium: 1.85, priceLarge: 2.35, isRecommended: true },
  { name: 'Cafe au lait', category: 'coffee', priceMedium: 2.65, priceLarge: 3.40 },
  { name: 'French press', category: 'coffee', priceMedium: 2.65, priceLarge: 3.40 },
  { name: 'Iced coffee', category: 'coffee', priceMedium: 1.85, priceLarge: 2.35 },
  // espresso
  { name: 'Espresso', category: 'espresso', priceMedium: 1.75, priceLarge: 2.20 },
  { name: 'Mocchiato', category: 'espresso', priceMedium: 1.95, priceLarge: 2.25 },
  { name: 'Con panna', category: 'espresso', priceMedium: 1.95, priceLarge: 2.25, isNewItem: true },
  { name: 'Cafe latte', category: 'espresso', priceMedium: 3.15, priceLarge: 4.15 },
  { name: 'Classic Cappucino', category: 'espresso', priceMedium: 2.90, priceLarge: 3.90, isRecommended: true },
  { name: 'Cappucino', category: 'espresso', priceMedium: 3.15, priceLarge: 4.15 },
  { name: 'Mocha latte', category: 'espresso', priceMedium: 3.45, priceLarge: 4.35 },
  { name: 'Caramel late', category: 'espresso', priceMedium: 3.45, priceLarge: 4.35 },
  { name: 'Vanilla late', category: 'espresso', priceMedium: 3.45, priceLarge: 4.35 },
  { name: 'Cafe miel', category: 'espresso', priceMedium: 3.85, priceLarge: 4.70 },
  { name: 'Cafe americano', category: 'espresso', priceMedium: 2.25, priceLarge: 3.50 },
  // non-coffee
  { name: 'Hot tea', category: 'non-coffee', priceMedium: 1.85, priceLarge: 2.35 },
  { name: 'Iced tea', category: 'non-coffee', priceMedium: 2.65, priceLarge: 3.40 },
  { name: 'Steamer', category: 'non-coffee', priceMedium: 2.85, priceLarge: 3.85, isNewItem: true },
  { name: 'Hot chocolate', category: 'non-coffee', priceMedium: 2.85, priceLarge: 3.85, isRecommended: true },
  { name: 'Lemonade', category: 'non-coffee', priceMedium: 2.50, priceLarge: 3.50 },
  { name: 'Fruit smoothie', category: 'non-coffee', priceMedium: 3.15, priceLarge: 4.15 },
  // add-on
  { name: 'Pearl', category: 'add-on', price: 1.15 },
  { name: 'Almond', category: 'add-on', price: 1.15 },
  { name: 'Coffee Jelly', category: 'add-on', price: 1.15 },
  // bread
  { name: 'Plain bread', category: 'bread', price: 2.75 },
  { name: 'Milk bread', category: 'bread', price: 2.75 },
  { name: 'Sandwich bread', category: 'bread', price: 2.75 },
  { name: 'Brown bread', category: 'bread', price: 2.75 },
  { name: 'Garlic bread', category: 'bread', price: 2.75, isRecommended: true },
  { name: 'Wheat bread', category: 'bread', price: 2.75 },
  { name: 'Bannana bread', category: 'bread', price: 2.75 },
  { name: 'Burger bun', category: 'bread', price: 2.75 },
  // snack
  { name: 'Chicken burger', category: 'snack', price: 4.75 },
  { name: 'Chicken pizza', category: 'snack', price: 8.75 },
  { name: 'Veg pizza', category: 'snack', price: 6.75, isNewItem: true },
  { name: 'Chicken grilled pizza', category: 'snack', price: 8.75 },
  { name: 'Veg grilled pizza', category: 'snack', price: 6.75 },
  { name: 'Chicken sandwich', category: 'snack', price: 4.75 },
  { name: 'Veg sandwich', category: 'snack', price: 3.75 },
  { name: 'French fries', category: 'snack', price: 2.75 }
];

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingBackup, setUsingBackup] = useState(false);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
        const res = await fetch(`${apiUrl}/menu`);
        if (!res.ok) throw new Error('API failed');
        const json = await res.json();
        if (json.data && json.data.length > 0) {
          setMenuItems(json.data);
          setUsingBackup(false);
        } else {
          setMenuItems(fallbackMenuItems);
          setUsingBackup(true);
        }
      } catch (err) {
        console.warn('Backend menu API not available. Using frontend fallback menu items.');
        setMenuItems(fallbackMenuItems);
        setUsingBackup(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  const renderBeverageItems = (categoryName, titleText) => {
    const items = menuItems.filter(item => item.category === categoryName);
    return (
      <div className="menu-wrap">
        <div className="menu-item thead">
          <div className="c1">{titleText}</div>
          <div className="c2">Medium<span>16 oz</span></div>
          <div className="c3">Large<span>20 oz</span></div>
        </div>
        {items.map((item, idx) => (
          <div className="menu-item" key={item._id || idx}>
            <div className="c1">
              {item.name}
              {item.isRecommended && <i className="fa fa-thumbs-up" title="recommend" style={{ marginLeft: '6px' }}></i>}
              {item.isNewItem && <span style={{ marginLeft: '6px' }}>new</span>}
            </div>
            <div className="c2"><span className="cur">$</span>{item.priceMedium ? item.priceMedium.toFixed(2) : '-'}</div>
            <div className="c3"><span className="cur">$</span>{item.priceLarge ? item.priceLarge.toFixed(2) : '-'}</div>
          </div>
        ))}
      </div>
    );
  };

  const renderSinglePriceItems = (categoryName, titleText, priceColumnHeader = "Price") => {
    const items = menuItems.filter(item => item.category === categoryName);
    return (
      <div className="menu-wrap">
        <div className="menu-item thead">
          <div className="c1">{titleText}</div>
          <div className="c2"></div>
          <div className="c3">{priceColumnHeader}</div>
        </div>
        <div className="spacer-half"></div>
        {items.map((item, idx) => (
          <div className="menu-item" key={item._id || idx}>
            <div className="c1">
              {item.name}
              {item.isRecommended && <i className="fa fa-thumbs-up" title="recommend" style={{ marginLeft: '6px' }}></i>}
              {item.isNewItem && <span style={{ marginLeft: '6px' }}>new</span>}
            </div>
            <div className="c2"></div>
            <div className="c3"><span className="cur">$</span>{item.price ? item.price.toFixed(2) : '-'}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>

      {/* section subheader */}
      <section id="subheader" className="jarallax text-light">
        <img className="jarallax-img" src="images/background/1.jpg" alt="Menu Header" />
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="s2">Menus</h1>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><span className="id-color">Menu Selection</span></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* section-drinks-menu */}
      <section id="section-drinks-menu" aria-label="section" className="no-top-space">
        <div className="container">
          {loading ? (
            <div className="text-center py-5">
              <h3>Loading delicious menus...</h3>
            </div>
          ) : (
            <div className="row g-5 masonry">
              {usingBackup && (
                <div className="col-md-12 text-center text-muted mb-4">
                  <small>Offline Mode: Showing pre-cached local menu</small>
                </div>
              )}
              
              <div className="col-md-6 col-sm-12 col-xs-12 item">
                {renderBeverageItems('coffee', 'coffee')}
              </div>

              <div className="col-md-6 col-sm-12 col-xs-12 item">
                {renderBeverageItems('espresso', 'espresso')}
              </div>

              <div className="col-md-6 col-sm-12 col-xs-12 item">
                {renderBeverageItems('non-coffee', 'non coffee')}
              </div>

              <div className="col-md-6 col-sm-12 col-xs-12 item">
                {renderSinglePriceItems('add-on', 'add ons', 'Price')}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* section-food-menu */}
      <section id="section-food-menu" aria-label="section" className="no-top">
        <div className="container">
          {!loading && (
            <div className="row g-5 masonry">
              <div className="col-md-6 col-sm-12 col-xs-12 item">
                {renderSinglePriceItems('bread', 'breads')}
              </div>

              <div className="col-md-6 col-sm-12 col-xs-12 item">
                {renderSinglePriceItems('snack', 'snacks')}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;
