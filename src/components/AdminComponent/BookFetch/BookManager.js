import React, { useState, useEffect } from 'react';
import { Button, Input, message } from 'antd';
import BookList from './BookList'; 
import BookForm from './BookForm';

import {
    fetchBooks,
    addBook,
    updateBook,
    deleteBook,
    searchBooks,
} from '../../../services/bookServiceFetch'

const BookManager = () => {
    const [book, setBooks] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingBook, setEditingBook] = useState(null);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        try {
            const data = await fetchBooks();
            setBooks(data);
        } catch {
            message.error('Có lỗi xảy ra khi tải Book!');
        }
    };

    const handleAddEditBook = async (values) => {
        try {
            if (editingBook) {
                await updateBook(editingBook.id, values);
                message.success('Cập nhật Book thành công');
            } else {
                await addBook(values);
                message.success('Thêm Book thành công');
            }
            loadBooks();
            setIsModalVisible(false);
        } catch {
            message.error('Có lỗi xảy ra khi thêm/sửa Book!');
        }
    };

    const handleDeleteBook = async (id) => {
        try {
            await deleteBook(id);
            message.success('Xóa Book thành công');
            loadBooks();
        } catch {
            message.error('Có lỗi xảy ra khi xóa Book!');
        }
    };

    const handleSearchBook = async (name) => {
        try {
            const data = await searchBooks(name);
            setBooks(data);
        } catch {
            message.error('Có lỗi xảy ra khi tìm kiếm Book!');
        }
    };

    const openModal = (book = null) => {
        setEditingBook(book);
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