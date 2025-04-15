const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID === undefined ? 'PANDA-MD~CQEBxZyT#hdBlJjRcxPYIciHyPhEABW-gPMrgNaBsvGDEn2N6_Hg' : process.env.SESSION_ID,
    PREFIX: process.env.PREFIX || '.',
    SUDO: process.env.SUDO === undefined ? '94702544650' : process.env.SUDO,
 AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ? "true" : process.env.AUTO_READ_STATUS,
    MODE: process.env.MODE === undefined ? "public" : process.env.MODE,
    ANTI_DELETE: process.env.ANTI_DELETE === undefined ? "true" : process.env.ANTI_DELETE,
    ANTI_BOT: process.env.ANTI_BOT === undefined ? "false" : process.env.ANTI_BOT,
};
