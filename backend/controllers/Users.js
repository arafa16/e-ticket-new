import Users from "../models/UserModel.js"
import argon2 from 'argon2';
import { Sequelize } from "sequelize";
import Status from "../models/StatusModel.js";

const Op = Sequelize.Op;

export const getUsers = async(req, res) => {
    try {
        const limit = parseInt(req.params.limit);
        const page = parseInt(req.params.page);
        const offset = (page - 1) * limit;

        const response = await Users.findAndCountAll({
            attributes:['uuid','name','email','nomorHp','statusId'],
            include:{
                model:Status,
                attributes:['uuid','name','code']
            },
            limit:limit,
            offset:offset
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const findUsers = async(req, res) => {
    try {
        const response = await Users.findAll({
            where:{
                name: {
                    [Op.like]: `%${req.params.name}%`
                }
            }
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getUserById = async(req, res) => {
    try {
        const response = await Users.findOne({
            where:{
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const createUser = async(req, res) => {
    const {name, email, password, confPassword} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "password dan confirmation password tidak cocok"});
    const hasPassword = await argon2.hash(password);
    try {
        await Users.create({
            name: name,
            email: email,
            password: hasPassword,
            statusId:'1'
        })
        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updateUser = async(req, res) => {
    const user = await Users.findOne({
        where:{
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "user tidak ditemukan"});
    const {name, email, password, confPassword, statusId} = req.body;
    let hasPassword;
    if(password === "" || password === null){
        hasPassword = user.password
    }else{
        hasPassword = await argon2.hash(password);
    }
    if(password !== confPassword) return res.status(400).json({msg: "password dan confirmation password tidak cocok"});
    try {
        await Users.update({
            name: name,
            email: email,
            password: hasPassword,
            statusId:statusId
        },{
            where:{
                id: user.id
            }
        });
        return res.status(200).json({msg: "User Updated"});
    } catch (error) {
        await res.status(500).json({msg: error.message});
    }
}

export const deleteUser = async(req, res) => {
    const user = await Users.findOne({
        where:{
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "user tidak ditemukan"});
    try {
        await Users.destroy({
            where:{
                id: user.id
            }
        });
        return res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        await res.status(500).json({msg: error.message});
    }
}