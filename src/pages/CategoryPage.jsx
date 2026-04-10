import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { ALL_PRODUCTS } from '../data/products';
import { ChevronRight, Filter } from 'lucide-react';

import catWomen from '../assets/images/category-women.jpg';
import catMen from '../assets/images/category-men.jpg';
import catKids from '../assets/images/category-kids.jpg';
import catAccessories from '../assets/images/category-accessories.jpg';

const CategoryPage = () => {
  const { categoryName } = useParams();
  
  const decodedCategory = decodeURIComponent(categoryName);
  
  // Filter products by category or department based on the URL parameter
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(product => 
      product.category.toLowerCase() === decodedCategory.toLowerCase() || 
      product.department.toLowerCase() === decodedCategory.toLowerCase()
    );
  }, [decodedCategory]);

  // Map categories to specialized high-quality banners
  const categoryBanners = {
    'nữ': catWomen,
    'nam': catMen,
    'trẻ em': catKids,
    'default': catAccessories
  };

  const bannerImg = categoryBanners[decodedCategory.toLowerCase()] || categoryBanners.default;

  return (
    <div className="bg-[#fcfaf5] min-h-screen pb-16">
      
      {/* Category Hero Banner */}
      <div className="relative h-48 md:h-[350px] w-full overflow-hidden">
        <img 
          src={bannerImg} 
          alt={decodedCategory} 
          className="w-full h-full object-cover object-center animate-pulse duration-1000"
          onLoad={(e) => e.target.classList.remove('animate-pulse')}
        />
        <div className="absolute inset-0 bg-[#112950] mix-blend-multiply opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest drop-shadow-2xl">
            T.TRANG {decodedCategory}
          </h1>
          <p className="text-white/90 font-medium text-sm md:text-lg max-w-xl mx-auto drop-shadow-md text-center mt-3 h-0 md:h-auto overflow-hidden opacity-0 md:opacity-100">
            Tự tin khởi tạo phong cách đích thực. Trải nghiệm thiết kế đón đầu xu hướng thời trang ngay hôm nay.
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100 shadow-sm sticky top-[72px] z-30">
        <div className="container mx-auto px-4 py-3 flex items-center gap-2 text-sm text-gray-500 font-medium">
          <Link to="/" className="hover:text-[#fca120] transition-colors">Trang chủ</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-[#112950] font-bold capitalize">{decodedCategory.toLowerCase()}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="w-full md:w-auto">
            <h2 className="text-2xl font-bold text-[#112950] capitalize flex items-baseline gap-3">
              MỚI NHẤT
              <span className="text-gray-400 text-sm font-normal">({filteredProducts.length} sản phẩm)</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            {['Khuyến mãi', 'Áo khoác', 'Áo thun', 'Sơ mi', 'Quần Jeans'].map(tag => (
              <button key={tag} className="whitespace-nowrap px-4 py-1.5 rounded-full border border-gray-200 bg-white text-gray-700 hover:border-[#112950] hover:bg-[#112950] hover:text-white transition-all font-medium text-[13px] shadow-sm">
                {tag}
              </button>
            ))}
            <button className="whitespace-nowrap flex items-center justify-center gap-2 bg-[#112950] text-white border border-[#112950] rounded-full px-5 py-1.5 text-[13px] font-semibold hover:bg-[#fca120] hover:border-[#fca120] transition-all ml-auto md:ml-2 shadow-md">
              <Filter className="w-3.5 h-3.5" />
              BỘ LỌC
            </button>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-400 mb-2">Chưa có sản phẩm nào</h2>
            <p className="text-gray-500 mb-6">Xin lỗi, hiện tại không có sản phẩm nào thuộc danh mục này.</p>
            <Link to="/" className="inline-block bg-[#112950] text-white px-8 py-3 rounded uppercase font-bold hover:bg-[#fca120] transition-colors duration-300">
              Quay lại mua sắm
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
