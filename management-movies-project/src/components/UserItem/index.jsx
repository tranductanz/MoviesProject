import React, { memo, useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, Button, TableHead, Typography } from '@material-ui/core';
import PaginationCount from '../../Home/Pagination/Pagination';
import { deleteUser } from '../../store/action/deleteUser';
import { useDispatch, useSelector } from 'react-redux';
import { createAction } from '../../store/action';
import { actionType } from '../../store/action/type';



const useStyles2 = makeStyles({
    table: {
        minWidth: 500,
    },
});


const CustomPaginationActionsTable = (props) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => {
        return state.userList;
    })
    const userItem = users.userList.map((item) => {
        return item.content;
    });
    const fetchUsers = props.fetchUsers;
    const classes = useStyles2();
    const [title, setValue] = React.useState(null);

    const currentPage = userItem.find((item) => {
        return item.currentPage;
    })


    const deleteUserAccount = () => {

    }

    const [edit, setEdit] = useState({
        taiKhoan: '',
        email: '',
        soDt: '',
    })
    const getInfo = () => {
        console.log(edit);
    }
    useEffect(() => {
        if (title) {
            console.log(currentPage.currentPage);
            fetchUsers(currentPage.currentPage)
            console.log(title);
            dispatch(deleteUser(title))
        }
    }, [title, deleteUser])




    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography style={{ fontWeight: 800, width: 100 }} variant="h6">
                                Số thứ tự
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography style={{ fontWeight: 800, width: 200 }} variant="h6">
                                Tên tài khoản
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography style={{ fontWeight: 800 }} variant="h6">
                                Email
                            </Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography style={{ fontWeight: 800 }} variant="h6">
                                Số điện thoại
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography style={{ fontWeight: 800 }} variant="h5">
                                Loại User
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography style={{ fontWeight: 800 }} variant="h5">
                                Tuỳ chọn
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.item.items.map((user, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell scope="row">
                                        <Box style={{ marginLeft: 40, fontWeight: 800, width: 50 }}>
                                            {index + 1}
                                        </Box>
                                    </TableCell>
                                    <TableCell
                                        align="left">
                                        {user.taiKhoan}
                                    </TableCell>
                                    <TableCell style={{ width: '30%' }} align="left">
                                        {user.email}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="left">
                                        {user.soDt}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="left">
                                        {user.maLoaiNguoiDung}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="left">
                                        <Button
                                            type="button"
                                            onClick={
                                                () => deleteUserAccount(setValue(user.taiKhoan))}
                                            variant="contained"
                                            color="secondary">
                                            X
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <Box
                            style={{
                                marginTop: 50,
                                position: 'relative',
                                top: 0,
                                left: '35%',
                                transform: `translate(50%, -50%)`,
                                width: 500,
                            }}>
                            <PaginationCount fetchUsers={fetchUsers} />
                        </Box>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

export default memo(CustomPaginationActionsTable);