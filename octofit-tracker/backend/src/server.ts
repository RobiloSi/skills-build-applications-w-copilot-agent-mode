import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const port = Number(process.env.PORT || 8000);
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

async function startServer() {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB at', mongoUri);
    console.log(`Backend listening on ${baseUrl}`);

    app.listen(port, () => {
      console.log(`Server is running at ${baseUrl}`);
    });
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
}

startServer();
