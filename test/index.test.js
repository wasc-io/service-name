const pkgUp = require('read-pkg-up');
const serviceName = require('..')();

test('it should check if the header function returns the correct version field', (done) => {
    const request = {};
    const response = {
        header: (name, value) => {
            expect(name).toBe('x-name');
            expect(value).toBe(pkgUp.sync().pkg.name);

            done();
        }
    };
    const next = function () { };

    serviceVersion(request, response, next);
});