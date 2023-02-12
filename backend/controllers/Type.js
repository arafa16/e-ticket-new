import Types from "../models/TypeModel.js";

export const getTypes = async(req, res) => {
    try {
        const response = await Types.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getTypeById = async(req, res) => {
    const type = await Types.findOne({
        where:{
            uuid:req.body.id
        }
    });
    if(!type) return res.status(404).json({msg: "type tidak ditemukan"});
    try {
        const response = await Types.findOne({
            where:{
                id:type.id
            }
        });
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const createType = async(req, res) => {
    const {name, code, statusId} = req.body;
    if(!name || !statusId) return res.status(400).json({msg: "field tidak boleh kosong"});
    try {
        await Types.create({
            name:name,
            code:code,
            statusId: statusId
        })
        return res.status(200).json({msg: "success"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateType = async(req, res) => {
    const type = await Types.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!type) return res.status(400).json({msg: "type tidak ditemukan"});
    const {name, statusId} = req.body;
    try {
        await Types.update({
            name:name,
            statusId:statusId
        },{
            where:{
                id:type.id
            }
        });
        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deleteType = async(req, res) => {
    const type = await Types.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!type) return res.status(400).json({msg: "type tidak ditemukan"});
    try {
        await Types.destroy({
            where:{
                id:type.id
            }
        });
        return res.status(200).json({})
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}