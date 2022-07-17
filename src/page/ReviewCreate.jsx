import React, {useCallback, useRef, useState} from 'react';
import {Button, Container, Grid, Rating, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";
import APIList from "../util/APIList";

const ReviewCreate = () => {
    const [ratingData, setRatingData] = useState(0);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();
    const [image, setImage] = useState();

    const onUploadImage = useCallback((e) => {
        if (!e.target.files) {
            return;
        }
        setImage(e.target.files[0]);
        console.log(e.target.files[0].name);
    }, []);

    const onUploadImageButtonClick = useCallback(() => {
        if (!inputRef.current) {
            return;
        }
        inputRef.current.click();
    }, []);

    const handleChangeRatingValue = (value) => {
        setRatingData(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData();
        const reviewData = {
            foodId: "1",
            rating: event.currentTarget.rating.value,
            reviewText: event.currentTarget.review.value
        }
        console.log(event.currentTarget.rating.value);
        data.append('img', image);
        data.append('myReview', new Blob([JSON.stringify(reviewData)], {type: "application/json"}));

        try {
            const res = await APIList.uploadReview(data);
            if (res.responseCode === '200') {
                navigate(-1);
            }
        } catch (error) {
            console.log(error);
        }

        console.log(image.name);
        console.log(data);
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
                        precision={1}
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
                <Button
                    variant="contained"
                    component="label"
                    color="secondary"
                    onClick={onUploadImageButtonClick}
                >
                    사진 업로드
                    <input type="file" accept="image/*" onChange={onUploadImage} hidden />
                </Button>
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