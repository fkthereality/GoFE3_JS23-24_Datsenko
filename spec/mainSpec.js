var load = require('../js/main.js');//запрос main.js => module.exports
describe("", function () {
        var elemP = load.pow(4,2);
        it('', function(){
            expect(elemP).toBe(16);
        });
});