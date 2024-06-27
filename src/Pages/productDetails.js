import React from "react";

export default function productDetails() {
  return (
    <>
      <div className="d-flex p-5 w-100 gap-5 align-self-center">
        <img
        className="flex-fill object-fit-cover"
          src="https://membrillo.com.au/wp-content/uploads/2016/11/bg-mango-01.jpg"
          alt=""
        />
        <div className="text-box flex-fill">
          <p>Quantity: 1</p>
          <p class="description">A bag of delicious mangoes!</p>
        </div>
      </div>
    </>
  );
}
