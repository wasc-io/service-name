import pkgUp from 'read-pkg-up';
import * as express from 'express';

export default (options = {}): express.RequestHandler => {
  if (options.constructor.name === 'IncomingMessage') {
    throw new Error(
      'You might have used the module like `app.use(serviceName)`, but it should be `app.use(serviceVersion()`',
    );
  }
  const name = pkgUp.sync()?.packageJson?.name;

  if (!name) return (req, res, next) => next();

  return function respondVersion(request, response, next) {
    response.header('x-name', name);
    next();
  };
};
