import Status from "../models/StatusModel.js";

export const getStatus = async(req, res) => {
    try {
        const response = await Status.findAll();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.status});
    }
}

export const getStatusById = async(req, res) => {
    try {
        const response = await Status.findOne({
            attributes: ['uuid','name']
        },{
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.status});
    }
}

export const createStatus = async(req, res) => {
    const {name} = req.body;
    if(!name) return res.status(400).json({msg: "name tidak boleh kosong"});
    try {
        await Status.create({
            name:name
        });

        res.status(200).json({msg: "success"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteStatus = async(req, res) => {
    const status = await Status.findOne({
        where:{
            uuid: req.params.id
        }
    });
    if(!status) return res.status(400).json({msg: "status tidak ditemukan"});
    try {
        await Status.destroy({
            where:{
                id: status.id
            }
        });
        res.status(200).json({msg: "delete berhasil"})
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
    
}