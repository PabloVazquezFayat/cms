const Page = require('../../models/Page');

module.exports = async (req, res, next)=>{

    try{

        const newPageData = {
            name: req.body.name,
            title: req.body.title,
            components: req.body.components,
        }

        const newPage = await Page.create(newPageData);

        if(newPage){
            res.status(200).json({message: 'New page create', data: newPage});
        }

    }catch(error){
        next(error);
    }

}