import fs from 'fs';

if (fs.existsSync('dist/output.txt')) {
  console.log("Test Passed: Build file exists");
} else {
  console.log("Test Failed: Build file missing");
  process.exit(1);
}
