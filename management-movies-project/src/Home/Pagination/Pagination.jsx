
import { Pagination } from '@material-ui/lab';
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';




const PaginationCount = (props) => {
    const users = useSelector((state) => {
        return state.userList;
    })
    const userItem = users.userList.map((item) => {
        return item.content;
    });
    const totalPage = userItem.find((item) => {
        return item.totalPages;
    })
    const [, forceRender] = useState({});
    const [page, setPage] = React.useState(0);
    const handleChange = async (event, value) => {
        setPage(props.fetchUsers(value));
        forceRender(value);
    };
    const currentPage = userItem.find((item) => {
        return item.currentPage;
    })



    useEffect(() => {
        props.fetchUsers(currentPage.currentPage)

    }, [setPage])
    return (
        <Fragment>
            <Pagination
                onChange={handleChange}
                size="large"
                count={totalPage.totalPages}
                color="secondary" />
        </Fragment>
    )

}
export default PaginationCount;
