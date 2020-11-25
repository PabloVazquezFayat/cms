const Component = require('../../models/Component');

module.exports = async (req, res, next)=>{

    try{

        const component = await Component.findOne({id: req.params.id});

        if(component){
            res.status(200).json(component);
        }

    }catch(error){
        next(error);
    }

}