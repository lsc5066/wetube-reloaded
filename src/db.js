import mongoose from "mongoose";

mongoose.connect(DB_URL);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

// .on = 여러 번 발생 가능, .once = 한 번만 발생 가능
db.on("error", handleError);
db.once("open", handleOpen);