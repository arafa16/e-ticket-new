import Tickets from "../models/TicketModel.js";
import Responsible from "../models/ResponsibleModel.js";
import Users from "../models/UserModel.js";
import Types from "../models/TypeModel.js";
import StatusTickets from "../models/StatusTicketModel.js";

export const getTickets = async(req, res) => {
    try {
        const response = await Tickets.findAll({
            attributes:['uuid','request','startDate','endDate'],
            include:[{
                model:Types,
                attributes:['uuid','name','code']
            },{
                model:StatusTickets,
                attributes:['uuid','name','code']
            }]
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getTicketById = async(req, res) => {
    try {
        const response = await Tickets.findOne({
            attributes:['uuid','request','startDate','endDate'],
            include:[{
                model:Types,
                attributes:['uuid','name','code']
            },{
                model:StatusTickets,
                attributes:['uuid','name','code']
            }]
        },{
            where:{
                uuid: req.params.id
            }
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const createTicket = async(req, res) => {
    const {request, typeId, statusTicketId, startDate, endDate} = req.body;
    try {
        await Tickets.create({
            request:request,
            typeId:typeId,
            statusTicketId:statusTicketId,
            startDate:startDate,
            endDate:endDate
        });
        res.status(201).json({msg: "success"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateTicket = async(req, res) => {
    const ticket = await Tickets.findOne({
        where:{
            uuid: req.params.id
        }
    });
    if(!ticket) return res.status(404).json({msg: "ticket tidak ditemukan"});
    const {request, typeId, statusTicketId, startDate, endDate} = req.body;
    try {
        await Tickets.update({
            request:request,
            typeId:typeId,
            statusTicketId:statusTicketId,
            startDate:startDate,
            endDate:endDate
        },{
            where:{
                id:ticket.id
            }
        });
        res.status(201).json({msg: "success"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteTicket = async(req, res) => {
    const ticket = await Tickets.findOne({
        where:{
            uuid: req.params.id
        }
    });
    if(!ticket) return res.status(404).json({msg: "ticket tidak ditemukan"});
    try {
        await Tickets.destroy({
            where:{
                id:ticket.id
            }
        });
        res.status(201).json({msg: "deleted success"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}