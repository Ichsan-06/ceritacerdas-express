import dotenv from "dotenv";
import app from "./app.js";
import sequelize from "./config/database.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connected to PostgreSQL ichsan");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (error) {
    console.error("❌ Unable to connect to DB:", error);
  }
};

startServer();
