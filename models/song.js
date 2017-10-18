let mongoose = require('mongoose'),
	SongSchema = mongoose.Schema({
		name: String,
		trackNumber: Number
	});

let Song = mongoose.model('Song', SongSchema);

module.exports = Song;