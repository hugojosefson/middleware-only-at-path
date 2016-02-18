import pathToRegexp from 'path-to-regexp';

/**
 * Only use Express middleware at specific path.
 *
 * Useful with app.use(onlyAt('/', middleware)) so it doesn't run the middleware any deeper than exactly '/'.
 *
 * For example app.use(onlyAt('/', allowMethods(['OPTIONS', 'GET', 'HEAD'])));
 *
 * @param path the express path, just like app.get(path, middleware)
 * @param middleware the middleware function(req, res, next)
 * @param pathToRegexpOptions optional arguments to path-to-regexp
 * @returns {Function} middleware function which forwards to the middleware argument, only when the path matches
 */
export default (path, middleware, pathToRegexpOptions) => {
    const regexp = pathToRegexp(path, [], pathToRegexpOptions);
    return (req, res, next) => {
        if (regexp.test(req.path)) {
            middleware(req, res, next);
        } else {
            next();
        }
    };
}
