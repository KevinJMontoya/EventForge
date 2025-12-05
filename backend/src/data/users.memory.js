export const users = []; // { id, email, passwordHash, role }

let _id = 1;
export function nextId()      { return _id++; }
export function findByEmail(email) { return users.find(u => u.email === email); }
export function findById(id)       { return users.find(u => u.id === id); }
export function insertUser(u)      { users.push(u); return u; }
