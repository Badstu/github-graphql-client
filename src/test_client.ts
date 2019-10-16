import { GitHubClient } from './index'

import Logger = require("bunyan");

let client = new GitHubClient({
  tokens: ["7a16c2eb85966c1ed19e181111c344e6aae7511c"],
  maxConcurrentReqNumber: 10,
  maxRetryTimes: 5,
  filterStatusCode: [400, 403],
  logger: Logger.createLogger({
    name: "My-Own-Client",
    level: Logger.INFO
  })

});

client.init().then(v => console.log(v));


// async function test_client(query: string) {
//   await client.init();
//   let result: any = await client.query(query, {});
//   console.info(result["viewer"]["followers"]["edges"][0]);
// }

// let query: string = `{
//   viewer {
//     login
//     url
//     id
//     bio
//     createdAt
//     followers(first: 10) {
//       edges {
//         node {
//           name
//           bio
//           email
//           createdAt
//         }
//       }
//     }
//   }
// }`;
// test_client(query)
