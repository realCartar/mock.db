# mock.db
Lemme drive the bus.
This 👏 is 👏 the 👏 most 👏 efficient 👏 database 👏 to 👏 date.

# Documetation

> How to initiate a table
```js
const db = require('mock.db'),
      table = new db.table('test_table');
```

> How to set data to an entry
```js
const db = require('mock.db'),
      table = new db.table('test_table');
table.set('entry_name', {name: 'jeff bezos', age: 14, description: null});
```

> How to fetch data from an entry
```js
const db = require('mock.db'),
      table = new db.table('test_table');
table.fetch('entry_name') // expected output: {name: 'jeff bezos', age: 14, description: null}
