// src/services/menuService.js
import axios from 'axios';

const API_URL = 'http://localhost:5084'; 


const user = JSON.parse(localStorage.getItem('user'));

if (user) {
    const Token = user.token; 
    console.log('Token:', Token); 
} else {
    console.log('Không có người dùng đăng nhập.');
   
}
const menuService = {
    fetchAuthors: async () => {
        try {
            const response = await axios.get(`${API_URL}/api/author`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            });
            return response.data; // Return the data directly
        } catch (error) {
            console.error('Có lỗi xảy ra khi tải danh mục:', error);
            throw error; // Ném lỗi lên để xử lý ở nơi gọi service nếu cần
        }
    },

    
};

export default menuService;