import axios from "axios";
import { useState } from "react";
import { createAction } from ".";
import { actionType } from "./type";


export const deleteUser = (tentaikhoan) => {
    return async (dispatch) => {
        try {
            const res = await axios({
                url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/XoaNguoiDung",
                method: "DELETE",

                params: {
                    TaiKhoan: tentaikhoan,
                },
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("login"),
                },

            })
            console.log(res);
            dispatch(createAction(actionType.DELETE_USER, res.data));

            alert("Thành công");

        }
        catch (err) {
            const obj = { ...err };
            alert(obj.response?.data.message);
        }
    }

}