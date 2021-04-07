const User = require('../models/user');

exports.registerUser = async(req,res,next) => {
    try{
        debugger;
        const [allGroceries] = await User.userRegister(req);
        const [allGroceries1] = await User.userDetailsRegister(req);
        const [allGroceries2] = await User.userPassword(req);
        res.status(200).json(allGroceries)
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
}