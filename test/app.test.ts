import {describe, expect,it} from '@jest/globals';
import {build as app} from '../src/app';
describe("app",()=>{
    describe("GET / ",()=>{
        it('should return the string it is work! ', async () => {

            // given
            const server = app()
            //when

            const response = await server.inject({
                method: 'GET',
                url: '/'

            });
            //then
            expect(response.statusCode).toBe(200);
            expect(response.body).toBe("it's work!")
        });
    })
})