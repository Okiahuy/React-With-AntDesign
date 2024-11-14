import React from 'react';
import BookManager from '../../components/AdminComponent/BookFetch/BookManager';

const BookFetch = () => {
    return (
        <div>
          <h1>Danh Sách Book khi gọi bằng Fetch</h1>
            <BookManager /> {/* Hiển thị danh sách */}
        </div>
      );
  };
  
export default BookFetch; // Export mặc định