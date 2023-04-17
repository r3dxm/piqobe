const mongoose = require("mongoose");
const dummy = require("mongoose-dummy");
let schemaDefinition = new mongoose.Schema({
	PostId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "post",
		required: true,
	},
	UserId: {
		// type: mongoose.Schema.Types.ObjectId,
		// ref: 'user',
		// required: true

		type: String,
		default: "no id for now",
	},
	comment: {
		type: String,
		required: true,
	},
});

let model = mongoose.model("User", schemaDefinition);
let randomObject = dummy(model, {
	returnDate: true,
});

console.log(randomObject);
