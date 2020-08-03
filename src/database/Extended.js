const fs = require('fs');
const table = require('./Base');

class funkytown extends table {
  fetch(entry = String) {
    if(!fs.existsSync(process.cwd() + `${this.separator}database${this.separator}${this.tableName}${this.separator}${entry}.json`)) return null;
    const data = fs.readFileSync(`${process.cwd()}${this.separator}database${this.separator}${this.tableName}${this.separator}${entry}.json`);
    return JSON.parse(data).val;
  }
  set(entry = String, data = Any) {
    let path = `${process.cwd()}${this.separator}database${this.separator}${this.tableName}${this.separator}${entry}.json`;
    if(!fs.existsSync(path)) return fs.appendFileSync(path, JSON.stringify({val: data}));
    return data;
  }
  delete(entry = String) {
    let path = `${process.cwd()}${this.separator}database${this.separator}${this.tableName}${this.separator}${entry}.json`;
    if(!fs.existsSync(path)) return undefined;
    fs.unlinkSync(path);
    return null;
  }
}

module.exports = funkytown; // xd pls give me money bruv, i spent 5 minutes on this ez pzy lessss gooooooooo
