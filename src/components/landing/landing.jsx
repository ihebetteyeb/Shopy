import React from "react";

const Landing = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center pt-20">
        <div className="flex items-center justify-center">
          <img
            src="src/assets/items.png"
            width="616"
            height="617"
            className={"object-cover"}
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <div className="flex justify-center">
              <h1 className="text-4xl font-bold leading-snug tracking-tight">
                Join The Organic Movement !
              </h1>
            </div>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              rem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="flex justify-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href=""
                className="px-8 py-4 text-lg font-medium text-center text-white bg-lime-700 rounded-md "
              >
                {" "}
                <div
                  className="pi pi-shopping-cart pr-2 text-white"
                  style={{ fontSize: "1.3rem" }}
                />
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-7 bg-black">
        <div className="grid grid-cols-6 flex jusitfy-center gap-10 text-white">
          <div className="col-span-1" />
          <div className="col-span-1 bg-slate-700 p-8">
            <a className="text-2xl font-medium ">
              <div
                className="pi pi-car pr-2 text-lime-300"
                style={{ fontSize: "2rem" }}
              />
              Free Shipping{" "}
            </a>
            <p>Above $5 Only</p>
          </div>
          <div className="col-span-1 bg-slate-700 p-8">
            <a className="text-2xl font-medium">
              <div
                className="pi pi-book pr-2 text-lime-300 text-nowrap"
                style={{ fontSize: "2rem" }}
              />
              Certified Organic
            </a>
            <p>100% Guarantee</p>
          </div>
          <div className="col-span-1 bg-slate-700 p-8">
            <a className="text-2xl font-medium">
              <div
                className="pi pi-money-bill pr-2  text-lime-300"
                style={{ fontSize: "2rem" }}
              />
              Huge Savings{" "}
            </a>
            <p>At Lowest Price</p>
          </div>
          <div className="col-span-1 bg-slate-700 p-8">
            <a className="text-2xl font-medium">
              <div
                className="pi pi-replay pr-2  text-lime-300"
                style={{ fontSize: "2rem" }}
              />
              Easy Returns
            </a>
            <p> No Questions Asked</p>
          </div>
          <div className="col-span-1" />
        </div>
      </div>
    </>
  );
};

export default Landing;
