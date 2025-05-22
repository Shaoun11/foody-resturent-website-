import React from 'react';

const ServiceCard = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div>
            <h2
      className="text-center mb-16 md:text-5xl text-2xl  lg:text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl"
    >
  < br /> Our <span className='text-red-500'>Foods</span> Category
    </h2>
            </div>
       <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6 '>
       <div className="card mb-10 md:mb-1 md:w-[573px] md:h-[338px] w-[335px] h-[244px]  bg-base-100 shadow-xl image-full">
  <figure><img src="https://images3.alphacoders.com/104/1048292.jpg" className='object-cover w-full' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text font-semibold text-lg pt-16">Burger!</h2>
    <p>Smokey BBQ bacon cheeseburger with crispy onion rings.</p>
    <div className="card-actions justify-start ">
      <button className="btn bg-red-500 text-white border-none ">Buy Now</button>
    </div>
  </div>
</div>

<div className="card md:w-[573px] mb-10 md:mb-1 md:h-[338px] w-[335px] h-[244px] bg-base-100 shadow-xl image-full">
  <figure><img src="https://i.ibb.co/85K6FbT/e4c70a70d42588df1e33146f414c4d15.jpg" className='object-cover w-full' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text font-semibold text-lg pt-16">Pizza!</h2>
    <p>Mediterranean pizza with kalamata olives, feta cheese, and a tzatziki drizzle.</p>
    <div className="card-actions justify-start ">
      <button className="btn bg-red-500 text-white border-none ">Buy Now</button>
    </div>
  </div>
</div>
<div className="card lg:w-[1170px] lg:h-[450px] md:w-[573px] md:h-[338px]  w-[335px] h-[244px] bg-base-100 shadow-xl image-full">
  <figure><img src="https://t4.ftcdn.net/jpg/07/03/45/79/360_F_703457925_flABmjPl5FixSC0AX4XXjdly5ozMkwlS.jpg" className='object-cover w-full' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text font-semibold text-lg pt-16">Bairthday Cake!</h2>
    <p>Sweet and indulgent chocolate cake with a drizzle of caramel.</p>
    <div className="card-actions justify-start ">
      <button className="btn bg-red-500 text-white border-none ">Buy Now</button>
    </div>
  </div>
</div>
       </div>
        </div>
    );
};

export default ServiceCard;