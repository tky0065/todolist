import Fastify, {FastifyInstance} from "fastify";

function build():FastifyInstance {
    const server= Fastify({logger: true});

    server.get('/', async () => {
        return "it's work!";
    })
    return server;

}
export {build};