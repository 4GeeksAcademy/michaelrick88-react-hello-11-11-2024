import React from 'react';


const Card = ({imagen,title,butom,tamaños}) => {
  
  return (
    <div className= {tamaños}>
    <div className="card d-flex flex-column h-100">
      <img src={imagen} className="card-img-top mt-2" height="250" alt="..." />
      <div className="card-body text-center flex-grow-1">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className='text-center mt-auto p-2'>
        <a href="#" className="btn btn-primary">{butom}</a>
        </div>
      </div>
    </div>
    </div>
  )
};

export default Card;