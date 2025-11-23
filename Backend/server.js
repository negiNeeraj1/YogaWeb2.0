import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./config/connectDB.js";
import indexRouter from "./routes/route.js";
import session from "express-session";
import MongoStore from 'connect-mongo';

dotenv.config();

const app = express();

const allowedOrigins = [
    'http://localhost:5173',  // Vite default port (admin panel)
    'http://localhost:3000',  // Client frontend
    'http://localhost:5174',  // Alternative Vite port
    'http://127.0.0.1:5173',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:5174',
];

// app.use(cors({
//     credentials: true,
//     origin: process.env.FRONTEND_URL
// }));

app.use(cors({
    credentials: true,
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps, Postman, etc.)
        if (!origin) {
            callback(null, true);
            return;
        }
        
        // Check if it's a localhost origin (for development)
        const isLocalhost = origin.startsWith('http://localhost:') || 
                           origin.startsWith('http://127.0.0.1:') ||
                           origin.startsWith('http://0.0.0.0:');
        
        // Always allow localhost origins in development (even if NODE_ENV is incorrectly set to 'production')
        // This is safe because localhost can only be accessed from the same machine
        if (isLocalhost) {
            console.log(`✅ Allowing localhost origin: ${origin}`);
            callback(null, true);
            return;
        }
        
        // In production or for specific origins
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.error(`❌ CORS Error: Origin "${origin}" is not allowed.`);
            console.error(`   Allowed origins: ${allowedOrigins.join(', ')}`);
            console.error(`   NODE_ENV: ${process.env.NODE_ENV || 'development (not set)'}`);
            console.error(`   Is localhost: ${isLocalhost}`);
            console.error(`   Is development: ${isDevelopment}`);
            callback(new Error(`Not allowed by CORS. Origin "${origin}" is not in the allowed list.`), false);
        }
    }
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret: process.env.SESSION_SECRET || 'yourSecretKey',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI,
        collectionName: 'sessions'
    }),
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000
    }
}));

app.use(cookieParser());
app.use(morgan('dev'));
app.use(helmet({
    crossOriginResourcePolicy: false
}));

app.use('/api', indexRouter);

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({
        message: "server is running"
    });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "Something went wrong!"
    });
});


connectDB().then(() => {
    const server = app.listen(PORT, () => {
        console.log("🚀Server listening on port🚀", PORT);
    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.error(`❌ Port ${PORT} is already in use. Please either:`);
            console.error(`   1. Stop the process using port ${PORT}`);
            console.error(`   2. Change the PORT in your .env file`);
            console.error(`   3. Use a different port by setting PORT environment variable`);
            process.exit(1);
        } else {
            console.error("❌ Server error:", err);
            process.exit(1);
        }
    });
}).catch(err => {
    console.error("Failed to connect to database:", err);
    process.exit(1);
});