const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PinaCoin", function () {
    it('Should create initial supply correctly', async () => {
        const PinaCoin = await ethers.getContractFactory('PinaCoin');
        const totalSupply = hre.ethers.BigNumber.from('1000000000000000000000000');
        const deployed = await PinaCoin.deploy(totalSupply, "Example", "EXP")

        expect(await deployed.totalSupply()).to.equal(totalSupply);
    })
})

