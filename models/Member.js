var mongoose = require ("mongoose");
var bcrypt = require("bcrypt-nodejs");

var Schema = mongoose.Schema;

var MemberSchema = new Schema({
    email: {
        type: String
    },

    password: {
        type: String
    }
});

MemberSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

MemberSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

var Member = mongoose.model("Member", MemberSchema);
module.exports = Member;