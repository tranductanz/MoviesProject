import React, { Fragment, memo, useCallback, useEffect } from 'react'
import Header from '../../components/Header'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import MovieItem from '../../components/Movies';
import { Box, Button, Card, CardActions, CardContent, Container, Grid, TablePagination, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './styles.js';
import { createAction } from '../../store/action';
import { actionType } from '../../store/action/type';
import ReactPaginate from 'react-paginate';
import Pagination from './Pagination';
import Layout from '../../HOCs/Layout';

const Home = (props) => {
    const dispatch = useDispatch();
    const fetchMovies = useCallback(async (index) => {
        try {
            const res = await axios({
                method: "GET",
                url: "http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang",
                params: {
                    maNhom: "GP01",
                    soTrang: index,
                    soPhanTuTrenTrang: 10,
                }
            })
            dispatch(createAction(actionType.SET_FETCH_QUESTION, res.data))
        }
        catch (err) {
            console.log(err);
        }
    }, [dispatch])

    useEffect(() => {
        fetchMovies(1);
    }, [fetchMovies])

    const movies = useSelector((state) => {
        return state.movieList.movies;
    })





    const { bgMint } = props.classes;

    return (
        <Box className={bgMint}>
            <Layout fetchMovies={fetchMovies}>
                <Fragment>
                    <Fragment >
                        <Typography
                            color="secondary"
                            style={{ margin: 20, fontWeight: 700 }}
                            variant="h5"
                            align="center">
                            Chào mừng bạn đến với Rạp chuyên Film lậu lớn nhất CyberSoft
                        </Typography>
                        <Container>
                            <Grid container spacing={3}>
                                {movies.map((item) => {
                                    return item.items.map((movie) => {
                                        return (
                                            <Grid key={movie.maPhim} item xs={12} sm={6} md={3}>
                                                <MovieItem item={movie} />
                                            </Grid>
                                        )
                                    });
                                })}

                            </Grid>
                            <Box
                                padding={2}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    padding: 15,
                                }}>
                                <Pagination
                                    fetchMovie={fetchMovies} />
                            </Box>
                        </Container>
                    </Fragment>
                </Fragment>
            </Layout>
        </Box>
    )
}
export default withStyles(styles)(memo(Home));