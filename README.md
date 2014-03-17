console-timestamp
=================

It's a simple date formatter for Node.js. Perfect for logging.

There's one function: ```timestamp()```

You can call it with a string argument which becomes the format (defaults to ```hh:mm:ss```). It replaces specific parts of this string:

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
console.log(timestamp()); //15:43:20
console.log(timestamp('DD-MM-YYYY hh:mm:ss:iii')); //04-07-2014 14:32:45:891
console.log(timestamp('[SERVER TIME hh:mm] message: ')); //[SERVER TIME 14:23] message: 
```