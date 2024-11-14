// src/components/Book/BookManager.js
import React, { useState, useEffect } from 'react';
import { Button, Input, message } from 'antd';
import BookList from './BookList'; 
import BookForm from './BookForm';

import bookServiceAxios from '../../../services/bookServiceAxios';

const BookManager = () => {
    
    const [book, setBooks] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingBook, setEditingBook] = useState(null);
    useEffect(() => {
        loadBook();
    }, []);

    const loadBook = async () => {
        try {
            const data = await bookServiceAxios.getBooks();
            setBooks(data.data);
        } catch {
            message.error('Có lỗi xảy ra khi tải Book!');
        }
    };
    const handleAddEditBook = async (values) => {
        try {
            if (editingBook) {
                await bookServiceAxios.updateBook(editingBook.id, values);
                message.success('Cập nhật Book thành công');
            } else {
                await bookServiceAxios.addBook(values);
                message.success('Thêm Book thành công');
            }
            loadBook();
            setIsModalVisible(false);
        } catch {
            message.error('Có lỗi xảy ra khi thêm/sửa Book!');
        }
    };

    const handleDeleteBook = async (id) => {
        try {
            await bookServiceAxios.deleteBook(id);
            message.success('Xóa Book thành công');
            loadBook();
        } catch (error) {
            const errorMessage = error.message || 'Có lỗi xảy ra khi xóa danh mục!';
            message.error(errorMessage);
        }
    };

    const handleSearchBook = async (name) => {
        try {
            const data = await bookServiceAxios.searchBooks(name);
            setBooks(data);
        } catch {
            message.error('Có lỗi xảy ra khi tìm kiếm Book!');
        }
    };

    const openModal = (Book = null) => {
        setEditingBook(Book);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setEditingBook(null);
    };

    return (
        <div>
            <Input.Search
                placeholder="Tìm kiếm Book..."
                onSearch={handleSearchBook}
                style={{ width: 300, margin: '10px 0' }}
            /> <br></br>
            <Button style={{ marginBottom: '10px', backgroundColor: 'crimson', color: 'white' }} onClick={() => openModal()}>
                Thêm mới
            </Button>
            
            <BookList
                book={book}
                onEdit={openModal}
                onDelete={handleDeleteBook}
            />

            <BookForm
                visible={isModalVisible}
                onOk={(values) => handleAddEditBook(values)}
                onCancel={closeModal}
                initialValues={editingBook}
            />
        </div>
    );
};

export default BookManager;