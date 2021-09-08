import axios from "axios";
import { createAction } from ".";
import { actionType } from "./type";

export const signInn = (userLogin, callback) => {
    return async (dispatch) => {
        try {
            const res = await axios({
                url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangNhap",
                method: "POST",
                data: userLogin,
            })
            console.log(res);
            dispatch(createAction(actionType.SET_ME, res.data));
            localStorage.setItem('login', res.data.content.accessToken);
            callback();
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const fetchMe = async (dispatch) => {
    try {
        const res = await axios({
            url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("login"),
            }
        })
        dispatch(createAction(actionType.SET_ME, res.data));
    }
    catch (err) {
        console.log(err);
    }
}
