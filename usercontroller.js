import  prisma  from "./db.config.js";

export const createUser = async (req,res) => {
    const {name,email,password} = req.body


    const findUser = await prisma.user.findUnique({
        where:{
            email:email
        }
    }
    )

    if(findUser){
       return res.json({status:400,msg:"user exists"})
    }

    const newuser = await prisma.user.create({
        data:{
            name,
            email,
            password
        }
    })
    return res.json({status:200,msg:"User created",data:newuser})

}

export const updateUser = async (req,res) => {
    const id =parseInt(req.params.id) 
    const {name , email} = req.body

    const  update = await prisma.user.update({
        where:{
            id:id
        },
        data:{
            name:name,
            email:email
        }
    })
    if(update)
        return res.json({status:200,message:"updated sucessfully"})
}


export const readData = async (req,res) => {
    const id = parseInt(req.params.id)
    const users = await prisma.user.findUnique({
        where:{
            id:id
        }
    }) 
    if(users)
        return res.json({status:200,data:users})
}

export const deleteUser = async (req,res) => {
    const id = parseInt(req.params.id)
    const del = await prisma.user.delete({
        where:{
            id:id
        }
    })
    if(del)
    return res.json({status:200,msg:"deleted sucessfully"})
}