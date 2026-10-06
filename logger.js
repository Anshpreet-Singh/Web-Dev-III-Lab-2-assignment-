// Custom logger middleware: logs method, URL and time of every request
function logger(req, res, next) {
  const time = new Date().toLocaleString();
  console.log(`[${time}] ${req.method} ${req.url}`);
  next();
}

module.exports = logger;
