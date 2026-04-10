import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import TopBar from '../components/TopBar';
import { ALL_PRODUCTS } from '../data/products';

import categoryWomen from '../assets/images/category-women.jpg';
import categoryMen from '../assets/images/category-men.jpg';
import categoryKids from '../assets/images/category-kids.jpg';

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <TopBar />
      <Cart />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#112950] uppercase tracking-wide inline-block relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#fca120] after:mx-auto after:mt-3">
            Sản Phẩm Mới
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {ALL_PRODUCTS.slice(0, 8).map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="border-2 border-[#112950] text-[#112950] px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-[#112950] hover:text-white transition-colors">
            Xem tất cả
          </button>
        </div>
      </div>
      
      {/* Dynamic Category Section */}
      <div className="bg-[#fcfaf5] py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#112950] uppercase tracking-wider inline-block relative after:content-[''] after:block after:w-16 after:h-1.5 after:bg-[#fca120] after:mx-auto after:mt-3">
              Mua Sắm Theo Danh Mục
            </h2>
            <p className="text-gray-500 mt-4 font-medium text-lg">Tìm kiếm phong cách riêng của bạn qua những bộ sưu tập nổi bật</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Link to="/category/nữ" className="relative group rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[550px] shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src={categoryWomen} 
                alt="Thời trang Nữ" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112950]/90 via-[#112950]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-8 left-8 right-8 text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl md:text-2xl lg:text-3xl font-black mb-3 uppercase tracking-widest drop-shadow-lg">Nữ Giới</h3>
                <span className="inline-block bg-white text-[#112950] px-8 py-3 rounded-full font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-[#fca120] hover:text-white">KHÁM PHÁ NGAY</span>
              </div>
            </Link>
            
            <Link to="/category/nam" className="relative group rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[550px] shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src={categoryMen} 
                alt="Thời trang Nam" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112950]/90 via-[#112950]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-8 left-8 right-8 text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl md:text-2xl lg:text-3xl font-black mb-3 uppercase tracking-widest drop-shadow-lg">Nam Giới</h3>
                <span className="inline-block bg-white text-[#112950] px-8 py-3 rounded-full font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-[#fca120] hover:text-white">KHÁM PHÁ NGAY</span>
              </div>
            </Link>

            <Link to="/category/trẻ em" className="relative group rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[550px] shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src={categoryKids} 
                alt="Thời trang Trẻ em" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112950]/90 via-[#112950]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-8 left-8 right-8 text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl md:text-2xl lg:text-3xl font-black mb-3 uppercase tracking-widest drop-shadow-lg">Trẻ Em</h3>
                <span className="inline-block bg-white text-[#112950] px-8 py-3 rounded-full font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-[#fca120] hover:text-white">KHÁM PHÁ NGAY</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
