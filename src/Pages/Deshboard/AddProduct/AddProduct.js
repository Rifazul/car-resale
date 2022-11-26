import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const imagebbKey =process.env.REACT_APP_HoastinImagebbkey;
    
    
    const {register, formState: { errors }, handleSubmit} = useForm()
  
        //    const [refres , setRefres] = useState('')
           
     const handlarAdProduct = (data)=>{
     
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
         
         const url =`https://api.imgbb.com/1/upload?key=${imagebbKey}`
   
            fetch(url,{
                 method:'POST',
                 body:formData
            })
           .then(res => res.json())
           .then(imaData =>{
            
            console.log(imaData.data.url)
            if(imaData.success){
                const sellerProducts = {
             
                    ProductName:data.name,
                    resalePrice : data.resale,
                    originalPrice : data.original,
                    select: data.select,
                    location : data.location,
                     year: data.year,
                     phone:data.phone,
                     decripe:data.decripe,
                     img:imaData.data.url
             }
    
             
            fetch('http://localhost:5000/sellerProducts',{
    
               method:'POST',
    
               headers:{
    
                'content-type': 'application/json',
               },

               body:JSON.stringify(sellerProducts)
            })   
                .then(res => res.json())
                .then(data => {
                    
                      if(data.acknowledged){

                          toast.success('Seller product database save')
                          
                      } 
                       
                }) 

            }
            
           })

         
     }

    return (
     
       
            <div className='h-[650px]  mt-7 flex  items-center'>
            <div className='w-96 border border-blue-600  p-7'>
             <h2 className='text-2xl text-center'> Add Product</h2>

         <form onSubmit={handleSubmit(handlarAdProduct)}>
                       
              <div className="form-control w-full max-w-xs">
              <label className="label">
              <span className="label-text text-1xl"> </span>
              </label>
              <input type="text"  {...register("name" , {required:"Plase name not valid" } )} placeholder='Product Name'   className="input input-bordered w-full max-w-xs" />
                { errors.name && <p className='text-red-600' >{errors.name.message} </p> }
               </div>


             <div className='flex' >
             <div className="form-control w-full max-w-xs mr-3">
            <label className="label">
            <span className="label-text text-1xl"></span>
            </label>
            <input type="price" {...register("resale" ,{required:true} )} placeholder=' resale price' className="input input-bordered w-full max-w-xs" />
            </div>

            <div className="form-control w-full max-w-xs">
            <label className="label">
            <span className="label-text text-1xl"></span>
            </label>
            <input type="price" {...register("original" ,{required:true} )} placeholder='original price' className="input input-bordered w-full max-w-xs" />
            </div>
             </div>
            

         <div className="form-control w-full ">
              <label className="label">
              <span className="label-text text-1xl"></span>
              </label>
              <select type='text' {...register("select" ,{required:true} )}  placeholder='user experise'  className="select select-bordered w-full max-w-xs">
              <option>excellent</option>
              <option>good</option>
              <option>fair</option>
           </select>
          </div>

          

            <div className='flex'>
             
            <div className="form-control w-full max-w-xs mr-3">
            <label className="label">
            <span className="label-text text-1xl"></span>
            </label>
            <input type="year" {...register("year" ,{required:true} )} placeholder=' yaer ' className="input input-bordered w-full max-w-xs" />
            </div>




            <div className="form-control w-full max-w-xs">
            <label className="label">
            <span className="label-text text-1xl"></span>
            </label>
            <input type="location" {...register("location" ,{required:true} )} placeholder=' location' className="input input-bordered w-full max-w-xs" />
            </div>
           
            </div>


            <div className="form-control w-full max-w-xs mr-3">
            <label className="label">
            <span className="label-text text-1xl"></span>
            </label>
            <input type="phone" {...register("phone" ,{required:true} )} placeholder='mobile number' className=" input input-bordered w-full max-w-xs" />
            </div>


                 <div className="form-control w-full max-w-xs">
                       <label className="label">
                       <span className="label-text text-2xl"> </span>
                       </label>
                       <input type="file"  {...register("image" , {required:"Plase img not valid" } )}   className="input  input-bordered w-full max-w-xs p-2" />
                         { errors.img && <p className='text-red-600' >{errors.img.message} </p> }
                        </div>


            <div className="form-control w-full max-w-xs mr-3">
            <label className="label">
            <span className="label-text text-1xl"></span>
            </label>
            <input type="decripe" {...register("decripe" ,{required:true} )} placeholder=' description fields ' className="input   input-bordered w-full max-w-xs h-28" />
            </div>
        
        <p className='text-red-500'>  </p>
        <input type="submit" className='btn w-full border-none hover:text-gray-100 bg-gradient-to-r from-rose-500 to-teal-700 text-white my-3' value="Submit" />
        </form>
       </div>
        </div>
    );
};

export default AddProduct;