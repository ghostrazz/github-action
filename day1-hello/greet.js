const who = process.env.GREET_NAME || "world";
const runNumber = process.env.GITHUB_RUN_NUMBER || "local";


// extra comments to show that this is a new version of the file
console.log(`Hello, ${who}! This is run #${runNumber}.`);
