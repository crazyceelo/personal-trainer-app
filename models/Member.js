import mongoose from "mongoose";

var Schema = mongoose.Schema;

var MemberSchema = new Schema({
    fullName: {
        type: String
    },

    password: {
        type: String
    }
});

var Member = mongoose.model("Member", MemberSchema);
module.exports = Member;