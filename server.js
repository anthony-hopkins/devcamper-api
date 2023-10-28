import { config } from "dotenv";
// Express is a CommonJS library so does not support {} functionality for import purposes.
import express from "express";

// Load DOTENV configuration and establish environment variables (access through the stdlib process object)
config({ path: './config/config.env' });

// Apply new xpress server to app var.
const app = express();

// Setup port and environment from ENV var. if PORT not available set to 5000 as a default.
const PORT = process.env.PORT || 5000;
const ENVIRONMENT = process.env.NODE_ENV;

// Run the express server and assign the generated values as needed
app.listen(PORT, console.log(`Server running in ${ENVIRONMENT} mode on port ${PORT}`));