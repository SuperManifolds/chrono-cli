import * as chrono from 'chrono-node'
let result = chrono.parseDate(process.argv[2], {
  'timezone': 'UTC',
  'forwardDate': true
})
console.log(result)
