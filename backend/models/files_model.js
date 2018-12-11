var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var FileSchema = new Schema({
    filename: { type: String, unique: true },
    displayname: String,
    owner: String,
});
mongoose.model('File', FileSchema);
