import StatusTickets from "../models/StatusTicketModel.js";

export const getStatusTicket = async(req, res) => {
    try {
        const response = await StatusTickets.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message})
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
        res.status(500).json({msg: error.message})
    }
}

export const createStatusTicket = async(req, res) => {
    try {
        await StatusTickets.create({
            name:req.body.name
        });
        res.status(201).json({msg: "success"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateStatusTicket = () => {
    
}

export const deleteStatusTicket = () => {
    
}