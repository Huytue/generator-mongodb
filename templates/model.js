const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaName = new Schema({ 
    sID: {
		type: String,
		default: null
	},
	name: {
		type: String,
		// unique: true,
		required: true
	},
 });

const {modelName} = mongoose.model('{modelName}', schemaName);
module.exports = {modelName};
