
const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'data');
const USERS_FILE = path.join(DATA_PATH, 'users.json');

if (!fs.existsSync(DATA_PATH)) fs.mkdirSync(DATA_PATH);
if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, '[]', 'utf-8');

function readUsers() { return JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8')); }
function writeUsers(users) { fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2)); }

module.exports = {
  findByUsername(username){ return readUsers().find(u => u.username === username) || null; },
  create(user){ const users = readUsers(); users.push(user); writeUsers(users); return user; },
  all(){ return readUsers(); }
};
