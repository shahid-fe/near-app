/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const http = require("http")
const mockserver = require("mockserver")

http.createServer(mockserver("./mock")).listen(5000)

console.log("Mock server started on port 5000...")
