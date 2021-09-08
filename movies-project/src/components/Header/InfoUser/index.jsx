import { Button, makeStyles, Typography } from '@material-ui/core';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import useStyles from '../styles';

const InfoUser = (props) => {
    const classes = useStyles();

    const { title, navLink, button } = classes;

    const userName = useSelector(state => {
        return state.me;
    })
    const { taiKhoan, hoTen, email, soDT } = userName.content;
    return (
        <Fragment>
            <div>
                <h1>Thông tin người dùng</h1>
                <Typography variant="h5">Tên tài khoản của bạn : {taiKhoan}</Typography>
                <Typography variant="h5">Họ và Tên :  {hoTen}</Typography>
                <Typography variant="h5">Email : {email}</Typography>
                <Typography variant="h5">Số Điện thoại : {soDT}</Typography>
                <Link className={navLink} to="/">
                    <Button variant="contained" color="primary">Trở về trang chủ</Button>
                </Link>
            </div>
        </Fragment>
    );
};

export default InfoUser;