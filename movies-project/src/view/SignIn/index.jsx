import { Button, Container, TextField } from '@material-ui/core'
import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import Header from '../../components/Header'
import { signInn } from '../../store/action/auth'
export default function SignIn(props) {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
    })



    const handleSetDefaultLogin = () => {
        const userLogin = {
            taiKhoan: "tantan2",
            matKhau: "123456",
        };

        formik.setValues({
            taiKhoan: userLogin.taiKhoan,
            matKhau: userLogin.matKhau,
        })


    }
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(
            signInn(formik.values, () => {
                props.history.push('/');
            })
        )
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
                                Set người dùng mặc định
                            </Button>
                        </div>
                    </form>
                </Container>
            </div>

        </div>
    )
}
