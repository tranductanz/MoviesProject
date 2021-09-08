import React, { Fragment } from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Menu,
    MenuItem
} from '@material-ui/core';
import ViewListIcon from '@material-ui/icons/ViewList';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './styles';
import { useSelector } from 'react-redux';

const Header = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const me = useSelector(state => {
        return state.me
    })
    const userName = useSelector(state => {
        return state.me;
    })

    const classes = useStyles();
    const { navLink, title } = classes
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

                <Link className={title} to="/">
                    <Button

                        color="primary"
                        variant="contained">
                        PhimCũ.com Management
                    </Button>
                </Link>
                <Link style={{ textDecoration: 'none', marginRight: 50 }} to="/addnew">
                    <Button
                        style={{ backgroundColor: ' #A5FFD6' }}
                        variant="contained">
                        ADD USER
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
                    </Fragment> : ""
                }
            </Toolbar>
        </AppBar>
    )
}

export default Header;
