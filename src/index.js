'use strict'
import pkgUp from 'read-pkg-up';

export default (options) => {
    options = options || {};

    if (options.constructor.name === 'IncomingMessage') {
        throw new Error('You might have used the module like `app.use(serviceName)`, but it should be `app.use(serviceName()`');
    }

    return function version(request, response, next) {
        response.header('x-name', pkgUp.sync().pkg.name);
        next();
    }
}