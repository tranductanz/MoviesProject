import React, { Fragment, useEffect, useState } from 'react'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { createAction } from '../../store/action';
import { actionType } from '../../store/action/type';
import Loader from '../../Loader';
import SearchAppBar from '../HeaderTest';
import ReactPaginate from 'react-paginate';

const MovieItem = (props) => {



    const { maPhim, hinhAnh, tenPhim, biDanh, moTa } = props.item
    // const { maPhim, hinhAnh, biDanh, moTa, tenPhim } = props.item;
    return (
        <Fragment>
            <Card style={{ borderRadius: 15 }}>
                <CardActionArea>
                    <img style={{ height: 250, width: "100%" }} src={hinhAnh} alt={biDanh} />
                    <Box
                        style={{ height: 150, borderRadius: 15 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {tenPhim}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {moTa.substr(0, 100) + '...'}
                            </Typography>
                        </CardContent>
                    </Box>
                </CardActionArea>
                <CardActions>
                    <NavLink
                        style={{ textDecoration: "none" }}
                        to={`/detail/${maPhim}`}>

                        <Button
                            variant="contained"
                            size="small"
                            color="primary">
                            Chi Tiết
                        </Button>
                    </NavLink>
                </CardActions>
            </Card>
        </Fragment>
    )
}

export default MovieItem;
