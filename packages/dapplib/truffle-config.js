require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index radar over coach honey light army gas'; 
let testAccounts = [
"0x2e84b8a5a0b0d66083df2eb6478f27c09687906081a89030028673a7c4ba67dc",
"0xf8b88da73d1ca6db4f45bfd93a6fb49576b0af9521eba9913c0f5c4746885e04",
"0x9af16af73747e6830a83bf2c60b13b4db2abf85e441a023260de3d59b353cf47",
"0x009851e90d76a7651595b1f448bd38d068673b6224cd54a1b8ac722fb2b79453",
"0x99bfb655df8f6b362f1cca8ece6ddc3adaef0dbb1cad9cf1a1428b1014cd38f4",
"0xffa34ddf9eff82dfb53e4bba8591aa53f3086e4670c5ba0324a8381a2e9e43b9",
"0x0ba7457d522a6ce3e8f6d24d3991eb2012dbd6e736b39727fe32500829f4acc3",
"0x64b0e63212cb26ee6547f94a269363575e1ef00e61f268a2822561a0627a9a7b",
"0xc12c820b0449d95b4b2f48423880e680886c150f345aeeb54f781ef5ea0704f6",
"0xe4cb3b8c5250b8c7f29278c10e8624143f06510a9729983ceeee2ce13c7824f4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


