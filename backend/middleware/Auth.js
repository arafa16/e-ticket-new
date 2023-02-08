import Status from "../models/StatusModel.js";
import Users from "../models/UserModel.js";

export const verifyUser = async(req, res, next) => {
    if(!req.session.userId){
        return res.status(401).json({msg: "mohon login ke akun anda"});
    }
    const user = await Users.findOne({
        where:{
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "user tidak ditemukan"});
    if(user.statusId === null) return res.status(403).json({msg: "anda belum di validate oleh admin"});
    const status = await Status.findOne({
        where:{
            id:user.statusId
        }
    })
    if(status.name !== "active") return res.status(403).json({msg: "anda belum di validate oleh admin"});
    req.userId = user.id;
    next();
}