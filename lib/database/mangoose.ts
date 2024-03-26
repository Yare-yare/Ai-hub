import mongoose, {Mongoose} from 'mongoose'

const MANGODB_URL = process.env.MONGODB_URL

interface MongooseConnection {
   conn: Mongoose | null
   promise: Promise<Mongoose> | null;
}

/* if there is a already a cached connection exit, optimization is key */
let cached: MongooseConnection = (global as any).mongoose

if(!cached) {
    cached = (global as any).mongoose = { 
      conn: null, promise: null 
    }
  }

  /* connect to the database */
  export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;
  
    if(!MANGODB_URL) throw new Error('Missing MONGODB_URL');
  
    cached.promise = 
      cached.promise || 
      mongoose.connect(MANGODB_URL, { 
        dbName: 'Ai-Hub', bufferCommands: false 
      })
  
    cached.conn = await cached.promise;
  
    return cached.conn;
  }
  