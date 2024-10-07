import fastify, {FastifyInstance}from "fastify"

function build():FastifyInstance {
    const server= fastify();

    server.get('/', async () => {
        return "it's work!";
    })
    return server;

}
export {build};