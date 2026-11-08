import mongoose from "mongoose";
const uri=process.env.MONGODB_URI;
if(!uri) throw new Error("Please configure MONGODB_URI in your environment variables.");
type Cache={conn:typeof mongoose|null;promise:Promise<typeof mongoose>|null};
const globalCache=globalThis as typeof globalThis&{mongooseCache?:Cache};
const cache=globalCache.mongooseCache??(globalCache.mongooseCache={conn:null,promise:null});
export async function connectDB(){if(cache.conn)return cache.conn;if(!cache.promise)cache.promise=mongoose.connect(uri,{bufferCommands:false});cache.conn=await cache.promise;return cache.conn;}
