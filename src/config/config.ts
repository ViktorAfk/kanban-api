import dotenv from "dotenv";
import path from "path";

const envDot = dotenv.config({ path: path.resolve(__dirname, ".env") });

const defaultPort = "3001";

if (envDot.error ?? !envDot.parsed) {
  console.error(
    "Error while configuring, please check your .env file: ",
    envDot.error,
  );
  process.exit(1);
}

let PORT = envDot.parsed.PORT;

if (
  Number.isInteger(Number(PORT)) &&
  Number(PORT) > 0 &&
  Number(PORT) < 65536
) {
  PORT = defaultPort;
}

export default defaultPort;
