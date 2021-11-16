const {upgrades} = require("hardhat");

async function main() {
    const gnosisSafe = '0xbb9A6Fac5Fe3C1BDfb1795eaE828C8cA3E5fCcd0';

    console.log("Transferring ownership of ProxyAdmin...");
    // The owner of the ProxyAdmin can upgrade our contracts
    await upgrades.admin.transferProxyAdminOwnership(gnosisSafe);
    console.log("Transferred ownership of ProxyAdmin to:", gnosisSafe);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
