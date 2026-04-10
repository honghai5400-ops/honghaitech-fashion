import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart, removeFromCart, updateQuantity } from '../store/slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state) => state.cart);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-[#112950]/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => dispatch(toggleCart())}
      ></div>
      <div className="fixed top-0 right-0 h-full w-[420px] max-w-[100vw] bg-[#f8fafc] shadow-2xl z-50 flex flex-col transform transition-transform duration-500 ease-in-out">
        <div className="p-5 bg-white border-b border-gray-100 flex justify-between items-center text-[#112950] shadow-sm">
          <h2 className="text-xl font-black font-outfit uppercase tracking-widest flex items-center gap-2">
            Giỏ Hàng <span className="bg-[#112950] text-[#fca120] text-xs px-2 py-0.5 rounded-full">{items.length}</span>
          </h2>
          <button onClick={() => dispatch(toggleCart())} className="hover:text-[#fca120] hover:rotate-90 transition-all duration-300 bg-gray-50 p-1.5 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <p>Giỏ hàng của bạn đang trống.</p>
              <button 
                className="mt-4 bg-[#fca120] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#e08f1c]"
                onClick={() => dispatch(toggleCart())}
              >
                TIẾP TỤC MUA SẮM
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 border-b pb-4">
                  <img src={item.image} alt={item.name} className="w-24 h-32 object-cover rounded-md" />
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-sm font-medium text-[#112950] line-clamp-2">{item.name}</h3>
                    <p className="text-[#fca120] font-bold mt-1">
                      {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                    </p>
                    <div className="flex justify-between items-center mt-auto">
                      <div className="flex items-center gap-2 border rounded-md">
                        <button 
                          className="px-2 py-0.5 hover:bg-gray-100"
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                        >-</button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <button 
                          className="px-2 py-0.5 hover:bg-gray-100"
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                        >+</button>
                      </div>
                      <button 
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {items.length > 0 && (
          <div className="p-4 border-t bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-[#112950]">TỔNG CỘNG:</span>
              <span className="font-bold text-lg text-[#fca120]">
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}
              </span>
            </div>
            <button className="w-full bg-[#112950] text-white py-3 rounded-full font-bold uppercase tracking-wider hover:bg-[#0a1a36] transition-colors">
              THANH TOÁN
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
