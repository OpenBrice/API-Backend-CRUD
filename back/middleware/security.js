const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});

const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 20, 
  message:
    "Nombre trop grand de comptes crées par cette adresse IP",
});

module.exports = createAccountLimiter, apiLimiter;