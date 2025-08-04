// const NAME = process.env.NAME;
// const PORT = process.env.PORT;
// const VERSION = process.env.VERSION
import dotenv from "dotenv"
dotenv.config();
const  config = {
    // name :"Hello",
    name: process.env.NAME || "",
    port: process.env.PORT || 5000,
    version: process.env.VERSION || "0.0.1",
    enableTestFeature:parseInt(process.env.FEATURE_TEST_ENABLED) || false,
};
export default config;