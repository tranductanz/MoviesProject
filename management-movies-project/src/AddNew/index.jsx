import { Button, Container, TextField } from '@material-ui/core';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import { createAction } from '../store/action';
import { addNewUser, signInn } from '../store/action/auth';
import { actionType } from '../store/action/type';

const AddUser = (props) => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: '',
            maLoaiNguoiDung: '',
            hoTen: '',
        },
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        //! ADD NEW
        try {
            const res = await axios({
                url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/ThemNguoiDung",
                method: "POST",
                data: formik.values,
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("login"),
                }
            })
            dispatch(createAction(actionType.ADD_NEW, res.data));
            alert("Thêm mới thành công");
        }
        catch (err) {
            const obj = { ...err }
            console.log(obj)
            alert(obj.response?.data.content);
        }
    }

    return (
        <div>
            <Header />
            <div>
                <h1 style={{ textAlign: "center" }}>Thêm mới user</h1>
                <Container maxWidth="sm">
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: 30 }}>
                            <TextField
                                //giá trị input
                                value={formik.values.taiKhoan}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="taiKhoan"
                                fullWidth label="Tài khoản"
                                variant="outlined" />
                        </div>
                        <div style={{ marginBottom: 30 }}>
                            <TextField
                                //giá trị input
                                value={formik.values.matKhau}
                                name="matKhau"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                fullWidth label="Mật khẩu"
                                variant="outlined"
                                type="password" />
                        </div>
                        <div style={{ marginBottom: 30 }}>
                            <TextField
                                //giá trị input
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="email"
                                fullWidth label="Email"
                                variant="outlined" />
                        </div>
                        <div style={{ marginBottom: 30 }}>
                            <TextField
                                //giá trị input
                                value={formik.values.soDt}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="soDt"
                                fullWidth label="Số Điện thoại"
                                variant="outlined" />
                        </div>
                        <div style={{ marginBottom: 30 }}>
                            <TextField
                                //giá trị input
                                value={formik.values.maNhom}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="maNhom"
                                fullWidth label="Mã Nhóm"
                                variant="outlined" />
                        </div>
                        <select
                            name="maLoaiNguoiDung"
                            value={formik.values.maLoaiNguoiDung}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{ display: 'block', width: 180, height: 50, textAlign: 'center', fontWeight: 700 }}
                        >
                            <option value="" label="Chọn Loại Người Dùng" />
                            <option value="QuanTri" label="Quản Trị" />
                            <option value="KhachHang" label="Khách Hàng" />
                        </select>
                        {/* <div style={{ marginBottom: 30 }}>
                            <TextField
                                //giá trị input
                                value={formik.values.maLoaiNguoiDung}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="maLoaiNguoiDung"
                                fullWidth label="Mã Loại Người Dùng"
                                variant="outlined" />
                        </div> */}
                        <div style={{ marginBottom: 30, marginTop: 20 }}>
                            <TextField

                                //giá trị input
                                value={formik.values.hoTen}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="hoTen"
                                fullWidth label="Họ và Tên"
                                variant="outlined" />
                        </div>
                        <div>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary">
                                Thêm mới user
                            </Button>
                        </div>
                    </form>
                </Container>
            </div>
        </div>
    );
};

export default AddUser;