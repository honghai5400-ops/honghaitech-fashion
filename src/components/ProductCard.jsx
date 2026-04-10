import React, { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';

const ProductCard = ({ id, name, price, originalPrice, image, colors }) => {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, image }));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  return (
    <div className="bg-white group flex flex-col h-full cursor-pointer rounded-2xl p-3 border border-transparent hover:border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-4 bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
        />
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md z-10 tracking-wider">
            -{discount}%
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10 bg-gradient-to-t from-black/60 to-transparent flex justify-center">
          <button 
            onClick={(e) => { e.stopPropagation(); handleAddToCart(); }}
            className={`w-full font-bold flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300 shadow-xl ${
              isAdded ? 'bg-green-500 text-white' : 'bg-white text-[#112950] hover:bg-[#112950] hover:text-white'
            }`}
          >
            {isAdded ? <Check className="w-5 h-5 animate-[bounce_1s_ease-in-out_infinite]" /> : <ShoppingCart className="w-4 h-4" />}
            <span className="text-[13px] tracking-wide">{isAdded ? 'ĐÃ THÊM' : 'THÊM VÀO GIỎ'}</span>
          </button>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow px-1">
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-1.5 h-4 relative z-20">
            {colors && colors.map((color, index) => (
              <div 
                key={index} 
                className="w-3.5 h-3.5 rounded-full border border-gray-200 shadow-sm"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
          <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">{String(id)?.split('-')[0] || 'NEW'}</span>
        </div>
        
        <h3 className="text-[15px] font-medium text-gray-800 line-clamp-2 mb-2 flex-grow group-hover:text-[#fca120] transition-colors leading-snug">
          {name}
        </h3>
        
        <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-50">
          <span className="text-[#112950] font-bold text-lg font-outfit">
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}
          </span>
          {originalPrice && (
            <span className="text-gray-400 text-xs line-through">
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
