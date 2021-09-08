import axios from 'axios';
import { actionType } from './type';
const detailMovie = (detailId) => {
    return async (dispatch) => {
        try {
            const res = await axios({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim",
                method: "GET",
                params: {
                    MaPhim: detailId,
                },
            });
            dispatch({
                type: actionType.SET_DETAIL,
                payload: res.data,
            })
        }
        catch (err) {
            console.log(err);
        }
    }
}
export default detailMovie;