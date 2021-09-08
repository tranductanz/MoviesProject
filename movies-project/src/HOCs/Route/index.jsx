import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

//todo TẠO 1 HOC dùng chung

const createRoute = (condition) => {

    return class extends Component {
        render() {
            //truyền vào 2 tham số, thứ 1 là path, thứ 2 là component nào sẽ hiện
            const { path, component: RouteComponent, redirectPath } = this.props;
            return (
                <Route
                    path={path}
                    //! GUARD
                    render={(routeProps) => {
                        //? CÁCH NHANH NHẤT CHECK USER ĐĂNG NHẬP LÀ CHECK TOKEN
                        // ko có token thì cho vô
                        if (condition()) {
                            //todo khi viết props render HOC thì phải tự truyền props vào
                            //dùng nick name, vì không truyền đc props cho component
                            return <RouteComponent
                                history={routeProps.history}
                                match={routeProps.match}
                            //! cách viết gọn
                            // {...routeProps}
                            />
                        }
                        //! component REDIRECT từ react-router-dom
                        return <Redirect to={redirectPath} />
                    }}
                />
            );
        }
    }
}
//function return về điều kiện, vì nếu chỉ truyền điều kiện thôi
//vì nếu không sử dụng callback thì sẽ bị đụng điều kiện và lưu luôn điều kiện đó
// dẫn đến dù có đăng nhập/đăng xuất vẫn không thể về trang Home nữa
//! cần Callback vì khi nào chạy thì chỉ chạy mỗi hàm, rồi thôi
export const AuthRoute = createRoute(() => !localStorage.getItem("login"));
export const PrivateRoute = createRoute(() => localStorage.getItem("login"));