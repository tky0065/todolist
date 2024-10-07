/*global console*/

import {build as app} from './app';

const server= app();



// Run the server!
server.listen({ port: 3000 }, function (err, address) {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
    console.log(`Server listening at ${address}`);
})