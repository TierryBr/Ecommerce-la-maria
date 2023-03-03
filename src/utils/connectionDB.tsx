import mongoose from 'mongoose';

const connectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log('Already connected');
    return;
  }
  mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
