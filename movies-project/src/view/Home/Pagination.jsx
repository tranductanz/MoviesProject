import { Box, Button, Grid } from '@material-ui/core';
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';




const Pagination = (props) => {
    const count = useSelector((state) => {
        return state.movieList.movies.map((item) => {
            return item.count
        });
    })
    const totalCount = useSelector((state) => {
        return state.movieList.movies.map((item) => {
            return item.totalCount
        });
    })
    const totalPage = useSelector((state) => {
        return state.movieList.movies.map((item) => {
            return item.totalPages
        });
    })

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCount / count); i++) {
        if (totalCount / count <= totalPage) {
            pageNumbers.push(i);
        }
    }
    const dispatch = useDispatch();
    const handleChangePage = useCallback(async (page) => {
        try {
            dispatch(props.fetchMovie(page))
        }
        catch (err) {
            console.log(err);
        }
    }, [])
    return (
        <nav>
            {pageNumbers.map((number) => {
                return (
                    <Button
                        key={number}
                        size="small"
                        onClick={() => handleChangePage(number)}
                        variant="contained" color="primary"
                    >
                        {number}
                    </Button>
                )
            })}


        </nav>
    )

}
export default Pagination;
