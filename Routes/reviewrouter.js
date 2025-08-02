import { Router } from "express";
import { addReview, deleteReview, fetchReview, updateReview } from "../controller/reviewcontroller.js";

export const reviewrouter = Router();

reviewrouter.post('/create/:userId/:pid',addReview );
reviewrouter.put('/update/:userId/:pid', updateReview);
reviewrouter.get('/read/:userId/:pid', fetchReview);
reviewrouter.post('/delete/:userId/:pid', deleteReview);