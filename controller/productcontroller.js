import prisma from "../configdb/db.config.js";

export const addProduct = async (req,res) => {
    const {pname,price} =req.body
    const userId = parseInt(req.params.id) // here we can use middleware to get userid in real projects

    const prod = await prisma.product.create({
        data:{
            pname,
            price,
            user_id:userId
        }
    })
    if(prod){
        return res.json({status:200,msg:"Product added sucessfully"})
    }
    else{
        return res.json({status:400,msg:"cannot add product"})
    }
}


export const updateProduct = async (req,res) => {
    const {pname,price} =req.body
    const {id,pid} = req.params

    const upd = await prisma.product.update({
        where:{
            user_id:parseInt(id),
            pid:parseInt(pid) // if we want to update for specific user then we need user id
        },
        data:{
            pname,
            price,
        }
    })
    if(upd){
        return res.json({status:200,msg:"Product updated sucessfully"})
    }
    else{
        return res.json({status:400,msg:"cannot update product"})
    }
}


export const fetchProduct = async (req,res) => {
    const userId = parseInt(req.params.id) 

    const readData = await prisma.product.findMany({
        where:{
            user_id:userId
        }
    })
    if(readData){
        return res.json({status:200,msg:"Product fetched sucessfully",data:readData})
    }
    else{
        return res.json({status:400,msg:"cannot fetch product"})
    }
}


export const deleteProduct = async (req,res) => {
    const pid = parseInt(req.params.id)

    const del = await prisma.product.deleteMany({
        where:{
            // user_id:userId,
            pid:pid           // if we want to delete for specific user then we need user id
        }
    })
    if(del){
        return res.json({status:200,msg:"Product delete sucessfully"})
    }
    else{
        return res.json({status:400,msg:"cannot delete product"})
    }
}
