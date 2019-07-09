import React, { Fragment, useEffect } from 'react';
import StarRatings from 'react-star-ratings';

const ProductDetails = props => {
  useEffect(() => {
    props.getSingleProduct(props.match.params.id);
  }, []);
  const { post_title, price, images, permalink } = props.product;
  return (
    <div className="single_product-container">
      <div className="single_product-main">
        <h2 className="single-post-title">{post_title}</h2>
        <p className="single-post-price">Price: AED {price}</p>
        <img src={images} className="single_product-image" />
        <div className="button-sharaf"><a href={`${permalink}`}>View in Sharaf</a></div>
      </div>
      <div className="details">

        <div className="details-container">
          {post_title}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
