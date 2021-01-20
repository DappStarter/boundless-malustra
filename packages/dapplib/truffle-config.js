require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile pumpkin gesture glove fresh try'; 
let testAccounts = [
"0xedd6c27971d637ea76d2b7e145f8d5846147221896209a5b0d26c0a7232e95aa",
"0x55847d0d3fc417ba8b3fd46091710bf57ee1b5dd36518f97d6d052d56a8832e2",
"0x91cd1e892d7263e089771c23de075ded27f4518a5a6fef7eb1a8e72ffc05d685",
"0xfd79365940451bf4e78abf486087c152b480a68cc58362e4c5e543f6c5dfb042",
"0xc5d2ea5e06232cfad94a3e13fb7cd8a7189ad2f598dc0933b69b3eb7d04fc71b",
"0x48047b6fd09fc331496865270baa5b5a1d6c6fbafb3f923f1f9b176dac77e10f",
"0xf725bd13305156f6cd01d9729fff21e3206f599788368efbe9afbb0ec4157743",
"0xfad6b6f3b6030872a613369be696bb713701e1d814e73ef4239f7ad86336c492",
"0x0e59dace9f7d6796f618c5d4cafd9d87e52b6f6eb4666b157caf7d0dbe564d40",
"0x3d14bdb793dfd55e61545d64719d2990aec29337841bccc9777268c40c666cce"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
