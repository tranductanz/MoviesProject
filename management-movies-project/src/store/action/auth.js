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
            if (res.data.content.maLoaiNguoiDung === "QuanTri") {
                dispatch(createAction(actionType.SET_ME, res.data));
                localStorage.setItem('login', res.data.content.accessToken);
                callback();
            }
            else {
                alert("Bạn không có quyền truy cập")
                window.location.reload();
            }

        }
        catch (err) {
            alert("Tài khoản hoặc Mật khẩu không đúng");
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


