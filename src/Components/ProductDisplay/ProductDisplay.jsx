import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    console.log(`Size selected: ${size}`);
  };


  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">Rs.{product.old_price}</div>
          <div className="productdisplay-right-price-new">Rs.{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          This kurta features intricate ethnic motifs printed on a luxurious fabric, enhanced with shimmering zari detailing. The straight cut offers a flattering silhouette, making it suitable for various occasions.
        </div>
        <div className="productdisplay-right-sizes">
          {sizes.map((size) => (
            <div
              key={size}
              onClick={() => handleSizeClick(size)}
              style={{
                padding: '10px',
                margin: '5px',
                border: selectedSize === size ? '2px solid blue' : '1px solid gray',
                cursor: 'pointer',
              }}
            >
              {size}
            </div>
          ))}
        </div>
        <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
