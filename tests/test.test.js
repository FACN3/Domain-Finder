var test = require('tape');

test('should return -1 when the value is not present in the Array', function(t) {
  t.equal(-1, [1,2,3].indexOf(4)); // 4 is not in the Array so test passes.
  t.end();
});
