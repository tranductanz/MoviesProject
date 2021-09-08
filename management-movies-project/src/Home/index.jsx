import axios from 'axios';
import React, { Fragment, memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import UserItem from '../components/UserItem';
import Login from '../Login';
import { createAction } from '../store/action';
import { actionType } from '../store/action/type';

const Home = (props) => {
    const dispatch = useDispatch();
    const fetchUsers = useCallback(async (index) => {
        try {
            const res = await axios({
                url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang",
                method: "GET",
                params: {
                    MaNhom: 'GP01',
                    soTrang: index,
                    soPhanTuTrenTrang: 20,
                }
            })
            dispatch(createAction(actionType.SET_USER_LIST, res.data))
        } catch (err) {
            console.log(err);
        }
    }, [])
    const users = useSelector((state) => {
        return state.userList;
    })
    const userItem = users.userList.map((item) => {
        return item.content;
    });
    const currentPage = userItem.find((item) => {
        return item.currentPage;
    })
    useEffect(() => {
        fetchUsers(currentPage);
    }, [dispatch])



    return (
        <div>
            <Fragment>
                <Header />
                {userItem.map((item, index) => {
                    return (
                        <UserItem fetchUsers={fetchUsers} key={index} item={item} />
                    )
                })}
            </Fragment>
        </div>
    );
};

export default Home;