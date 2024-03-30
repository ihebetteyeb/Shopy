import React from "react";

const ProductOverView = () => {
  return (
    <div className="md:flex items-start justify-center my-10">
        <img 
            class="object-cover" 
                height="550"
                width="550"
                src="src/assets/product_1.jpg" 
                alt="Assorted Coffee"
                loading="eager"
                placeholder="blur"/>
        <div className="my-1 md:mx-7 ">
            <div className="border-b border-solid border-gray-300">
                <div className="tracking-wide text-2xl font-semibold">Assorted Coffee</div>

                <div className="flex justify-start  pt-3 mt-1 font-medium text-black align-text-bottom">
                        <h2 className=" text-xl font-bold pr-2">£35.00</h2>
                        <p className="font-light">+ Free Shipping</p>
                </div>
                
                <p className="mt-2 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti, quos recusandae tempore eaque nam neque itaque molestias officiis inventore sunt quis expedita quisquam exercitationem distinctio quae voluptatibus iste accusantium.</p>

                <div className="max-w-md flex justify-start mt-5 lg:flex pb-5 ">
                        <input
                            type="number"
                            className="block border-gray-300 placeholder-gray-400 w-20 p-2 mr-5"
                            placeholder="1"
                        />
                        <button className="uppercase flex text-sm font-semibold text-white bg-lime-700 hover:bg-lime-600 rounded-md px-20 py-2 ">
                            Add to Cart
                        </button>
                </div>
            </div>
 
            <div className="mt-3 text-sm pb-5">
                <p>Categories: 
                    <a href="" className="text-lime-500 hover:text-lime-700 hover:underline pl-2" >Groceries</a>
                    <a href="" className="text-lime-500 hover:text-lime-700 hover:underline pl-2" >Juice</a>
                </p>
            </div>
        </div>
    </div>

  );
};

export default ProductOverView;
