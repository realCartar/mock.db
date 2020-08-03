const fs = require('fs');

class table {
  constructor(name) {
    if(!name) return console.error(new TypeError('no table name provided'));
    this.tableName = name;
    this.separator = '/'; if(process.platform === 'win32') this.separator = '\\';
    if(!fs.existsSync(process.cwd() + `${this.separator}database`)) fs.mkdirSync(process.cwd() + `${this.separator}database${this.separator}`);
    if(!fs.existsSync(process.cwd() + `${this.separator}database${this.separator}${name}`)) return fs.mkdirSync(process.cwd() + `${this.separator}database${this.separator}${name}`)
  }
}

module.exports = table;
