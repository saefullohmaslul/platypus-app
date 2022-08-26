const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, prettyPrint, errors } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
    level: 'info',
    format: combine(timestamp(), errors({ stack: true }), myFormat, prettyPrint()),
    defaultMeta: { service: 'platypus' },
    transports: [
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.File({ filename: 'logs/info.log', level: 'info' }),
        new transports.Console(),
    ],
});

module.exports = logger