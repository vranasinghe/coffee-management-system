import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Blog from './components/Blog';
import BlogSingle from './components/BlogSingle';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home setPage={setPage} />;
      case 'menu':
        return <Menu />;
      case 'reservation':
        return <Reservation />;
      case 'blog':
        return <Blog setPage={setPage} />;
      case 'blog-single':
        return <BlogSingle setPage={setPage} />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div id="wrapper">
      <Header page={page} setPage={setPage} />
      {renderPage()}
      <Footer />
      <AIAssistant />
    </div>
  );
}

export default App;
