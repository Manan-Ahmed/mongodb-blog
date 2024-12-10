import mongoose from "mongoose"
export  async function connectDB() {
    let isConnected = false

    try{
        let connected =  await mongoose.connect(process.env.MONGODB_URI as string)
        console.log("DB is connected succesfully",connected);
        
        if(connected.connection.readyState == 1) isConnected = true

        
    }catch(err){
console.log(err);

    }
}