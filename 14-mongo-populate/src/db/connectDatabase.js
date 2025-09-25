import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Database connection successfully');
  } catch (error) {
    console.log(`Database connection failed ${error}`);
    console.log(error);
    process.exit(1);
  }

  mongoose.connection.on('error', (err) => {
    console.log('Database runtime error:', err);
  });
};

export default connectDatabase;
