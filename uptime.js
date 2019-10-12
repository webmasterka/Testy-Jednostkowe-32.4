const os = require('os');
const formatDate = require('./index');

const uptime = formatDate(os.uptime());


console.log(`Currect uptime is ${uptime}`);