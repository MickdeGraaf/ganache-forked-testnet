require("dotenv").config();
const ganache = require("ganache-core");

const config = {
    "fork": `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    "db_path": "./db",
    "network_id": 1,
    "accounts": [
        {
            secretKey: process.env.PRIVATE_KEY,
            balance: "0x33b2e3c9fd0804000000000"
        } 
    ]
}

const server = ganache.server(config);
const provider = server.provider;
server.listen(8545, function(err, blockchain) {});
console.log("Ganache running at port 8545");