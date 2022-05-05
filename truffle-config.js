
var HDWalletProvider = require("truffle-hdwallet-provider");



module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    rinkeby: {
      provider: function() { 
       return new HDWalletProvider('festival fold crane also tomato curtain avocado strategy loan puppy dizzy nut', "https://rinkeby.infura.io/v3/c4c6b0bb89eb4fafb93d9c61cc283d26");
      },
      network_id: 4,
      gas: 4500000,
      confirmation:2,
      timeoutBlocks:200,
      skipDryRun:true
      
    },
  },
 
  compilers :{
    solc:{
      version:"0.8.0"
    }
  }
};
