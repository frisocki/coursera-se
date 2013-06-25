#!/usr/bin/env node

var fs = require('fs');

var outfile = "prime.txt";

var list = new Array();

for(var i=2;list.length<100;i++) {
  if (i > 2 && i % 2 == 0) {continue;}
  if (i > 3 && i % 3 == 0) {continue;}

  if (isPrime(i)) {
    list.push(i);
  }
}

fs.writeFileSync(outfile, list.join(',') + "\n");

function isPrime(n) {
  for (var i=2; i <= Math.sqrt(n); i++) {

    if (n % i == 0) {
      return false;
    }
  }

  return true;
}
