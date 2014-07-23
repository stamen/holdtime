# holdtime

Measure time spent waiting for a callback.

## Usage

```javascript
var holdtime = require("holdtime");

fs.readFile("./package.json", holdtime(function(err, body, time) {
  console.log("Read package.json in %dms", time);
}));
```
