const Page = require('../models/Page');

module.exports = async (req, res, next)=>{

    try{

        const page = await Page.findOne({name: req.params.id})
        .populate({path: 'components'});

        if(page){
            res.render('index', {page: page});
        }

    }catch(error){
        next(error);
    }

}