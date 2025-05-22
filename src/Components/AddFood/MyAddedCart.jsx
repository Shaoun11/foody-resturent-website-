import React from 'react';
import { Link } from 'react-router-dom';

const MyAddedCart = ({food}) => {
    const {foodName,_id,foodImage,foodCategory,order,price,country,description,useremail,userimg,username}=food;
   
    const handle=e=>{
        e.preventDefault()
        const form =e.target;
        const email=form.target.value;
        console.log(email);
    }
    return (
        <div data-aos='fade-up' className=" flex  h-[470px] max-w-[26rem]  flex-col rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-lg">
  <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img className='w-[400px] h-[300px]'
      src={foodImage}
      alt="ui/ux review check"
    />


  </div>
  <div className="p-6">
    <div className="mb- flex items-center justify-between">
      <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
       {foodName}
      </h5>
      
      <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="-mt-0.5 h-5 w-5 text-yellow-400"
        >
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd"
          ></path>
        </svg>
        5.00
      </p>
    </div>
    
    <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
      {description.slice(0,100)}
    </p>
    <h5 className="block font-sans text-base font-mono leading-snug tracking-normal text-blue-gray-900 antialiased">
       Category:{foodCategory}
      </h5>
    <div className='flex justify-between'>
    <h5 className="block font-sans text-lg font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
       ${price}
      </h5>
      <h5 className="block font-sans text-sm text-red-500 font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
       Sell:{order}
      </h5>
    </div>
    <div className=" flex gap-3 pb-3 items-center font-semibold text-gray-800  hover:bg-gray-100 rounded-md hover:cursor-pointer">
            <img className="w-9 h-9 rounded-full" src={userimg} alt="Rebecca Burke"/>
            <div className="flex flex-col">
                <div className='text-sm'>
                    {username}
                    <p className='text-gray-400 text-sm font-normal'> Added By</p>
                </div>
              
            </div>
        </div>
       <Link to={`/updated/${_id}`} >
       <div>
                <button  className='btn w-full btn-outline cursor-pointer items-center justify-center rounded-md border-red-500 py-2 px-8 text-center text-gray-700 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-red-500 hover:text-white' >Update</button>
               </div>
       </Link>
<div>
    
</div>
  </div>
 
</div>
    );
};

export default MyAddedCart;