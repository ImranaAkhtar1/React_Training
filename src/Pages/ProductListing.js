import React from "react";

export default function ProductListing() {
  const data = [
    {
      imageUrl:
        "https://sc01.alicdn.com/kf/UT8.CaXX2NXXXagOFbXC/fresh-navel-oranges.jpg",
      quantity: 2,
      desc: "A bag of delicious oranges!",
    },
    {
      imageUrl:
      "https://membrillo.com.au/wp-content/uploads/2016/11/bg-mango-01.jpg",
      quantity: 1,
      desc: "A bag of delicious mangoes!",
    },
    {
      imageUrl:
        "https://newenglandorchards.org/wp-content/uploads/2014/10/img_5595.jpg",
      quantity: 4,
      desc: "A bag of delicious Apples!",
    },
    {
      imageUrl:
        "https://www.foodmatters.com/media/images/articles/16-powerful-reasons-to-eat-pineapple.jpg",
      quantity: 4,
      desc: "A bag of delicious pineapples!",
    },
  ];
  return (
    <>
      {data.map((item) => (
        <div className="productList p-5">
          <img src={item.imageUrl} alt="" />
          <div class="text-box">
            <p>Quantity: {item.quantity}</p>
            <p class="description">{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
}
