import React from 'react';
import CardGridItem from './CardItem';

export default (props) => {
  
  const liveList = props.courses.live.map((item, i) => (
    <CardGridItem title={item.title} img={item.img} />
  ));
  return (
    <main role="main">
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {liveList}
          </div>
        </div>
      </div>
    </main>
  
  )
}

