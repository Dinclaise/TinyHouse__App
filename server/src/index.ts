import express from 'express';
const app = express();
const port = 9000;


app.get("/", (_req, res) => res.send("Hello Again!"));
app.listen(port);

console.log(`[app]: http://localhost:${9000}`);

