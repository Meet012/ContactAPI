const models =require('../model/model');
const {createError} = require('../errors/errors');

const getAllContact = async (req,res)=>{
    const allContacts = await models.find({});
    res.status(200).json({allContacts});
};

const getOneContact = async (req,res,next)=>{
    const {id} = req.params;
    const oneContact = await models.findById(id);
    if(!oneContact){
        // return res.status(404).json({msg:'Not Found'});
        return next(createError('Not Found',404));   
    }
    res.status(200).json({oneContact});
};

const createContact = async (req,res)=>{
    const contact = await models.create(req.body);
    res.status(200).json(contact);
};

const updateContact = async (req,res,next)=>{
    const {id:contactId} = req.params;
    const contact = await models.findByIdAndUpdate({_id:contactId},{name:req.body.name,number:req.body.number,email:req.body.email},{
        new:true,
        runValidators:true
    });

    if(!contact){
        // return res.status(404).json({msg:'Not found any contact'});
        return next(createError('Not Found',404));   
    }
    res.status(200).json(contact);
};

const deleteContact = async (req,res,next)=>{
    const {id:contactId} = req.params;
    const contact = await models.findByIdAndDelete({_id:contactId});
    if(!contact){
        // return res.status(404).json({msg:'Not Found'});
        return next(createError('Not Found',404));   
    }
    res.status(200).json({contact:null,status:'success'});
};

module.exports = {getAllContact,getOneContact,createContact,updateContact,deleteContact}