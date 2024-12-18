import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '@/hooks/useFetch';

const Detail = () => {
  const { id } = useParams();
  const { data } = useFetch(`/product/get/${id}`);

  if (!data) {
    return (
      <div className="container text-center py-10">
        <p>Loading...</p>
      </div>
    );
  }

  const { name, image, description, price, discountPrice, stock, product_category} = data;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <img
            src={image}
            alt={name}
            className="w-full max-w-lg object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">{name}</h1>

          <p className="text-gray-600 font-medium">Category: {product_category?.name}</p>

          <p className="text-gray-600">{description}</p>


          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold text-blue-600">
              ${discountPrice || price}
            </p>
            {discountPrice && (
              <p className="text-gray-500 line-through">${price}</p>
            )}
          </div>


          <p className={`font-medium ${stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {stock > 0 ? `In Stock (${stock} available)` : 'Out of Stock'}
          </p>


          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
