#!/usr/bin/env node
const request = require("superagent");

const args = process.argv;

if (args[2] === "-a") {
  setInterval(() => {
    request
      .get(
        "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR,ETH"
      )
      .end((err, data) => {
        console.log("\x1Bc");
        const currency = JSON.parse(data.text);
        console.log("Current ETHEREUM price:");
        for (let x in currency) {
          console.log(`${x}: ${currency[x]}`);
        }
      });
  }, 1000);
}
