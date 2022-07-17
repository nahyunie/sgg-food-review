import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useNavigate} from 'react-router-dom';

const MenuList = () => {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const navigate = useNavigate();

    const handleMenuClick = () => {
        navigate('/detail');
    }

    return (
        <Container sx={{ py: 4 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card
                            onClick={handleMenuClick}
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
                                    우삼겹된장찌개
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