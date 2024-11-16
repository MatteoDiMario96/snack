const users = [
    { username: "Matteo", email: "matteo@example.com", age: 28, role: "admin" },
    { username: "Sara", email: "sara@example.com", age: 22, role: "user" },
    { username: "Luca", email: "luca@example.com", age: 35, role: "moderator" },
    { username: "Riccardo", email: "riccardo@example.com", age: 19, role: "user" }
];

// 1. Destrutturare il primo e il secondo utente
const [users1, users2] = users; // Destrutturazione degli array
const { username: username1, age: age1, role: role1 } = users1;
const { username: username2, age: age2, role: role2 } = users2;

console.log(`${username1} is an ${role1} and is ${age1} years old.`);
console.log(`${username2} is an ${role2} and is ${age2} years old.`);

// 2. Usare un ciclo per destrutturare tutti gli utenti
for (const { username, email, age, role } of users) {
    console.log(`My name is ${username} and my role is ${role}`);
}

// 3. Funzione che accetta un utente e restituisce una stringa formattata
function takeUserAndString(user) {
    const { username, role, email } = user;
    return `The user ${username} with email ${email} has the role ${role}.`;
}

console.log(takeUserAndString(users2)); // Passo il secondo utente dell'array

// 4. Filtrare gli utenti con ruolo "user"
const userRoleList = users.filter(({ role }) => role === "user");
userRoleList.forEach(({ username, email }) =>
    console.log(`User: ${username}, Email: ${email}`)
);