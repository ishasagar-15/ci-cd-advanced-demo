import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const content = `App: ${process.env.APP_NAME}
Build Time: ${new Date().toISOString()}
`;

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/output.txt', content);

console.log("Build completed. File created in dist/output.txt");
