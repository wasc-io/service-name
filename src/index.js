import pkgUp from 'read-pkg-up';

export default (options = {}) => {
  if (options.constructor.name === 'IncomingMessage') {
    throw new Error(
      'You might have used the module like `app.use(serviceName)`, but it should be `app.use(serviceName()`',
    );
  }
  const { name } = pkgUp.sync().packageJson;

  return function respondName(request, response, next) {
    response.header('x-name', name);
    next();
  };
};
