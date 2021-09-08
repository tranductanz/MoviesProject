import { Button, Container, TextField } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import Header from '../../components/Header'
import { withStyles } from '@material-ui/styles'
import styles from './style';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
const SignUp = (props) => {
    const { formInput } = props.classes

    // const [inputValues, setInputValues] = useState({
    //     taiKhoan: '',
    //     matKhau: '',
    //     hoTen: '',
    //     email: '',
    //     soDT: '',
    //     maNhom: "GP01",
    // });

    // const handleChange = (event) => {
    //     setInputValues({
    //         ...inputValues,
    //         [event.target.name]: event.target.value
    //     })
    // }
    let schema = yup.object().shape({
        taiKhoan: yup.string().required("** Username is Required ! "),
        matKhau: yup.string().required("** Password is Required ! "),
        hoTen: yup.string().required("** FullName is Required ! "),
        email: yup.string().required("** Email is Required ! ").email("** Email is invalid, please try again"),
        soDT: yup
            .string()
            .required("** Phone number is Required ! ")
            .matches(/^[0-9]+$/g, "Phone must be number !")
    });
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDT: '',
            maNhom: "GP01",
        },
        validationSchema: schema,
        validateOnMount: true,
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        //! cho tất cả cùng hiện lỗi
        formik.setTouched({
            taiKhoan: true,
            matKhau: true,
            hoTen: true,
            email: true,
            soDT: true,
        })
        if (!formik.isValid) {
            return;
        }
        //! REGISTER
        try {
            const res = await axios({
                url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangKy",
                method: "POST",
                data: formik.values,
            })
            console.log(res);
            props.history.push('/signin');
        }
        catch (err) {
            const obj = { ...err }
            console.log(obj);
        }
    }
    return (
        <div>
            <Header />
            <Fragment>
                <Container maxWidth="sm">
                    <h1>Đăng Ký</h1>
                    {/* //! đây là sự kiện diễn ra khi USER "ENTER" hoặc nhấn vào BUTTON */}
                    <form onSubmit={handleSubmit}>
                        <div className={formInput}>
                            <TextField
                                //set value để đưa giá trị của state hiện lên trên input
                                //! chính là cái state muốn chỉnh sửa riêng
                                fullWidth
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.taiKhoan}
                                type="input"
                                name="taiKhoan"
                                label="Tài khoản"
                                variant="outlined"
                            />
                            {formik.touched.taiKhoan && <p style={{ color: 'red' }}>{formik.errors.taiKhoan}</p>}
                        </div>
                        <div className={formInput}>
                            <TextField
                                type="password"
                                name="matKhau"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.matKhau}
                                fullWidth label="Mật khẩu"
                                variant="outlined" />
                            {formik.touched.matKhau && <p style={{ color: 'red' }}>{formik.errors.matKhau}</p>}
                        </div>
                        <div className={formInput}>
                            <TextField
                                name="hoTen"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.hoTen}
                                fullWidth label="Họ Tên"
                                variant="outlined" />
                            {formik.touched.hoTen && <p style={{ color: 'red' }}>{formik.errors.hoTen}</p>}
                        </div>
                        <div className={formInput}>
                            <TextField
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                fullWidth label="Email"
                                variant="outlined" />
                            {formik.touched.email && <p style={{ color: 'red' }}>{formik.errors.email}</p>}
                        </div>
                        <div className={formInput}>
                            <TextField
                                name="soDT"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.soDT}
                                fullWidth label="Số ĐT"
                                variant="outlined" />
                            {formik.touched.soDT && <p style={{ color: 'red' }}>{formik.errors.soDT}</p>}
                        </div>
                        <div>
                            {/* //bình thường button có type button
                            //nhưng khi ở from thì là submit */}
                            {/* //! nếu muốn nhấn để gởi cái gì đó, thì không dùng onClick */}
                            <Button
                                type="submit" variant="contained" color="primary">
                                Đăng Ký
                            </Button>
                        </div>
                    </form>
                </Container>
            </Fragment>
            );
        </div>
    )
}
export default withStyles(styles)(SignUp);