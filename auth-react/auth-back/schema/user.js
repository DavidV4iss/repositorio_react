const {Mongose} = require("mongoose")
const bcrypt = require('bcrypt');

const UserSchema = new Mongose.Shema({
    id: {type: Object},
    username:{type: String, required: true, unique: true},
    password: { type: String, required: true},
    name: { type: String, require: true},
});

UserSchema.pre/('save', function(next){
    if (this.isModified('password') || this.isNew){
        const document = this;
    }
})