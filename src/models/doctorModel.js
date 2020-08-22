const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const doctorSchema = new mongoose.Schema({
	achievements: [String],
	experience: Number,
	location: String,
	description: String,
	specializations: { type: [String] },
	qualifications: { type: [String] },
	awards: { type: [String] },
	avg_fees: { type: Number },
	startTime: { type: String },
	endTime: { type: String },
	slotDuration: { type: Number },
	subslots: [],
	hospitalList: [String]
}, {
	toJSON: { virtuals : true },
	toObject: { virtuals : true },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = {
	doctorSchema: doctorSchema,
	Doctor: Doctor
};