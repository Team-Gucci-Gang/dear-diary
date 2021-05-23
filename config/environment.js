const path = require('path')
const development = {
    name: "development",
    secretOrKey: "5D34F7E618B22B4F45EBE2EAE8CDB",
    session_cookie_key: "asifhajosicrh89w34u9rjixp3purhw3oir",
    asset_path: "./assets",
    GOOGLE_APPLICATION_CREDENTIALS: path.join(__dirname, "../config/dear-diary.json")
};
const production = {
    name: "production",
    secretOrKey: "5D34F7E618B22B4F45EBE2EAE8CDB",
    session_cookie_key: "asifhajosicrh89w34u9rjixp3purhw3oir",
    asset_path: "client/build",
    GOOGLE_APPLICATION_CREDENTIALS: path.join(__dirname, "../config/dear-diary.json")
};

module.exports = production;