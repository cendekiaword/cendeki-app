
import jwt from "jsonwebtoken";


const key = process.env.NEXT_PUBLIC_JWT_SECRET || ""


export const signToken = (payload) => jwt.sign(payload, key)


export const verifyToken = async (jwt)=>{
  // const secret = new TextEncoder().encode(key)
  const secret = new TextEncoder().encode(key)
  const result = await jose.jwtVerify(jwt, secret)
  // console.log(result);
  
  return result.payload
}
