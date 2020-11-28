const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pageSchema = new Schema({
    name: {type: String},
    title: {type: String},
    externalFiles: [{type:String}],
    components: [{type: mongoose.Schema.Types.ObjectId, ref: 'Component'}],
});

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;