import React from 'react';

export default (props) => {
  return (
    <div className="col-md-3">
      <div className="card mb-4 shadow-sm">
        <img className="card-img-top" src={props.img} alt="Card cap"/>
        <div className="card-body">
          <p className="card-text">{props.title}</p>
          { props.url !== false &&
              (<a className="btn btn-info" href={props.url} role="button" target="_blank">Watch</a>) 
          }
        </div>
      </div>
    </div>
  
  )
}

