import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, ArrowUpRight, ChevronDown, Store, Tag, X, Shirt, Gift, FileText } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../store/slices/cartSlice';

const MenuColumn = ({ title, items, onClose }) => (
  <div className="border-r border-dashed border-gray-200 pr-8 last:border-r-0 last:pr-0">
    <Link to={`/category/${encodeURIComponent(title)}`} onClick={onClose} className="font-bold border-b border-gray-100 pb-2 mb-4 flex items-center justify-between text-gray-900 group cursor-pointer hover:text-[#fca120] text-[15px]">
      {title} <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#fca120]" />
    </Link>
    <ul className="space-y-2">
       {items.map((item, idx) => (
         <li key={idx}>
           <Link to={`/category/${encodeURIComponent(item.name)}`} onClick={onClose} className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 py-1.5 px-2 rounded-lg -mx-2 transition-colors">
              <div className="flex items-center gap-3">
                 <img src={item.img} alt={item.name} className="w-10 h-10 rounded-full object-cover bg-gray-100" />
                 <span className="text-[14px] text-gray-700 group-hover:text-black group-hover:font-medium">{item.name}</span>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-transform group-hover:-rotate-90" />
           </Link>
         </li>
       ))}
    </ul>
  </div>
);

const Navbar = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Closed by default

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Row: Logo, Nav, Search, Cart, Login */}
      <div className="container mx-auto px-4 lg:px-8 py-3 flex items-center gap-8">
        <div className="flex-shrink-0">
          <Link to="/" className="inline-block pb-1">
             <img src="/favicon.svg" alt="Honghaitech Logo" className="h-10 w-auto" />
          </Link>
        </div>
        
        {/* Main Categories Nav */}
        <nav className="hidden lg:flex items-center gap-6 font-bold text-[14px] text-[#112950]">
          <Link to="/category/nam" className="hover:text-[#fca120] transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#fca120] after:scale-x-0 hover:after:scale-x-100 after:transition-transform">NAM</Link>
          <Link to="/category/nữ" className="hover:text-[#fca120] transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#fca120] after:scale-x-0 hover:after:scale-x-100 after:transition-transform">NỮ</Link>
          <Link to="/category/trẻ em" className="hover:text-[#fca120] transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#fca120] after:scale-x-0 hover:after:scale-x-100 after:transition-transform">TRẺ EM</Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="flex items-center gap-1 hover:text-[#fca120] transition-colors py-2 group"
          >
            DANH MỤC <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMenuOpen ? 'rotate-180 text-[#fca120]' : 'group-hover:rotate-180'}`} />
          </button>
        </nav>

        <div className="flex-1 relative max-w-sm ml-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Bạn tìm gì hôm nay?"
            className="w-full border border-gray-200 bg-gray-50/80 hover:bg-gray-50 rounded-full py-2 pl-10 pr-4 text-sm outline-none focus:border-gray-300 focus:bg-white transition-colors"
          />
        </div>

        <div className="flex-shrink-0 flex items-center justify-end gap-5 text-gray-700">
          <button onClick={() => dispatch(toggleCart())} className="flex items-center gap-1 hover:text-[#fca120] transition-colors relative">
            <ShoppingBag className="w-6 h-6 text-gray-800" style={{ fill: 'transparent', strokeWidth: 1.5 }} />
            {cartCount > 0 && <span className="absolute -top-1 -right-2 bg-[#fca120] text-white text-[11px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-sm">{cartCount}</span>}
          </button>
          <button className="flex items-center gap-1 hover:text-[#fca120] transition-colors">
            <User className="w-6 h-6 text-gray-800" style={{ fill: 'transparent', strokeWidth: 1.5 }} />
          </button>
        </div>
      </div>

      {/* Pills Row */}
      <div className="container mx-auto px-4 lg:px-8 pb-3 pt-1 flex items-center justify-center gap-4 overflow-x-auto">
         <button className="whitespace-nowrap bg-gray-50 hover:bg-gray-100 text-gray-800 text-[13px] font-semibold py-2 px-5 rounded-full flex items-center gap-2 border border-transparent hover:border-gray-200 transition-colors">
           <Shirt className="w-3.5 h-3.5 text-[#112950]" /> BST THE NEW T-MATE
         </button>
         <button className="whitespace-nowrap bg-gray-50 hover:bg-gray-100 text-gray-800 text-[13px] font-semibold py-2 px-5 rounded-full flex items-center gap-2 border border-transparent hover:border-gray-200 transition-colors">
           <Store className="w-3.5 h-3.5 text-[#112950]" /> CỬA HÀNG
         </button>
         <button className="whitespace-nowrap bg-gray-50 hover:bg-gray-100 text-gray-800 text-[13px] font-semibold py-2 px-5 rounded-full flex items-center gap-2 border border-transparent hover:border-gray-200 transition-colors">
           <FileText className="w-3.5 h-3.5 text-[#112950]" /> TIN TỨC
         </button>
         <button className="whitespace-nowrap bg-gray-50 hover:bg-gray-100 text-gray-800 text-[13px] font-semibold py-2 px-5 rounded-full flex items-center gap-2 border border-transparent hover:border-gray-200 transition-colors">
           <Gift className="w-3.5 h-3.5 text-[#112950]" /> MỚI VỀ
         </button>
         <button className="whitespace-nowrap bg-gray-50 hover:bg-gray-100 text-gray-800 text-[13px] font-semibold py-2 px-5 rounded-full flex items-center gap-2 border border-transparent hover:border-gray-200 transition-colors">
           <Tag className="w-3.5 h-3.5 text-[#112950]" /> ƯU ĐÃI <span className="bg-[#fc8800] text-white rounded-[4px] px-1.5 ml-1 text-[11px] font-bold">-50%</span>
         </button>
         <button className="whitespace-nowrap bg-gray-50 hover:bg-gray-100 text-gray-800 text-[13px] font-semibold py-2 px-5 rounded-full flex items-center gap-2 border border-transparent hover:border-gray-200 transition-colors">
           <Shirt className="w-3.5 h-3.5 text-[#112950]" /> ĐỒNG PHỤC
         </button>
      </div>

      {/* Mega Menu Overlay */}
      <div 
        className={`fixed inset-0 top-[125px] bg-black/30 z-40 transition-all duration-300 backdrop-blur-[1px] ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`} 
        onClick={() => setIsMenuOpen(false)}
      ></div>
      
      <div className={`absolute top-full left-0 w-full bg-white z-50 shadow-2xl border-t border-gray-100 pt-8 pb-16 transition-all duration-300 transform origin-top ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}`}>
         <div className="container mx-auto px-4 lg:px-8 grid grid-cols-4 gap-8">
            <MenuColumn title="NAM" onClose={() => setIsMenuOpen(false)} items={[
              {name: 'Áo khoác nam', img: 'https://images.unsplash.com/photo-1516826957135-7331811a5ebf?q=80&w=100&auto=format&fit=crop'},
              {name: 'Áo nam', img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=100&auto=format&fit=crop'},
              {name: 'Quần nam', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=100&auto=format&fit=crop'},
              {name: 'Đồ thể thao nam', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=100&auto=format&fit=crop'},
              {name: 'Đồ mặc trong & Đồ lót nam', img: 'https://images.unsplash.com/photo-1528228377194-2f0ca33323a1?q=80&w=100&auto=format&fit=crop'},
              {name: 'Đồ bộ nam', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=100&auto=format&fit=crop'},
            ]} />
            
            <MenuColumn title="NỮ" onClose={() => setIsMenuOpen(false)} items={[
              {name: 'Áo khoác nữ', img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=100&auto=format&fit=crop'},
              {name: 'Áo nữ', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=100&auto=format&fit=crop'},
              {name: 'Quần nữ', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=100&auto=format&fit=crop'},
              {name: 'Đồ thể thao nữ', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=100&auto=format&fit=crop'},
              {name: 'Đầm và chân váy nữ', img: 'https://images.unsplash.com/photo-1583496661160-c588c443c983?q=80&w=100&auto=format&fit=crop'},
              {name: 'Đồ bộ nữ', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=100&auto=format&fit=crop'},
            ]} />

            <MenuColumn title="TRẺ EM" onClose={() => setIsMenuOpen(false)} items={[
              {name: 'Áo khoác trẻ em', img: 'https://images.unsplash.com/photo-1519238263530-99abad672f58?q=80&w=100&auto=format&fit=crop'},
              {name: 'Áo trẻ em', img: 'https://images.unsplash.com/photo-1519238263530-99abad672f58?q=80&w=100&auto=format&fit=crop'},
              {name: 'Quần trẻ em', img: 'https://images.unsplash.com/photo-1519238263530-99abad672f58?q=80&w=100&auto=format&fit=crop'},
              {name: 'Đồ bộ trẻ em', img: 'https://images.unsplash.com/photo-1519238263530-99abad672f58?q=80&w=100&auto=format&fit=crop'},
              {name: 'Đồ mặc trong trẻ em', img: 'https://images.unsplash.com/photo-1519238263530-99abad672f58?q=80&w=100&auto=format&fit=crop'},
              {name: 'Đầm và chân váy bé gái', img: 'https://images.unsplash.com/photo-1519238263530-99abad672f58?q=80&w=100&auto=format&fit=crop'},
            ]} />

            <div className="pl-4">
              <h3 className="font-bold text-gray-900 mb-5 whitespace-nowrap text-[15px] tracking-wide">BỘ SƯU TẬP</h3>
              <div className="flex flex-col gap-6">
                 <div className="group cursor-pointer">
                   <div className="rounded-xl overflow-hidden aspect-[21/9] bg-gray-100 mb-2.5">
                     <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   </div>
                   <p className="text-[13px] uppercase font-bold text-gray-800">BST THE NEW T-MATE</p>
                 </div>
                 <div className="group cursor-pointer">
                   <div className="rounded-xl overflow-hidden aspect-[21/9] bg-gray-100 mb-2.5">
                     <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   </div>
                   <p className="text-[13px] uppercase font-bold text-gray-800">BST YÊN YÊU</p>
                 </div>
              </div>
            </div>
         </div>
         
         {/* Floating Close Button */}
         <div className="absolute left-1/2 -bottom-5 -translate-x-1/2 z-50">
           <button onClick={() => setIsMenuOpen(false)} className="bg-white hover:bg-gray-50 border shadow-[0_4px_12px_rgba(0,0,0,0.15)] text-gray-800 rounded-full px-8 py-2.5 flex items-center justify-center gap-2 text-sm font-semibold transition-colors">
              <X className="w-4 h-4" />
              Đóng
           </button>
         </div>
      </div>
    </header>
  );
};

export default Navbar;
