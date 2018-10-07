import React from 'react';
import CardGridItem from './CardItem';

export default (props) => {
  
  const liveList = props.courses.map((item, i) => {
    return(
    <CardGridItem title={item.title} img={item.coverImg} url={item.url ? item.url : false} key={item.id} />
  )});
  return (
    <main role="main">
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row mb-4">
            <h2>{props.label}</h2>
          </div>
          <div className="row">
            {liveList}
          </div>
        </div>
      </div>
    </main>
  
  )
}

