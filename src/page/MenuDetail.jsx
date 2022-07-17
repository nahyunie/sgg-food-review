import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Button, Container, Fab, Grid, Paper, Rating, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EditIcon from '@mui/icons-material/Edit';
import {useLocation, useNavigate} from "react-router-dom";
import APIList from "../util/APIList";

const MenuDetail = () => {
    const [isClickThumbsUp, setClickThumbsUp] = useState(false);
    const [data, setData] = useState();
    const navigate = useNavigate();

    const {pathname} = useLocation();
    const currentPage = pathname.split('/')[2];


    const handleThumbsUpClick = (reviewId) => {
        // setClickThumbsUp(!isClickThumbsUp);
        upsertThumbsUp(reviewId);
    };

    const upsertThumbsUp = async (reviewId) => {
        try {
            const res = await APIList.upsertThumbsUp(reviewId);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCreateButtonClick = () => {
        navigate('/create');
    };

    useEffect(() => {
        console.log(currentPage);
        getFoodDetailInfo();
    }, []);

    const getFoodDetailInfo = async () => {
        try {
            const res = await APIList.getFoodDetailInfo(currentPage);
            if (res) {
                setData(res);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Container sx={{ py: 4 }} maxWidth="md">
                {
                    data && (
                        <>
                            <Grid container justifyContent="center" alignItems="center">
                                <Grid item sx={{p:'1em'}}>
                                    <Box
                                        component="img"
                                        sx={{
                                            objectFit: 'fill',
                                            height: '15em',
                                            width: '25em',
                                            display: 'flex', flexDirection: 'column'
                                        }}
                                        alt="The house from the offer."
                                        src="https://source.unsplash.com/random"
                                    />
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            textAlign: "center",
                                            pt: '0.5em',
                                            pb: '0.2em',
                                        }}
                                    >
                                        {data.foodNm}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            textAlign: "center",
                                            pb: '0.2em',
                                        }}
                                    >
                                        {data.foodDesc}
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            textAlign: "center",
                                        }}
                                    >
                                        {data.foodPrice}원
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Divider sx={{m: '1em'}} />
                            <Grid container >
                                <Typography variant="h4" sx={{px: '0.5em'}}>리뷰</Typography>
                                <Grid container alignItems="center">
                                    <Grid item xs={3} />
                                    <Grid item xs={3}>
                                        <Typography variant="h2" sx={{px: '0.5em', textAlign: "center",}}>
                                            {data.rating}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Rating
                                            value={data.rating}
                                            precision={0.1}
                                            size="large"
                                            readOnly
                                            sx={{px: '0.5em'}}
                                        />
                                    </Grid>
                                    <Grid item xs={3} />
                                </Grid>
                                {/* 댓글 영역 */}
                                <Grid container alignItems="center" justifyContent="center" sx={{py: '1em'}}>
                                    <Grid item xs={10}>
                                        {
                                            data.reviewDtoList && data.reviewDtoList.map((item) => (
                                                <Paper
                                                    color="secondary"
                                                    style={{ padding: "20px 20px", marginTop: 10 }}
                                                >
                                                    <Grid container wrap="nowrap" spacing={2}>
                                                        <Grid item xs zeroMinWidth>
                                                            <Stack direction="row" alignItems="center" spacing={2} sx={{py: '0.5em'}}>
                                                                <h3 style={{ margin: 0, textAlign: "left" }}>
                                                                    임초코
                                                                </h3>
                                                                <Rating value={item.rating} precision={0.5} size="small" readOnly />
                                                            </Stack>
                                                            <Box
                                                                component="img"
                                                                sx={{
                                                                    objectFit: 'fill',
                                                                    height: '10em',
                                                                    width: '15em',
                                                                    display: 'flex', flexDirection: 'column'
                                                                }}
                                                                src={item.imgPath}
                                                            />
                                                            <p style={{ textAlign: "left" }}>
                                                                {item.reviewText}
                                                            </p>
                                                            <Grid container alignItems="center">
                                                                <Grid item xs={9}>
                                                                    <p style={{ textAlign: "left", color: "gray" }}>
                                                                        2022-05-22
                                                                    </p>
                                                                </Grid>

                                                                <Grid item xs={3} sx={{px: '2.5em'}}>
                                                                    <Button
                                                                        color="primary"
                                                                        variant={item.likeId === null ? "outlined" : "contained"}
                                                                        // startIcon={<ThumbUpIcon />}
                                                                        onClick={() => handleThumbsUpClick(item.reviewId)}
                                                                    >
                                                                        <ThumbUpIcon />
                                                                    </Button>
                                                                </Grid>
                                                            </Grid>

                                                        </Grid>
                                                    </Grid>
                                                </Paper>
                                            ))
                                        }
                                    </Grid>

                                </Grid>
                            </Grid>

                            <Fab
                                color="primary"
                                aria-label="add"
                                onClick={handleCreateButtonClick}
                                sx={{
                                    margin: 0,
                                    top: 'auto',
                                    right: 20,
                                    bottom: 20,
                                    left: 'auto',
                                    position: 'fixed',
                                }}
                            >
                                <EditIcon/>
                            </Fab>
                        </>
                    )
                }
            </Container>

        </>
    );
};

export default MenuDetail;