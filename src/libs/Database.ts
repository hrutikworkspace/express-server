/* eslint-disable @typescript-eslint/no-extra-semi */
import * as mongoose from 'mongoose';
// import seedData from './seedData';
export interface IDatabaseConfig {
  mongoUrl:string;
  }
export default class Database {
  public static async open(mongoUrl:any) {
    const options = {
      autoIndex:false,
      minpoolsize:10,
    };
    try {
      await mongoose.connect(mongoUrl, options);
      console.log('::Connected with Mongo Successfully::\n');
      // await seedData();
    } catch (err) {
      throw new Error(`unable to connect to database  ${mongoUrl}`);
    }
    mongoose.connection.on('error', () => {
      throw new Error(`Unable to connect to database ${mongoUrl}`);
    });
  }
  public static close() {
    mongoose.disconnect();
  }
}