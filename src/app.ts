import fastify, {FastifyInstance}from "fastify"

function build():FastifyInstance {
    const server= fastify({logger: true});

    server.get('/', async () => {
        return "it's work!";
    })
    return server;

}
export {build};