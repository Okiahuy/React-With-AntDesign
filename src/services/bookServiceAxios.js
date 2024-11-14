//src/services/bookServiceAxios.js
import axios from 'axios'
const API_URL = 'http://localhost:5084/api/Book';

const user = JSON.parse(localStorage.getItem('user')); 

if (user) {
    const Token = user.token; 
    console.log('Token:', Token); 
} else {
    console.log('Không có người dùng đăng nhập.');
}
const bookServiceAxios = {
  getBooks: async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`, 
        },
      });
      return response.data; 
    } catch (error) {
      console.error('Có lỗi xảy ra khi lấy danh sách Book:', error);
      throw error; 
    }
  },

  updateBook: async (id, updatedBook) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedBook,{
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`, 
        },
      });
      return response.data;
    } catch (error) {
      console.error('Có lỗi xảy ra khi lấy danh sách Book:', error);
      throw error; 
    }
  },
  getBookById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      console.log(`lấy Book với ID ${id}`);
      return response.data; 
    } catch (error) {
      console.error(`Có lỗi xảy ra khi lấy Book với ID ${id}:`, error);
      throw error; 
    }
  },
};

export default bookServiceAxios;
