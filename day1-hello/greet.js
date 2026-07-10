const who = process.env.GREET_NAME || "world";
const runNumber = process.env.GITHUB_RUN_NUMBER || "local";

console.log(`Hello, ${who}! This is run #${runNumber}.`);
