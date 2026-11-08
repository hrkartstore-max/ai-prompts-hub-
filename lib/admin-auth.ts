import {cookies} from "next/headers";import {SignJWT,jwtVerify} from "jose";
const cookieName="promptspace_admin";function secret(){const value=process.env.ADMIN_JWT_SECRET;if(!value||value.length<32)throw new Error("ADMIN_JWT_SECRET must contain at least 32 characters");return new TextEncoder().encode(value)}
export async function createAdminSession(email:string){return new SignJWT({role:"admin",email}).setProtectedHeader({alg:"HS256"}).setIssuedAt().setExpirationTime("8h").sign(secret())}
export async function isAdmin(){try{const token=(await cookies()).get(cookieName)?.value;if(!token)return false;const {payload}=await jwtVerify(token,secret());return payload.role==="admin"&&payload.email===process.env.ADMIN_EMAIL}catch{return false}}
export const adminCookieName=cookieName;
