import React from 'react';
import BookManager from '../../components/AdminComponent/BookAxios/BookManager';

const BookAxios = () => {
    return (
        <div>
          <h1>Danh Sách Book khi gọi Bằng Axios</h1>
            <BookManager /> {/* Hiển thị danh sách */}
        </div>
      );
  };
  
  export default BookAxios; // Export mặc định