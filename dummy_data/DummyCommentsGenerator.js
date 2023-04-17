const mongoose = require("mongoose");
const dummy = require("mongoose-dummy");
let schemaDefinition = new mongoose.Schema({
	UserId: {
		// type: mongoose.Schema.Types.ObjectId,
		// ref: 'user',
		// required: true

		type: String,
		default: "no id for now",
	},
	post_image: {
		type: String,
		default: "/public/uploads/default.jpg",
	},
	title: {
		type: String,
	},
	likes: {
		type: Array,
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
});

let model = mongoose.model("User", schemaDefinition);
let randomObject = dummy(model, {
	returnDate: true,
});

console.log(randomObject);
