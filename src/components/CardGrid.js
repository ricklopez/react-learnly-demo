import React from 'react';

export default (props) => {
  return (
    <main role="main">
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
    
            <div className="col-md-3">
              <div className="card mb-4 shadow-sm">
                <img className="card-img-top" src="https://via.placeholder.com/350x350&text=Thumbnail" alt="Card cap"/>
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
    
          </div>
        </div>
      </div>
    </main>
  
  )
}

