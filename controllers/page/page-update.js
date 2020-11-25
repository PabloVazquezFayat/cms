const Page = require('../../models/Page');

module.exports = async (req, res, next)=>{

    try{

        const newPageData = {};

        for (const key in req.body) {
            newPageData[key] = req.body[key];
        }

        const updatedPage = await Page.findByIdAndUpdate({_id: req.body.id}, newPageData, {new: true});

        if( updatedPage){
            res.status(200).json({message: 'New page create', data: updatedPage});
        }

    }catch(error){
        next(error);
    }

}