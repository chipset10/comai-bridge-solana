import React from 'react';
import logo from './logo.svg';
import './App.css';
import WormholeBridge, { WormholeConnectConfig } from '@wormhole-foundation/wormhole-connect';
import BridgeWidget from './BridgeWidget';

const config: WormholeConnectConfig = {
  env: "mainnet",
  networks: ["ethereum", "solana"],
  tokens: ["ETH", "WETH", "wCOMAI"],
  rpcs: {
    ethereum: "https://rpc.ankr.com/eth",
    solana: "https://rpc.ankr.com/solana",
  },
  mode: "light"
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <WormholeBridge config={config}/> */}
      <BridgeWidget></BridgeWidget>
    </div>
  );
}

export default App;
