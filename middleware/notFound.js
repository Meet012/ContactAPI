const notFound = (req,res)=>{
    res.status(404).send('NotFound');
};

module.exports = notFound;