import React, {useEffect, useState} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useLocation, useNavigate} from 'react-router-dom';
import APIList from "../util/APIList";

const MenuList = () => {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const navigate = useNavigate();
    const [data, setData] = useState();

    const {pathname} = useLocation();
    const currentPage = pathname.split('/')[2];

    useEffect(() => {
        if (currentPage) {
            getSpecificCategoryFoodList();
        } else {
            getEntireFoodList();
        }

    }, [currentPage]);

    const getEntireFoodList = async () => {
        try {
            const res = await APIList.getFoodList();
            if (res) {
                setData(res);
                console.log(res);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getSpecificCategoryFoodList = async () => {
        try {
            const res = await APIList.getFoodListWithCategoryId(currentPage);
            if (res) {
                setData(res);
                console.log(res);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleMenuClick = (foodId) => {
        navigate(`/detail/${foodId}`);
    }

    return (
        <Container sx={{ py: 4 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
                {data && data.map((item) => (
                    <Grid item key={item.foodId} xs={12} sm={6} md={4}>
                        <Card
                            onClick={() => handleMenuClick(item.foodId)}
                            sx={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                                component="img"
                                sx={{
                                    // 16:9
                                    pb: '3%',
                                    height: '12em',
                                    width: '20em',
                                    objectFit: 'cover'

                                }}
                                image="https://source.unsplash.com/random"
                                alt="random"
                            />
                            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                                <Typography gutterBottom variant="h6" component="h4">
                                    {item.foodNm}
                                </Typography>
                            </CardContent>
                            {/*<CardActions>*/}
                            {/*    <Button size="small">View</Button>*/}
                            {/*    <Button size="small">Edit</Button>*/}
                            {/*</CardActions>*/}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default MenuList;