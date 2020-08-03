const EventEmitter = require('events');
const fs = require('fs');

class table extends EventEmitter {
  constructor(name) {
    super();
    this.tableName = name;
    this.events = new EventEmitter();
    this.separator = '/'; if(process.platform === 'win32') this.separator = '\\';
    if(!fs.existsSync(process.cwd() + `${this.separator}database`)) fs.mkdir(process.cwd() + `${this.separator}database${this.separator}`);
    if(!fs.existsSync(process.cwd() + `${this.separator}database${this.separator}${name}`)) {
      const data = fs.mkdirSync(process.cwd() + `${this.separator}database${this.separator}${name}`);
      this.events.emit('tableCreated', data);
    }
  }
}

module.exports = table;
