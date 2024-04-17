import bcrypt from "bcryptjs"

export const hashPassword = (password) => bcrypt.hashSync(password);
export const verifyPassword = (password, hashedPassword) => bcrypt.compareSync(password, hashedPassword)
