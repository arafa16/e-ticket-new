import StatusTickets from "../models/StatusTicketModel.js";

export const getStatusTicket = async(req, res) => {
    try {
        const response = await StatusTickets.findAll();
        res.status(200).json(response);
    } catch (error) {
        await res.status(500).json({msg: error.message})
    }
}

export const getStatusTicketById = async(req, res) => {
    try {
        const response = await StatusTickets.findOne({
            where:{
                uuid:req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        await res.status(500).json({msg: error.message})
    }
}

export const createStatusTicket = async(req, res) => {
    try {
        await StatusTickets.create({
            name:req.body.name,
            code:req.body.code,
        });
        res.status(201).json({msg: "success"});
    } catch (error) {
        await res.status(500).json({msg: error.message});
    }
}

export const updateStatusTicket = async(req, res) => {
    const status = await StatusTickets.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!status) return res.status(404).json({msg: "status ticket tidak ditemukan"});
    const {name, code} = req.body;
    if(!name || name === null) return res.status(400).json({msg: "nama status ticket tidak boleh kosong"});
    if(!code || code === null) return res.status(400).json({msg: "code status ticket tidak boleh kosong"});
    try {
        await StatusTickets.update({
            name:name,
            code: code
        },{
            where:{
                id:status.id
            }
        });

        res.status(201).json({msg: "update berhasil"});
    } catch (error) {
        await res.status(500).json({msg: error.message})
    }
}

export const deleteStatusTicket = async(req, res) => {
    const status = await StatusTickets.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!status) return res.status(404).json({msg: "status ticket tidak ditemukan"});
    try {
        await StatusTickets.destroy({
            where:{
                uuid:status.id
            }
        })

        res.status(200).json({msg: "deleted success"});
    } catch (error) {
        await res.status(500).json({msg: error.message});
    }
}