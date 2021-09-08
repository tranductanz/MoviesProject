import { Button, Container, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import { signInn } from '../store/action/auth';

const Login = (props) => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
    })
    const handleSetDefaultLogin = () => {
        const userLogin = {
            taiKhoan: "aaaaaaaa",
            matKhau: "123@Qwe123",
        };

        formik.setValues({
            taiKhoan: userLogin.taiKhoan,
            matKhau: userLogin.matKhau,
        })
    }

    const [isLogin, setIsLogin] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(
            signInn(
                formik.values, () => {
                    props.history.push('/');
                })
        )
        setIsLogin(true);
    }

    return (
        <div>
            <Header />
            <div>
                <h1 style={{ textAlign: "center" }}>Đăng Nhập</h1>
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

                        <div>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary">
                                Đăng Nhập
                            </Button>
                            <Button
                                // muốn bấm thì phải để type là button
                                //! vì nó sẽ ăn luôn onclick của thẻ FORM
                                // type="submit"
                                type="button"
                                onClick={handleSetDefaultLogin}
                                variant="contained"
                                color="secondary">
                                Đăng nhập với tư cách ADMIN
                            </Button>
                        </div>
                    </form>
                </Container>
            </div>
        </div>
    );
};

export default Login;