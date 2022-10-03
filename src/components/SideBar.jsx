/**
 * Author:          Kassi Bertrand
 * filename:        SideBar.jsx
 * Date:            10-02-2022
 * Description:     The admin page navigation bar.
 */

import { Box, Link, List, ListItemButton, ListItemIcon, ListItemText, Drawer, ListItem } from '@mui/material';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import ClassTwoToneIcon from '@mui/icons-material/ClassTwoTone';
import AnalyticsTwoToneICon from '@mui/icons-material/AnalyticsTwoTone';
import { ThemeProvider, createTheme } from '@mui/system';

const theme = createTheme({
    palette: {

    },
    typography: {

    },
});

function SideBar() {
    return (
        <Drawer variant='permanent' sx={{ height: '100vh', width: 'auto' }}>
            <Box
                component="img"
                sx={{
                    pl: 3,
                    height: 100,
                    width: 110,
                    mb: 4
                }}
                src="https://raw.githubusercontent.com/jonathanebrahimian/software-engineering-team-1-frontend/master/src/lyle_logo.png"
            />
            <Box>
                <List>
                    <ListItem sx={{ mb: 4 }}>
                        <ListItemButton>
                            <ListItemIcon><DashboardTwoToneIcon /></ListItemIcon>
                            <ListItemText>Dashboard</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem sx={{ mb: 4 }}>
                        <ListItemButton>
                            <ListItemIcon><ClassTwoToneIcon /></ListItemIcon>
                            <ListItemText>Classes</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem sx={{ mb: 4 }}>
                        <ListItemButton>
                            <ListItemIcon><AnalyticsTwoToneICon /></ListItemIcon>
                            <ListItemText>Analytics</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
}

export default SideBar;