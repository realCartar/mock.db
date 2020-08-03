const fs = require('fs');
const table = require('./Base');

class funkytown extends table {
  fetch(entry = String) {
    if(!fs.existsSync(process.cwd() + `${this.separator}database${this.separator}${this.tableName}${this.separator}${entry}.json`)) return null;
    const data = fs.readFileSync(`${process.cwd()}${this.separator}database${this.separator}${this.tableName}${this.separator}${entry}.json`);
    return JSON.parse(data).val;
  }
}

module.exports = funkytown; // xd pls give me money bruv, i spent 5 minutes on this ez pzy lessss gooooooooo
