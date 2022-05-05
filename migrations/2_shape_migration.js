var Shapes = artifacts.require("./Shapes.sol");

module.exports = function(deployer) {
  deployer.deploy(Shapes);
};