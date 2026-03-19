import dotenv from 'dotenv';

dotenv.config();

console.log("App Name:", process.env.APP_NAME);
console.log("Port:", process.env.PORT);
