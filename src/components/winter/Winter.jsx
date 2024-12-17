import React from "react";
import w1 from "@/assets/images/w1.png";
import video from "@/assets/images/video.png";
import img from "@/assets/images/img.png";
import img_2 from "@/assets/images/img-2.png";
import img_3 from "@/assets/images/img-3.png";
import i1 from "@/assets/images/i1.png";
import i2 from "@/assets/images/i2.png";
import i3 from "@/assets/images/i3.png";
import i4 from "@/assets/images/i4.png";
import d1 from "@/assets/images/d1.png";
import d2 from "@/assets/images/d2.png";
import d3 from "@/assets/images/d3.png";
import d4 from "@/assets/images/d4.png";

const Winter = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-20 px-4 py-8">
        <div className="w-full md:w-1/2">
          <img src={w1} alt="Winter Sale" className="w-full shadow-md" />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <p className="text-[#377DFF] text-lg font-semibold">
            SALE UP TO 35% OFF
          </p>
          <h2 className="text-2xl md:text-4xl font-bold leading-snug">
            HUNDREDS of <br />
            New lower prices!
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Hurry up!!! Winter is coming!
          </p>
          <button className="text-[#377DFF] border-b-2 border-[#377DFF] font-medium hover:border-blue-700 transition duration-300">
            Shop Now ➙
          </button>
        </div>
      </div>

      <div className="mt-8 container">
        <div className="flex flex-col gap-2 text-center">
          <p className="text-[#377DFF]">PROMOTION</p>
          <h2 className="text-[40px]">Winter Collections</h2>
          <p>Introducing the new winter jackets.</p>
          <img src={video} alt="video" />
        </div>
      </div>

      <div className="mt-8 container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Latest Articles</h2>
          <button className="border-b-2 border-[#111] font-medium hover:border-blue-700 transition duration-300">
            View More ➙
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div>
            <img
              src={img}
              alt="Holiday gifts on display"
              className="w-full h-48 object-cover"
            />
            <p className="mt-2 text-lg font-medium">2023 Holiday Gift Guide</p>
            <button className="mt-2 border-b-2 border-[#111] font-medium hover:border-blue-700 transition duration-300">
              Read More ➙
            </button>
          </div>
          <div>
            <img
              src={img_2}
              alt="Latest tech gadgets"
              className="w-full h-48 object-cover"
            />
            <p className="mt-2 text-lg font-medium">Top Tech Gadgets of 2023</p>
            <button className="mt-2 border-b-2 border-[#111] font-medium hover:border-blue-700 transition duration-300">
              Read More ➙
            </button>
          </div>
          <div>
            <img
              src={img_3}
              alt="Trendy fashion outfits"
              className="w-full h-48 object-cover"
            />
            <p className="mt-2 text-lg font-medium">Best Fashion Trends</p>
            <button className="mt-2 border-b-2 border-[#111] font-medium hover:border-blue-700 transition duration-300">
              Read More ➙
            </button>
          </div>
        </div>
      </div>

      <div className="mt-24 container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-sm">newsfeed</p>
          <h2 className="text-2xl font-semibold">Instagram</h2>
          <p className="text-gray-600">
            Follow us on social media for more discounts & promotions
          </p>
          <p className="font-medium">@3legant_official</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          <img
            src={i1}
            alt="Instagram post 1"
            className="w-full h-40 object-cover rounded-md"
          />
          <img
            src={i2}
            alt="Instagram post 2"
            className="w-full h-40 object-cover rounded-md"
          />
          <img
            src={i3}
            alt="Instagram post 3"
            className="w-full h-40 object-cover rounded-md"
          />
          <img
            src={i4}
            alt="Instagram post 4"
            className="w-full h-40 object-cover rounded-md"
          />
        </div>
      </div>

      <div className="mt-24 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center space-y-3">
            <img
              src={d1}
              alt="Free Shipping"
              className="w-16 h-16 object-contain"
            />
            <p className="font-semibold text-lg">Free Shipping</p>
            <p className="text-sm text-gray-600">Order above $200</p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <img
              src={d2}
              alt="Money-back"
              className="w-16 h-16 object-contain"
            />
            <p className="font-semibold text-lg">Money-back</p>
            <p className="text-sm text-gray-600">30 days guarantee</p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <img
              src={d3}
              alt="Secure Payments"
              className="w-16 h-16 object-contain"
            />
            <p className="font-semibold text-lg">Secure Payments</p>
            <p className="text-sm text-gray-600">Secured by Stripe</p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <img
              src={d4}
              alt="24/7 Support"
              className="w-16 h-16 object-contain"
            />
            <p className="font-semibold text-lg">24/7 Support</p>
            <p className="text-sm text-gray-600">Phone and Email support</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Winter;
