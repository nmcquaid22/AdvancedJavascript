import React from 'react';
import News from './News';
import LikeButton from './LikeButton';

//a function that will iterate through the data that we'll receive and then for each item that we'll get from the database, we'll create a new single with the item inside of it.


//stateless component

const containerStyle = {
  margin: '40px'
};
const buttonStyle = {
  paddingtop: '10px',

};


const NewsList = ({item}) => (

<div className="container  col-sm-4 col-md-4 col-lg-3" style={containerStyle}>


      <div  className="card d-flex align-items-center mx-auto" >

              <div className="card-content">

              <div className="card-image">
                <img src={item.urlToImage} className="card-img-top" alt={item.title}/>
              </div>
                <p>{item.title}</p>
                  <h5 className="card-title">{item.author}</h5>

                       <div className="card-body">

                        <a className="btn btn-outline-secondary" href={item.url} target="_blank">Full Article</a>


                              <LikeButton/>

                            </div>
                          </div>

              </div>

              </div>
);

export default NewsList;
