import { Router } from "express";
import { addProduct,fetchProduct,deleteProduct,updateProduct } from "../controller/productcontroller.js";

export const productrouter = Router()

productrouter.post('/add/:id',addProduct)
productrouter.put('/update/:id/:pid',updateProduct)
productrouter.get('/read/:id',fetchProduct)
productrouter.post('/delete/:id',deleteProduct)