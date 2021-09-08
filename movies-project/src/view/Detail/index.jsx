import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header'
import Loader from '../../Loader';
import detailMovie from '../../store/action/detail';
import ReactLoading from 'react-loading';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import Layout from '../../HOCs/Layout';
const Detail = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const detailId = props.match.params.id;
        dispatch(detailMovie(detailId));
    }, []);
    const detail = useSelector((state) => {
        return state.movieDetail.detail;
    })

    const [done, setDone] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then((response) => response.json())
                .then((json) => {
                    setDone(true);
                });
        }, 2000)
    }, [])

    return (
        <div>

            {detail.map((item) => {
                console.log(item);
                const { biDanh, tenPhim, hinhAnh, lichChieu, moTa } = item;
                const list = lichChieu.map((item) => {
                    return item.thongTinRap.maCumRap

                })
                const filterList = [...new Set(list)];
                console.log(filterList);
                return (
                    <div>
                        {!done ? <Box
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: `translate(-50%, -50%)`


                            }}>
                            <ReactLoading
                                type={"bubbles"}
                                color={"#ff4081"}
                                height={150}
                                width={200} />
                        </Box> :
                            <Layout>
                                <Container>
                                    <Box style={{ textAlign: "center", marginBottom: 10 }}>
                                        <Typography variant="h4">Nội dung</Typography>
                                        <Typography variant="h5">
                                            {moTa}
                                        </Typography>
                                    </Box>
                                    <Grid style={{ marginTop: 20 }} container spacing={2}>
                                        <Grid item xs={7}>
                                            <img
                                                style={{
                                                    width: "100%",
                                                    height: 700,
                                                }}
                                                src={hinhAnh} alt={biDanh} />
                                        </Grid>
                                        <Grid item xs={5}>
                                            <Typography variant="h3">{tenPhim}</Typography>
                                            <h2>Lịch chiếu theo rạp</h2>
                                            {filterList.map((item) => {
                                                return (
                                                    <Button style={{ margin: 10, marginRight: 20 }} variant="contained" color="secondary">
                                                        <Typography variant="h5">{item}</Typography>
                                                    </Button>
                                                )
                                            })}
                                        </Grid>

                                    </Grid>
                                </Container>
                            </Layout>

                        }
                    </div>
                )
            })}
        </div>
    )
}
export default memo(Detail);