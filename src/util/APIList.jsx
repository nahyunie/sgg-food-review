import axios from "axios";

const URL = 'http://13.125.180.247:8080';
const APIList = {
    getFoodList: async () => {
        const res = await axios.get(`/sgg/food-review/food/food-list`);
        console.log(res);
        return res.data;
    },

    getFoodListWithCategoryId: async (id) => {
        const res = await axios.get(`/sgg/food-review/food/food-list/${id}`);
        return res.data;
    },

    getFoodDetailInfo: async (id) => {
        const data = JSON.stringify({"foodId": id});
        const res = await axios.post(`/sgg/food-review/food/food-dtl`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return res.data;
    },

    uploadReview: async (data) => {
        const res = await axios.post(`/sgg/food-review/review/upload`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return res.data;
    },

    upsertThumbsUp: async (reviewId) => {
        const data = JSON.stringify({
            "lkId" : "",
            "rvId" : reviewId,
        })
        const res = await axios.post(`/sgg/food-review/review-like/upsert`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return res.data;
    }
}

export default APIList;