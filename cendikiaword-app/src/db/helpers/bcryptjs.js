const bcrypt = require("bcryptjs")

const hashPass = (originalPass) => {
    return bcrypt.hashSync(originalPass, 5)
};

const comparePass = (originalPass, hashedPass) => {
    return bcrypt.compareSync(originalPass, hashedPass)
}

module.exports = {hashPass, comparePass};