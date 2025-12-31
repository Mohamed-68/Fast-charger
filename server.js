import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const ORDERS_FILE = path.join(__dirname, 'orders_backup.json');
const QUERIES_FILE = path.join(__dirname, 'queries_backup.json');

// Ensure files exist
if (!fs.existsSync(ORDERS_FILE)) fs.writeFileSync(ORDERS_FILE, '[]');
if (!fs.existsSync(QUERIES_FILE)) fs.writeFileSync(QUERIES_FILE, '[]');

// Helper to read JSON file
const readJsonFile = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(`Error reading ${filePath}:`, err);
        return [];
    }
};

// Helper to write JSON file
const writeJsonFile = (filePath, data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (err) {
        console.error(`Error writing ${filePath}:`, err);
    }
};

// API: Save Order
app.post('/api/orders', (req, res) => {
    try {
        const newOrder = {
            id: Date.now().toString(),
            date: new Date().toISOString(),
            ...req.body
        };

        const orders = readJsonFile(ORDERS_FILE);
        orders.push(newOrder);
        writeJsonFile(ORDERS_FILE, orders);

        console.log('New Order Received:', newOrder.id);
        res.status(200).json({ success: true, message: 'Order saved successfully', orderId: newOrder.id });
    } catch (error) {
        console.error('Error saving order:', error);
        res.status(500).json({ success: false, message: 'Failed to save order' });
    }
});

// API: Save Query (Support)
app.post('/api/support', (req, res) => {
    try {
        const newQuery = {
            id: Date.now().toString(),
            date: new Date().toISOString(),
            ...req.body
        };

        const queries = readJsonFile(QUERIES_FILE);
        queries.push(newQuery);
        writeJsonFile(QUERIES_FILE, queries);

        console.log('New Query Received:', newQuery.id);
        res.status(200).json({ success: true, message: 'Query saved successfully', queryId: newQuery.id });
    } catch (error) {
        console.error('Error saving query:', error);
        res.status(500).json({ success: false, message: 'Failed to save query' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend Server running on http://localhost:${PORT}`);
});
