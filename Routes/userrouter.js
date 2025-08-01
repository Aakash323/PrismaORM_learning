import { Router } from "express";
import { createUser, deleteUser, readData, updateUser } from "../controller/usercontroller.js";

export const userrouter = Router()

userrouter.post('/create',createUser)
userrouter.put('/update/:id',updateUser)
userrouter.get('/read/:id',readData)
userrouter.post('/del/:id',deleteUser)