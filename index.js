import { app } from "./app.js";

app.listen(process.env.PORT, () => console.log('Applicatio Run on ', process.env.PORT))