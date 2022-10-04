/**
 * Author:          Kassi Bertrand
 * Filename:        AppBar.jsx
 * Date:            10-02-2022
 * Description:     This component is the application bar
 *                  of the admin page
 */

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ClassTwoToneIcon from '@mui/icons-material/ClassTwoTone';
import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';


function ApplicationBar() {
    //Note: An anchorEl is a prop used to set the position(i.e location) of a Menu component
    //See documentation for more infos.
    const [mainAnchorEl, setMainAnchorEl] = useState(null);
    const [mobileAnchorEl, setMobileAnchorEl] = useState(null);

    //When menu is closed "anchorEl" and "mobileAnchorEl" are "null",
    //so the Boolean constructor returns "false"
    const isMainMenuOpen = Boolean(mainAnchorEl);
    const isMobileMenuOpen = Boolean(mobileAnchorEl);

    //Following functions are called when a menu is open/closed
    const handleMainMenuOpen = event => {
        setMainAnchorEl(event.currentTarget);
    };

    const handleMainMenuClose = () => {
        setMainAnchorEl(null);
    };

    const handleMobileMenuOpen = event => {
        setMobileAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileAnchorEl(null);
    };

    //Renders Menu when view port is medium or beyond
    const mainMenuId = 'main-menu';
    const renderMainMenu = (
        <Menu
            anchorEl={mainAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mainMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMainMenuOpen} //Menu is shown when "isMenuOpen" is true
            onClose={handleMainMenuClose}
        >
            <MenuItem onClick={handleMainMenuClose}>
                <IconButton
                    size="large"
                    aria-label='Link to admin dashboard'
                    aria-haspopup="true"
                    color="inherit"
                >
                    <DashboardTwoToneIcon />
                </IconButton>
                <p>Dashboard</p>
            </MenuItem>
            <MenuItem onClick={handleMainMenuClose}>
                <IconButton
                    size='large'
                    aria-label='Link to published classes'
                    aria-haspopup="true"
                    color='inherit'
                >
                    <ClassTwoToneIcon />
                </IconButton>
                <p>Classes</p>
            </MenuItem>
            <MenuItem onClick={handleMainMenuClose}>
                <IconButton
                    size='large'
                    aria-label='Link to statistics'
                    aria-haspopup='true'
                    color='inherit'
                >
                    <AnalyticsTwoToneIcon />
                </IconButton>
                <p>Analytics</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='open drawer'
                        sx={{ mr: 2 }}
                        onClick={handleMainMenuOpen}
                    >
                        <MenuTwoToneIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrao
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Dashboard
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size='large'
                            aria-label="show 17 new noticatifications"
                            color='inherit'
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size='large'
                            edge='end'
                            aria-label='account of current user'
                            //aria-controls={}
                            aria-haspopup='true'
                            //</Box>onClick={ }
                            color='inherit'>
                            <AdminPanelSettingsTwoToneIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMainMenu}
        </Box>
    );
}

export default ApplicationBar;
