import React from 'react';

export default (props) => {
  return (
    
    <div className="col-md-3">
      <div className="card mb-4 shadow-sm">
        <img className="card-img-top" src={props.img} alt="Card cap"/>
        <div className="card-body">
          <p className="card-text">{props.title}</p>
        </div>
      </div>
    </div>
  
  )
}

