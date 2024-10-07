import Fastify, {FastifyInstance} from 'fastify';
//import {build as log} from "./logger";

function build():FastifyInstance {

    const server= Fastify({logger:true});

    server.get('/', async () => {
        return "it's work!";
    })
    return server;

}
export {build};