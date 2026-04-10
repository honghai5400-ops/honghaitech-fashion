import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#112950] text-white pt-12 pb-6 text-sm">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-bold text-xl mb-4 text-[#fca120]">HONGHAITECH</h3>
          <p className="text-gray-300 mb-4 whitespace-pre-line">
            “Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ hành động của mình” là sứ mệnh, là triết lý, chiến lược.. luôn cùng HONGHAITECH tiến bước.
          </p>
          <p className="text-gray-300">Hotline: 1800 2086 (Miễn phí)</p>
          <p className="text-gray-300">Mua hàng: 024 999 86 999</p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 uppercase">VỀ HONGHAITECH</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-[#fca120]">Giới thiệu</a></li>
            <li><a href="#" className="hover:text-[#fca120]">Tuyển dụng</a></li>
            <li><a href="#" className="hover:text-[#fca120]">Liên hệ</a></li>
            <li><a href="#" className="hover:text-[#fca120]">Hệ thống siêu thị</a></li>
            <li><a href="#" className="hover:text-[#fca120]">Tin tức Honghaitech</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 uppercase">HỖ TRỢ KHÁCH HÀNG</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-[#fca120]">Hướng dẫn chọn size</a></li>
            <li><a href="#" className="hover:text-[#fca120]">Chính sách khách hàng thân thiết</a></li>
            <li><a href="#" className="hover:text-[#fca120]">Chính sách đổi/trả</a></li>
            <li><a href="#" className="hover:text-[#fca120]">Chính sách bảo mật</a></li>
            <li><a href="#" className="hover:text-[#fca120]">Quy định đổi trả hàng</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 uppercase">ĐĂNG KÝ NHẬN TIN</h4>
          <p className="text-gray-300 mb-4">Đăng ký để là người đầu tiên nhận được tin khuyến mãi và các bộ sưu tập mới nhất từ HONGHAITECH.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email của bạn..." 
              className="px-4 py-2 w-full rounded-l-md text-black outline-none focus:ring-2 focus:ring-[#fca120]"
            />
            <button className="bg-[#fca120] text-white px-4 py-2 rounded-r-md font-semibold hover:bg-opacity-90">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/20 pt-6 text-center text-gray-400 text-xs">
        © 2026 HONGHAITECH. All rights reserved. Bản quyền thuộc về HONGHAITECH.
      </div>
    </footer>
  );
};

export default Footer;
