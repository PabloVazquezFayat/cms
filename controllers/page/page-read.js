const Page = require('../../models/Page');

module.exports = async (req, res, next)=>{

    try{

        const page = await Page.findOne({_id: req.params.id})
        .populate({path: 'components'});

        if(page){
            res.status(200).json(page);
        }

    }catch(error){
        next(error);
    }

}