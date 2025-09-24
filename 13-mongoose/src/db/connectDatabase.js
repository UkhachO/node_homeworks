import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

export const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Database connection successfully');
  } catch (error) {
    console.log(`Database connection failed ${error}`);
    console.log(error);
    process.exit(1);
  }
};

export default connectDatabase;
