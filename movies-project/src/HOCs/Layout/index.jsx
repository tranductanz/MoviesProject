import { Box, Typography } from '@material-ui/core';
import React from 'react';
import Header from '../../components/Header';

const Layout = (props) => {
    return (
        <Box>
            {/* //! FOOTER */}
            <Header fetchMovies={props.fetchMovies} />
            {props.children}
            <Box
                marginTop="30px"
                paddingY="20px"
                bgcolor="#000000"
                color="#ffffff"
                textAlign="center" >
                <Typography variant="h5" align="center">
                    Footer
                </Typography>
            </Box>
        </Box>
    );
};

export default Layout;