import React, { useState } from 'react';

const BlogSingle = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "John Smith",
      date: "August 8, 2025",
      avatar: "images/ui/avatar.jpg",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      replies: [
        {
          id: 11,
          author: "John Smith",
          date: "August 8, 2025",
          avatar: "images/ui/avatar.jpg",
          text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
      ]
    },
    {
      id: 2,
      author: "John Smith",
      date: "August 8, 2025",
      avatar: "images/ui/avatar.jpg",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      replies: [
        {
          id: 21,
          author: "John Smith",
          date: "August 8, 2025",
          avatar: "images/ui/avatar.jpg",
          text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
      ]
    }
  ]);

  const [newComment, setNewComment] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.name || !newComment.message) return;
    
    const addedComment = {
      id: Date.now(),
      author: newComment.name,
      date: new Date().toLocaleDateString(),
      avatar: "images/ui/avatar.jpg",
      text: newComment.message,
      replies: []
    };

    setComments([...comments, addedComment]);
    setNewComment({ name: '', email: '', message: '' });
  };

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>
      
      {/* subheader */}
      <section id="subheader" className="jarallax text-light">
        <img className="jarallax-img" src="images/background/6.jpg" alt="Article Background" />
        <div className="center-y relative text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2 text-center">
                <h2>This Will Fundamentally Change the Way You Look at Coffee</h2>
                <p>August 8, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* content main */}
      <section id="section-main" aria-label="section-menu">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-8 offset-md-2">
              <div className="de-post-read">
                <div className="post-content">
                  <div className="post-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                    </p>
                    
                    <blockquote>
                      It’s amazing how the world begins to change through the eyes of a cup of coffee.<span>Donna A. Favors</span>
                    </blockquote>
                    
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                    </p>
                  </div>
                </div>
                
                <div className="post-meta">
                  <span><i className="fa fa-user id-color"></i>By: <a href="#">Lynda Wu</a></span>{' '}
                  <span><i className="fa fa-tag id-color"></i><a href="#">News</a>, <a href="#">Events</a></span>{' '}
                  <span><i className="fa fa-comment id-color"></i><a href="#">{comments.length} Comments</a></span>
                </div>
                
                <div className="spacer-single"></div>
                
                {/* blog comment section */}
                <div id="blog-comment">
                  <h4>Comments ({comments.length + comments.reduce((acc, c) => acc + c.replies.length, 0)})</h4>
                  
                  <div className="spacer-half"></div>
                  
                  <ol>
                    {comments.map((comment) => (
                      <li key={comment.id}>
                        <div className="avatar">
                          <img src={comment.avatar} alt={comment.author} />
                        </div>
                        <div className="comment-info">
                          <span className="c_name">{comment.author}</span>
                          <span className="c_date id-color">{comment.date}</span>
                          <span className="c_reply"><a href="#">Reply</a></span>
                          <div className="clearfix"></div>
                        </div>
                        <div className="comment">{comment.text}</div>
                        
                        {comment.replies.length > 0 && (
                          <ol>
                            {comment.replies.map((reply) => (
                              <li key={reply.id}>
                                <div className="avatar">
                                  <img src={reply.avatar} alt={reply.author} />
                                </div>
                                <div className="comment-info">
                                  <span className="c_name">{reply.author}</span>
                                  <span className="c_date id-color">{reply.date}</span>
                                  <span className="c_reply"><a href="#">Reply</a></span>
                                  <div className="clearfix"></div>
                                </div>
                                <div className="comment">{reply.text}</div>
                              </li>
                            ))}
                          </ol>
                        )}
                      </li>
                    ))}
                  </ol>
                  
                  <div className="spacer-single"></div>
                  
                  {/* leave a comment form */}
                  <div id="comment-form-wrapper">
                    <h4>Leave a Comment</h4>
                    <div className="comment_form_holder">
                      <form id="contact_form" name="contactForm" onSubmit={handleCommentSubmit}>
                        <label>Name <span className="req">*</span></label>
                        <div className="mb10">
                          <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            className="form-control" 
                            value={newComment.name}
                            onChange={handleInputChange}
                            required 
                          />
                        </div>
                        
                        <label>Email <span className="req">*</span></label>
                        <div className="mb10">
                          <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="form-control"
                            value={newComment.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <label>Message <span className="req">*</span></label>
                        <div className="mb10">
                          <textarea 
                            name="message" 
                            id="message" 
                            className="form-control" 
                            rows="6"
                            value={newComment.message}
                            onChange={handleInputChange}
                            required
                          ></textarea>
                        </div>
                        
                        <p id="submit" className="mt20">
                          <input type="submit" id="send_message" value="Submit Form" className="btn btn-main" />
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSingle;
