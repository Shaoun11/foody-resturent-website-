import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Authcontext } from '../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Updated = () => {
    const navigated=useNavigate();
    const loaddata=useLoaderData();
    const {foodName,foodImage,foodCategory,order,price,country,description,useremail,userimg,_id,username}=loaddata;

    const{user}=useContext(Authcontext);
    const handleform=e=>{
        e.preventDefault();
        const form=e.target;
        const foodName=form.foodName.value;
        const foodImage=form.foodImage.value;
        const foodCategory=form.foodCategory.value;
        const order=form.order.value;
        const price=form.Price.value;
        const country=form.country.value;
        const description=form.description.value;
       const userimg=user?.photoURL;
       const useremail=user?.email;
       const username=user?.displayName;
        const data={foodName,foodImage,foodCategory,order,price,country,description,useremail,userimg,username}
       console.log(data);
          
       fetch(`https://assginment-11-server-site.vercel.app/addedfood/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount>0) {
              Swal.fire({
                  title: 'success',
                  text: 'you Updated succesfully',
                  icon: 'success',
                  confirmButtonText: 'Good Job'
                 
                })
               
              }
           navigated(`/myaddfood`)
            
        });
    
    
      }


    return (
        <div className="lg:flex bg-stone-100  md:flex items-center justify-center">
               <Helmet>
                <title>Foody resturent Updated Added Food</title>
             
            </Helmet>
        <div>
            <img className="h-[400px]" src="https://i.ibb.co/HnP9Qdj/360-F-254878309-P62oik-Pc8zu9-TQjr4j2-Xp-Ekl5d-FBa6ep-removebg-preview.png" alt="" />
        </div>
          <div className="flex  items-center justify-center p-12">

<div className="mx-auto w-full max-w-[550px]">
<h1 className="text-3xl text-center font-semibold">Add Your New Food</h1>
  <form onSubmit={handleform}  >
    <div className="mb-5">
      <label
        for="name"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
     Food Name
      </label>
      <input
        type="text"
        name="foodName"
        defaultValue={foodName}
        id="name"
        placeholder="Type Your Food Name"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
    <div className="mb-5">
      <label
        for="img"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
       Food URL
      </label>
      <input
        type="text"
        name="foodImage"
        defaultValue={foodImage}
        id="img"
        placeholder=" Food Image URL"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
    <div className="-mx-3 flex flex-wrap">
      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <label
            for="fName"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Category Name
          </label>
          <input
            type="text"
            name="foodCategory"
            defaultValue={foodCategory}
            id="fName"
            placeholder="Food Category"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
      
        <div className="mb-5">
          <label
            for="fName"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            
            Quantity
          </label>
          <input
            type="text"
            name="order"
            defaultValue={order}
            id="fName"
            placeholder="Quantity"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <label
            for="lName"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
           Price
          </label>
          <input
            type="number"
            name="Price"
            defaultValue={price}
            id="price"
            placeholder="Price"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <label
            for="lName"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
          Food Origin
          </label>
          <input
            type="text"
            defaultValue={country}
            name="country"
            id="price"
            placeholder="Food Origin (Country)"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
     
    </div>
    <div className="mb-5">
      <label
        for="message"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
     Short Descriptin
      </label>
      <textarea
        rows="4"
       name="description"
       defaultValue={description}
        id="description"
        placeholder="Type your description"
        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      ></textarea>
    </div>
    <div>
      <button
        className="hover:shadow-form rounded-md bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none"
      >
       Update Food
      </button>
    </div>
  </form>
</div>
</div>
      </div>
    );
};

export default Updated;