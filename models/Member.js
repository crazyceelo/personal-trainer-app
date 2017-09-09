var mongoose = require ("mongoose");
var bcrypt = require("bcrypt-nodejs");

var Schema = mongoose.Schema;

var MemberSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true
    }
});

MemberSchema.pre("save", function(next){
    var user = this;
    var SALT_FACTOR = 5;

    if(!user.isModified("password")) return next();
    bcrypt.genSalt(SALT_FACTOR, function(err, salt){
        if(err) return next(err);
        bcrypt.hash(user.password, salt, null, function(err, hash){
            if(err) return next(err);
            user.password = hash;
            next();
        })
    })
})

// MemberSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// MemberSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);
// };

var Member = mongoose.model("Member", MemberSchema);
module.exports = Member;