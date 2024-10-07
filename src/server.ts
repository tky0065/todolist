/*global console*/

import {build as app} from './app';
import {build as buildlogger } from "./logger";

const server= app();
const logger = buildlogger();


// Run the server!
server.listen({ port: 8000 }, function (err:any, address:any) {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
   // console.log(`Server listening at ${address}`);
})