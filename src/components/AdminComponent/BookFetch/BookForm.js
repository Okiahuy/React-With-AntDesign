import React, { useEffect } from 'react';
import { Modal, Form, Input, Button} from 'antd';
const BookForm = ({ visible, onOk, onCancel, initialValues }) => {
    const [form] = Form.useForm();

    // Reset form khi mở modal
    useEffect(() => {
        if (visible) {
            form.resetFields();
            if (initialValues) {
                form.setFieldsValue(initialValues);
            }
        }
    }, [visible, initialValues, form]);

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();
            onOk(values); // Gọi hàm onOk khi các trường hợp đều hợp lệ
        } catch (error) {
            console.log('Validation failed:', error);
        }
    };

    return (
        <Modal
            title={initialValues ? 'Sửa Book' : 'Thêm Book'}
            visible={visible}
            onCancel={onCancel}
            footer={null} // Xóa các nút mặc định của Modal
        >
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Form.Item
                    name="title"
                    label="Tên Book"
                    rules={[
                        { required: true, message: 'Vui lòng nhập tên Book' },
                        { min: 3, message: 'Tên Book ít nhất 3 ký tự' },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="authorId"
                    label="Tác giả"
                    rules={[
                        { required: true, message: 'Vui lòng nhập tên authorId' },
                    
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="publishedYear"
                    label="Năm xuất bản"
                    rules={[
                        { required: true, message: 'Vui lòng nhập tên Năm xuất bản' },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="genre"
                    label="Thể loại"
                    rules={[
                        { required: true, message: 'Vui lòng nhập Thể loại' },
                        { min: 3, message: 'Thể loại ít nhất 3 ký tự' },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        {initialValues ? 'Cập nhật' : 'Thêm mới'}
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default BookForm;
