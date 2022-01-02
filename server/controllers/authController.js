const mysqlConf = require('../config/config');

const login = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    mysqlConf.query("SELECT * FROM Users WHERE username = ?", username, (err, result)=> {
        if (err){
            console.log(err);
        }
        if (result.length > 0) {

            req.session.user = result[0].legajo;
            res.send(result)
        } else {
            res.send({message: 'Invalid username.'})
        }
    })
}

const loginCheck = async (req, res, next) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user});
    } else {
        res.send({loggedIn: false});
    };
}

const logout = async (req, res, next) => {
    if(req.session.destroy()) {
        res.clearCookie('userID', {path: '/'}).status(200).send('Ok.');
    }
}

module.exports = { login, loginCheck, logout }