import{ config } from 'dotenv';
import Iconfig from './IConfig';
config();
const configuration: Iconfig= Object.freeze({
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    secret: process.env.TOKEN_SECRET,
    mongo:process.env.MONGO_URL,
    hpass:process.env.HPASS,
    jpass:process.env.JPASS,
});
export default configuration;