import React from 'react';
import url1 from "@/assets/images/cg1.png";
import url2 from "@/assets/images/cg2.png";
import url3 from "@/assets/images/cg3.png";
import url4 from "@/assets/images/cg4.png";
import url5 from "@/assets/images/cg5.png";
import url6 from "@/assets/images/cg6.png";

const urls = [url1, url2, url3, url4, url5, url6];

const Category = () => {
  const categories = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
    { id: 4, name: "Category 4" },
    { id: 5, name: "Category 5" },
    { id: 6, name: "Category 6" },
  ];

  return (
    <div className="container">
      <p className="text-center mb-12 text-[40px] font-semibold">Shop by Categories</p>
      <div className="flex flex-wrap gap-6 justify-center">
        {categories.map((item, index) => (
          <div key={item.id} className="text-center">
            <img
              src={urls[index % urls.length]} 
              className="w-[167px] h-[167px] rounded-full"
              alt={item.name}
            />
            <p className="mt-3 font-semibold text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
