/**
 * @param {import("winston").Logger} logger
 */
export function getRequestLogger(logger) {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} _res
   * @param {import("express").NextFunction} next
   */
  return (req, _res, next) => {
    logger.info(`${req.method} ${req.url}`, { requestId: req.customRequestId });
    next();
  };
}
