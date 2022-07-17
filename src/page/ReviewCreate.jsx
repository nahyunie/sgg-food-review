import React, {useState} from 'react';
import {Button, Container, Grid, Rating, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";

const ReviewCreate = () => {
    const [ratingData, setRatingData] = useState(0);
    const navigate = useNavigate();

    const handleChangeRatingValue = (value) => {
        setRatingData(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            rating: data.get('rating'),
            review: data.get('review'),
        });
    }

     const handleCancelClick = () => {
        navigate(-1);
     }

    return (
        <Container sx={{ py: 4 }} maxWidth="md">
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
                component="form"
                noValidate
                onSubmit={handleSubmit}
            >
                <Grid item sx={{p:'1em'}}>
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
                </Grid>
                <Grid item sx={{p:'1em'}}>
                    <Rating
                        id="rating"
                        name="rating"
                        value={ratingData}
                        precision={0.5}
                        onChange={(event, value)=>{handleChangeRatingValue(value)}}
                        size="large"
                    />
                </Grid>
                <TextField
                    required
                    fullWidth
                    placeholder="음식에 대한 솔직한 리뷰를 남겨주세요."
                    id="review"
                    name="review"
                    sx={{p:'1em'}}
                />
                <Grid item sx={{p:'1em'}}>
                    <Button type="submit" variant="contained" sx={{m:'0.5em'}}>생성</Button>
                    <Button
                        variant="contained"
                        color="lightgrey"
                        sx={{m:'0.5em'}}
                        onClick={handleCancelClick}
                    >
                        취소
                    </Button>
                </Grid>
            </Grid>

        </Container>
    );
};

export default ReviewCreate;