# Needed
Very simple dependency injection for js

## Install it
`npm install needed --save`

## Use it
Register dependencies
```javascript
var register = require('needed').register;
// ...
register('database', myDbObj);
register('notifier', myNotifier);
```
Use them elsewhere
```javascript
var using = require('needed').using;
using(['database','notifier'], function(db, notifier) {
    db.query(...);
    notifier.push(...);
});
```