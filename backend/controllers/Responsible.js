import Responsible from "../models/ResponsibleModel.js";
import Users from "../models/UserModel.js";

export const getResponsible = async(req, res) => {
    try {
        const response = await Responsible.findAll({
            include:[{
                model:Users
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createResponsible = async(req, res) => {
    const user = await Users.findOne({
        where:{
            uuid:req.body.id
        }
    });
    if(!user) return res.status(400).json({msg: "user tidak di temukan"});
    try {
        await Responsible.create({
            userId:user.id,
            statusId:1
        });
        res.status(200).json({msg: "success"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}