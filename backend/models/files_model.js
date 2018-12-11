var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var FileSchema = new Schema({
    filename: { type: String, unique: true },
    owner: String,
});
mongoose.model('File', FileSchema);
