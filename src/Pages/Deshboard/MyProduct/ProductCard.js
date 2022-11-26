import React from 'react';

const ProductCard = ({product}) => {

      const { img,ProductName, resalePrice,originalPrice,select,location,year ,phone,decrip} =product
    return (
        <div className='mb-5 mt-3'>
        <div className="card card-compact h-[400px]  bg-red-100 flex justify-between  shadow-xl">
        <figure><img className='mt-3' src={img} alt="Shoes" /></figure>
     <div className="card-body">
      <div className='grid justify-items-start '>
      <p className='ml-7 font-bold'> Name : {ProductName}</p>
      <p className='ml-7 font-bold'> Location : {location} </p>
      <p className='ml-7 font-bold'>  Resale Price: {resalePrice}Tk </p>
      <p className='ml-7  font-bold'> Original Price : {originalPrice} </p>
      <p className='ml-7 font-bold'> Youre : {year} </p>
     
       </div>
     
      </div>
 
    </div>
  
 </div>

    );
};

export default ProductCard;