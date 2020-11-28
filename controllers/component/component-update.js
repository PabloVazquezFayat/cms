const Component = require('../../models/Component');

module.exports = async (req, res, next)=>{

    try{

        const newComponentData = {}

        for (const key in req.body) {
            newComponentData[key] = req.body[key];
        }

        const updatedComponent = await Component.findByIdAndUpdate({_id: req.body.id}, newComponentData, {new: true});

        if(updatedComponent){
            res.status(200).json({message: 'Component updated', data: updatedComponent});
        }

    }catch(error){
        next(error);
    }

}