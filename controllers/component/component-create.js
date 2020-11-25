const Component = require('../../models/Component');

module.exports = async (req, res, next)=>{

    try{

        const newComponentData = {
            name: req.body.name,
            html: req.body.html,
            css: req.body.css,
            script: req.body.script,
            externalJSfiles: req.body.externalJSfiles,
            externalCSSfiles: req.body.externalCSSfiles,
            page: req.body.page ? req.body.page : null, 
        }

        // if(req.body.page){
        //     newComponentData.page = req.body.page
        // }

        const newComponent = await Component.create(newComponentData);

        if(newComponent){
            res.status(200).json({message: 'New component create', data: newComponent});
        }

    }catch(error){
        next(error);
    }

}