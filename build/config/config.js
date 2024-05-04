"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const envDot = dotenv_1.default.config();
const defaultPort = "3001";
if ((_a = envDot.error) !== null && _a !== void 0 ? _a : !envDot.parsed) {
    console.error("Error while configuring, please check your .env file: ", envDot.error);
    process.exit(1);
}
let PORT = envDot.parsed.PORT;
if (Number.isInteger(Number(PORT)) &&
    Number(PORT) > 0 &&
    Number(PORT) < 65536) {
    PORT = defaultPort;
}
exports.default = defaultPort;
