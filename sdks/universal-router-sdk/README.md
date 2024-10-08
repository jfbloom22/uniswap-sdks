# universal-router-sdk
This SDK facilitates interactions with the contracts in [Universal Router](https://github.com/Uniswap/universal-router)

## Usage
Install the latest version of universal-router-sdk. 
```bash 
npm install @uniswap/universal-router-sdk
```
Then import the corresponding Trade class and Data object for each protocol you'd like to interact with.

### Trading on Uniswap
**Note**: `swapERC20CallParameters()` has been deprecated in favor of `swapCallParameters()`

```typescript
import { TradeType, CurrencyAmount, Token, Percent } from '@uniswap/sdk-core'
import { Trade as V2TradeSDK } from '@uniswap/v2-sdk'
import { Trade as V3TradeSDK } from '@uniswap/v3-sdk'
import { Trade as RouterTrade } from '@uniswap/router-sdk'
import { SwapRouter, UNIVERSAL_ROUTER_ADDRESS } from '@uniswap/universal-router-sdk'
import { Percent, Token, TradeType } from '@uniswap/sdk-core'

// Define your tokens
const WETH = new Token(1, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH')
const USDC = new Token(1, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC')

// Create a trade object (this is a simplified example, you'd normally get this from a routing API or SDK)
const trade = new RouterTrade({
  v2Routes: [/* ... */],
  v3Routes: [/* ... */],
  mixedRoutes: [/* ... */],
  tradeType: TradeType.EXACT_INPUT
})

// Define trade options
const options = {
  slippageTolerance: new Percent(50, 10_000), // 0.5% slippage tolerance
  recipient: '0x...',  // The address that will receive the output tokens
  deadlineOrPreviousBlockhash: Math.floor(Date.now() / 1000) + 60 * 20, // 20 minutes from now
}

// Get the parameters for the swap
const { calldata, value } = SwapRouter.swapCallParameters(trade, options)

// Use the calldata and value to send a transaction to the Universal Router
const tx = {
  to: UNIVERSAL_ROUTER_ADDRESS,
  data: calldata,
  value: value
}

// Send the transaction using your preferred method (e.g., ethers.js, web3.js)
const txResponse = await wallet.sendTransaction(tx)
await txResponse.wait()

```

The code above is provided strictly as an example implementation of using the SDK to build a UniversalRouter swap.

## Running this package
Make sure you are running `node v18`

Install dependencies and run typescript unit tests
```bash
yarn install
yarn test:hardhat
```

Run forge integration tests
```bash
forge install
yarn test:forge
```
