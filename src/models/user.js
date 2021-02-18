/*
    Chamamos a conexão com o mongo db, e usamos o bcryptjs para emcripitar a senha por segurança
*/
const mongoose = require('../database');
const bcrypt = require('bcryptjs')
 /*
    Criamos os campos que serão enviados ao banco, com o tipo, require sendo campos obrigatórios
 */
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    },
    password:{
        type: String,
        require: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default : Date.now,
    }
})
/*
    Antes de fazer o cadastro eu encripto a senha 
*/
UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    
    next();
})
const User = mongoose.model('User', UserSchema);

module.exports = User;