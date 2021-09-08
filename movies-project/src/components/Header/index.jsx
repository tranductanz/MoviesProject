import React, { Fragment, useEffect } from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    withStyles,
    Menu,
    MenuItem
} from '@material-ui/core';
import styles from './styles.js';
import ViewListIcon from '@material-ui/icons/ViewList';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles.js';
const Header = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { title, navLink, button } = classes;
    const me = useSelector(state => {
        return state.me
    })
    const userName = useSelector(state => {
        return state.me;
    })
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const history = useHistory();
    const handleLogout = () => {
        localStorage.clear();
        history.push('/');
        alert("Đã đăng xuất thành công");
    }
    return (
        <AppBar color="secondary" position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <ViewListIcon />
                </IconButton>
                {/* <NavLink className={title} to="/">
                    <Typography
                        variant="h6" >
                        PhimCũ.com
                    </Typography>
                </NavLink> */}
                <Link className={title} to="/">
                    <Button
                        color="primary"
                        variant="contained">
                        PhimCũ.com
                    </Button>
                </Link>
                {
                    me && localStorage.getItem("login") !== null ? <Fragment>
                        <Button
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            variant="contained"
                            color="primary" >
                            Hello {userName.content.taiKhoan}
                            {/* //! Fragment là components có sẵn */}
                            {/* //! dùng để bọc như 1 div lớn, nhưng không xuất hiện trên giao diện */}
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem>
                                <Link
                                    className={navLink}
                                    to="/user">
                                    My account
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Button onClick={handleLogout}>
                                    Log Out
                                </Button>
                            </MenuItem>
                        </Menu>
                    </Fragment>
                        : <Fragment>
                            <NavLink className={navLink} to="/signin">
                                <Button variant="contained" color="primary">
                                    Sign In
                                </Button>
                            </NavLink>
                            <NavLink className={navLink} to="/signup">
                                <Button variant="contained" color="primary">
                                    Sign Up
                                </Button>
                            </NavLink>
                        </Fragment>
                }

            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(Header);
