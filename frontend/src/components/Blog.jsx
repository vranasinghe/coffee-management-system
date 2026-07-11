import React from 'react';

const Blog = ({ setPage }) => {
  const posts = [
    {
      id: 1,
      date: "Aug 8, 2025",
      title: "This Will Fundamentally Change the Way You Look at Coffee",
      excerpt: "Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore minim culpa ullamco aute eiusmod tempor anim nostrud quis officia dolore adipisicing elit ex est adipisicing.",
      tag: "all about coffee",
      img: "images/blog/1.jpg"
    },
    {
      id: 2,
      date: "Aug 8, 2025",
      title: "7 Cult-Favorite Coffee Products You Should Know",
      excerpt: "Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore minim culpa ullamco aute eiusmod tempor anim nostrud quis officia dolore adipisicing elit ex est adipisicing.",
      tag: "all about coffee",
      img: "images/blog/2.jpg"
    },
    {
      id: 3,
      date: "Aug 8, 2025",
      title: "14 Unbelievable Things You Never Knew About Coffee",
      excerpt: "Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore minim culpa ullamco aute eiusmod tempor anim nostrud quis officia dolore adipisicing elit ex est adipisicing.",
      tag: "all about coffee",
      img: "images/blog/3.jpg"
    },
    {
      id: 4,
      date: "Aug 8, 2025",
      title: "The Best Type of Coffee for Every Zodiac Sign",
      excerpt: "Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore minim culpa ullamco aute eiusmod tempor anim nostrud quis officia dolore adipisicing elit ex est adipisicing.",
      tag: "all about coffee",
      img: "images/blog/4.jpg"
    },
    {
      id: 5,
      date: "Aug 8, 2025",
      title: "Some Feel-Good News About Coffee to Brighten Your Day",
      excerpt: "Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore minim culpa ullamco aute eiusmod tempor anim nostrud quis officia dolore adipisicing elit ex est adipisicing.",
      tag: "all about coffee",
      img: "images/blog/5.jpg"
    },
    {
      id: 6,
      date: "Aug 8, 2025",
      title: "The Most Underrated Coffee Products You Need to Know",
      excerpt: "Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore minim culpa ullamco aute eiusmod tempor anim nostrud quis officia dolore adipisicing elit ex est adipisicing.",
      tag: "all about coffee",
      img: "images/blog/6.jpg"
    }
  ];

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>
      
      {/* subheader */}
      <section id="subheader" className="jarallax text-light">
        <img className="jarallax-img" src="images/background/subheader.jpg" alt="Blog Header" />
        <div className="center-y relative text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Blog</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section main */}
      <section id="section-main">
        <div className="container">
          <div className="row g-4">
            
            {posts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <div className="d-items">
                  <div className="card-image-1 mod-b">
                    <a href="#" className="d-text" onClick={(e) => { e.preventDefault(); setPage('blog-single'); }}>
                      <div className="d-inner">
                        <span className="atr-date">{post.date}</span>
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <h5 className="d-tag">{post.tag}</h5>
                      </div>
                    </a>
                    <img src={post.img} className="img-fluid" alt={post.title} />
                  </div>
                </div>
              </div>
            ))}

            <div className="clearfix"></div>
            
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
              </ul>
            </nav>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;
