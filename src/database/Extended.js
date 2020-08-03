const fs = require('fs');
const table = require('./Base');

class funkytown extends table {
  fetch(entry = String) {
    if(!entry) return console.error(new TypeError('no entry provided when fetching from a table'))
    if(!fs.existsSync(process.cwd() + `${this.separator}database${this.separator}${this.tableName}${this.separator}${entry}.json`)) return null;
    const data = fs.readFileSync(`${process.cwd()}${this.separator}database${this.separator}${this.tableName}${this.separator}${entry}.json`);
    return JSON.parse(data).val;
  }
  set(entry = String, data = Any) {
    if(!entry) return console.error(new TypeError('no entry provided when setting to a table'));
    if(!data) return console.error(new TypeError('no data to set to an entry'));
    let path = `${process.cwd()}${this.separator}database${this.separator}${this.tableName}${this.separator}${entry}.json`;
    if(!fs.existsSync(path)) return fs.appendFileSync(path, JSON.stringify({val: data}));
    else fs.writeFileSync(path, JSON.stringify({val: data}));
    return data;
  }
  delete(entry = String) {
    if(!entry) return console.error(new TypeError('no entry provided when deleting from a table'))
    let path = `${process.cwd()}${this.separator}database${this.separator}${this.tableName}${this.separator}${entry}.json`;
    if(!fs.existsSync(path)) return undefined;
    fs.unlinkSync(path);
    return null;
  }
}

module.exports = funkytown; // xd pls give me money bruv, i spent 5 minutes on this ez pzy lessss gooooooooo
