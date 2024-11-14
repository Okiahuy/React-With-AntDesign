//src/services/bookServiceFetch.js
const API_URL = 'http://localhost:5084/api/Book'; 

const user = JSON.parse(localStorage.getItem('user'));

if (user) {
    const Token = user.token; 
    console.log('Token:', Token); 
} else {
    console.log('Không có người dùng đăng nhập.');
}

export const fetchBooks = async () => {
    const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
             'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}`
             },
         });
        const data = await response.json();
        return data.data; 
};

export const addBook = async (book) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
             'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}`
             },
        body: JSON.stringify(book),
    });
    return response.ok;
};

export const updateBook = async (id, book) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
         },
        body: JSON.stringify(book),
    });
    return response.ok;
};

export const deleteBook = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
         },
    });
    return response.ok;
};

export const searchBooks = async (name) => {
    const response = await fetch(`${API_URL}/search?name=${name}`);
    const data = await response.json();
    return data.data;
};
