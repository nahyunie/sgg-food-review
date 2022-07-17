import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Button, Container, Fab, Grid, Paper, Rating, SpeedDial, SpeedDialIcon, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from "react-router-dom";

const MenuDetail = () => {
    const [isClickThumbsUp, setClickThumbsUp] = useState(false);
    const navigate = useNavigate();

    const handleThumbsUpClick = () => {
        setClickThumbsUp(!isClickThumbsUp);
    };

    const handleCreateButtonClick = () => {
        navigate('/create');
    }

    return (
        <>
            <Container sx={{ py: 4 }} maxWidth="md">
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
                            우삼겹된장찌개
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                textAlign: "center",
                            }}
                        >
                            3,800원
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
                                4.4
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Rating
                                value={4.4}
                                precision={0.1}
                                size="large"
                                readOnly
                                sx={{px: '0.5em'}}
                            />
                        </Grid>
                        <Grid item xs={3} />
                    </Grid>
                    <Grid container alignItems="center" justifyContent="center" sx={{py: '1em'}}>
                        <Grid item xs={10}>
                            <Paper
                                color="secondary"
                                style={{ padding: "20px 20px", marginTop: 10 }}
                            >
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item xs zeroMinWidth>
                                        <Stack direction="row" alignItems="center" spacing={2}>
                                            <h3 style={{ margin: 0, textAlign: "left" }}>
                                                임초코
                                            </h3>
                                            <Rating value={4.5} precision={0.5} size="small" readOnly />
                                        </Stack>

                                        <p style={{ textAlign: "left" }}>
                                            맛있어요 !!
                                        </p>
                                        <Grid container alignItems="center">
                                            <Grid item xs={10}>
                                                <p style={{ textAlign: "left", color: "gray" }}>
                                                    2022-05-22
                                                </p>
                                            </Grid>

                                            <Grid item xs={2} sx={{px: '2.5em'}}>
                                                <Button
                                                    color="primary"
                                                    variant={isClickThumbsUp ? "outlined" : "contained"}
                                                    startIcon={<ThumbUpIcon />}
                                                    onClick={handleThumbsUpClick}
                                                >
                                                    {10}
                                                </Button>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Paper>
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
            </Container>

        </>
    );
};

export default MenuDetail;