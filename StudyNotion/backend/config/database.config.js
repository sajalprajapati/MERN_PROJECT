import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';

configDotenv();


const dbConnect=async() =>
{
    try
    {
     await mongoose.connect(process.env.DATABASE_URL);
     console.log(`Database Connection is Successful`);
    }

    catch(error)
    {
     console.log("There is error in the connection string please correct it!");
     console.error(error);
     process.exit(1);
    }
}


export default dbConnect;