import React from 'react';
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from '@mui/material/Drawer';
import {styled} from "@mui/material/styles";
import {useNavigate} from "react-router-dom";

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const BasicDrawer = ({drawerWidth, open, handleDrawerClose, myTheme}) => {

    const navigate = useNavigate();

    const CategoryList = [
        {
          name: '전체보기',
          path: '/list',
        },
        {
            name: '덮밥류 & 비빔밥',
            path: '/list/1',
        },
        {
            name: '면 & 찌개 & 김밥',
            path: '/list/2',
        },
    ];

    const handleClickMenuList = (path) => {
        navigate(path);
    };

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {myTheme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {CategoryList.map((item, index) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton sx={{textAlign: 'center', padding: '0.5em'}} onClick={() => handleClickMenuList(item.path)}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default BasicDrawer;
