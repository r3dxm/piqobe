const mongoose = require("mongoose");
const dummy = require("mongoose-dummy");
let schemaDefinition = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
	},
	password: {
		type: String,
		required: true,
		select: false,
	},
	profile_img: {
		type: String,
		default: "/public/default.png",
	},
	following: {
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
