import P from 'pino'
import pino from "pino";
function build():P.Logger{
    return  pino({
        transport: {
            target: 'pino-pretty'
        }
    })

}

export {build}