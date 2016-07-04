var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
	nickname: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
});

userSchema.pre('save', function(next){
	var user = this;
	if (!user.isModified('password')){
		return next();
	}
	else {
		user.password = bcryt.hashSync(user.password);
		return next();
	}
});

userSchema.methods.authenticate = function(password){
	var user = this;
	return bcrypt.compareSync(password, user.password);
};

var Userinfo = mongoose.model('userinfo', userSchema);

//모듈 호출시 Userinfo라는 모델을 넣어줌
module.exports = Userinfo;
