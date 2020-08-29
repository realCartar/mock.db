const fs = require('fs'),
      path = require('path'); // i dumb, i forgot path existed - ooga booga caveman brain.

class table {
  constructor(name) {
    if(!name) return console.error(new TypeError('no table name provided'));
    this.tableName = name;
    if(!fs.existsSync(path.join(process.cwd(), "database"))) fs.mkdirSync(path.join(process.cwd(), "database"));
    if(!fs.existsSync(path.join(process.cwd(), "database", name))) return fs.mkdirSync(path.join(process.cwd(), "database", name))
  }
}

module.exports = table;
