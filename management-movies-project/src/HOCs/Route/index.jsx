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
export const AuthRoute = createRoute(() => !localStorage.getItem("login"));
export const PrivateRoute = createRoute(() => localStorage.getItem("login"));