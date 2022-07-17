import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Button, Fab} from "@mui/material";
import {grey} from "@mui/material/colors";
import {useNavigate} from "react-router-dom";
import BasicDrawer from "./BasicDrawer";
import AppBar from "./BasicAppBar";
import Main from "./BasicMain";
import DrawerHeader from "./BasicDrawerHeader";

const drawerWidth = 240;

const PageLayout = ({children, isDetailPage}) => {
    const myTheme = createTheme({
        palette: {
            primary: {
                main: '#00205b',

            },
            secondary: {
                main: '#62b5e5',
            },
            lightgrey: {
                main: grey[200],
            },
        },
        typography: {
            fontFamily: "'KOTRAHOPE'",
        }
    });
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate();

    const handleToolBarButtonClick = () => {
        navigate('/list');
    }

    return (
        <ThemeProvider theme={myTheme}>
            <Box color="primary">
                <Box sx={{ display: 'flex'}}>
                    <CssBaseline />
                    <AppBar position="fixed" open={open} drawerWidth={drawerWidth}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{ mr: 2, ...(open && { display: 'none' }) }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Button
                                variant="text"
                                sx={{color: '#fff', fontSize: '1.5em'}}
                                noWrap
                                onClick={handleToolBarButtonClick}
                            >
                                한성대 학식 리뷰
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <BasicDrawer
                        handleDrawerClose={handleDrawerClose}
                        open={open}
                        drawerWidth={drawerWidth}
                        myTheme={myTheme}
                    />
                    <Main open={open} drawerWidth={drawerWidth}>
                        <DrawerHeader />
                        {children}
                    </Main>
                </Box>
            </Box>
        </ThemeProvider>

    );
}

export default PageLayout;
