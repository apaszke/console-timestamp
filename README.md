console-timestamp
=================

It's a simple date formatter for Node.js. Perfect for logging.

There's only one function.

```timestamp([format, time]);```

Both arguments are optional. You can call it with a string which becomes the format (defaults to ```hh:mm:ss```), while the second argument can be a number or a Date object to print (becomes current time by default). It replaces specific parts of format string:

* ```YYYY``` with  4-digit Year
* ```YY``` with 2-digit Year
* ```MM``` with Month
* ```DD``` with Day
* ```hh``` with Hours
* ```mm``` with Minutes
* ```ss``` with Seconds
* ```iii``` with Miliseconds

Examples
=================

```javascript
var timestamp = require('console-timestamp');

var now = new Date();
var number = 478921;

console.log(timestamp()); //15:43:20
console.log(timestamp('DD-MM-YYYY hh:mm:ss:iii')); //04-07-2014 14:32:45:891
console.log(timestamp('[SERVER TIME hh:mm]')); //[SERVER TIME 14:23]
console.log(timestamp(null, number)); //01:07:58
console.log(timestamp('MM-DD hh:mm', now)); //11-27 12:43
```

Licensed under MIT license. Copyright (c) 2014 Adam Paszke