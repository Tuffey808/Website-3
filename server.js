const { spawn } = require("child_process");

const next = spawn("npm", ["run", "start"], {
    studio: "inherit",
    shell: true,
});

next.on("close", (code) => {
    process.exit(code);
});