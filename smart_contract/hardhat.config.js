require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/MzQiQogsVI3C7iz_sQluLmiRE6Sqi3Kp',
      accounts: [
        '46554e39122aae08051040d25c506fb7b741ea64423e60348152ba91bbfc3371'
      ],
    },
  },
}