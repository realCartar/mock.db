const fs = require('fs'),
      path = require('path'),
      table = require('./Base');

class funkytown extends table {
  fetch(entry = String) {
    if(!entry) return console.error(new TypeError('no entry provided when fetching from a table'))
    if(!fs.existsSync(path.join(process.cwd(), "database", this.tableName, `${entry}.json`))) return null;
    const data = fs.readFileSync(path.join(process.cwd(), "database", this.tableName, `${entry}.json`));
    return JSON.parse(data).val;
  }
  set(entry = String, data = Any) {
    if(!entry) return console.error(new TypeError('no entry provided when setting to a table'));
    if(!data) return console.error(new TypeError('no data to set to an entry'));
    const location = path.join(process.cwd(), "database", this.tableName, `${entry}.json`);
    if(!fs.existsSync(location)) return fs.appendFileSync(location, JSON.stringify({val: data}));
    else fs.writeFileSync(location, JSON.stringify({val: data}));
    return data;
  }
  delete(entry = String) {
    if(!entry) return console.error(new TypeError('no entry provided when deleting from a table'));
    const location = path.join(process.cwd(), "database", this.tableName, `${entry}.json`);
    if(!fs.existsSync(location)) return null;
    fs.unlinkSync(location);
    return null;
  }
}

module.exports = funkytown; // xd pls give me money bruv, i spent 5 minutes on this ez pzy lessss gooooooooo
