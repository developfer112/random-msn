const messages = [
     "Fernando",
     "Marysol",
     "Adriana",
     "Leah",
     "Robin",
     "Mario",
     "Ash"
];

const randomMsg = () =>{
     const message = messages[Math.floor(Math.random() * messages.length)];
     console.log(message);
};

module.exports = { randomMsg };