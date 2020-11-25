const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const componentSchema = new Schema({
    name: {type: String},
    html: {type: String},
    css: {type: String},
    script: {type: String},
    externalJSfiles: [{type: String}],
    externalCSSfiles: [{type: String}],
    page: {type: mongoose.Schema.Types.ObjectId, ref: 'Page'}
});

const Component = mongoose.model('Component', componentSchema);

module.exports = Component;