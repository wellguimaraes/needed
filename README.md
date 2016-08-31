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
```
Use them elsewhere
```javascript
var using = require('needed').using;
using(['database'], function(db) {
    db.query(...);
    // ...
});
```