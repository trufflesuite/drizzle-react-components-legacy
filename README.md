# drizzle-react-components
A set of useful components for common UI elements compatible with React Context API v16.3+.

## Components

All components require a `drizzle` and `drizzleState` props. See the [drizzle-react](https://github.com/trufflesuite/drizzle-react) documentation to learn how to create and manage these objects within your application.

### AccountData

`accountIndex` (string, required) Index of the account to get the balance of.

`units` (string) Units to convert balance into; the default is "Wei".

`displayFunc` (function(addr, bal, units)) If given, used to format and display the account data. 

### ContractData

`contract` (string, required) Name of the contract to call.

`method` (string, required) Method of the contract to call.

`methodArgs` (array) Arguments for the contract method call. EX: The address for an ERC20 balanceOf() function. The last argument can optionally be an options object with the typical form, `gas` and `gasPrice` keys.

`hideIndicator` (boolean) If true, hides the loading indicator during contract state updates. Useful for things like ERC20 token symbols that do not change.

`displayFunc` (function(data)) If given, used to format and display the contract data.

`toUtf8` (boolean) Converts the return value to a UTF-8 string before display.

`toAscii` (boolean) Converts the return value to an Ascii string before display.

### ContractForm

`contract` (string, required) Name of the contract whose method will be the basis the form.

`method` (string, required) Method whose inputs will be used to create corresponding form fields.

`sendArgs` (object) An object specifying options for the transaction to be sent; namely: `from`, `gasPrice`, `gas` and `value`. Further explanataion of these parameters can be found [here in the web3 documentation](https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#id19).

`labels` (array) Custom labels; will follow ABI input ordering. Useful for friendlier names. EX: "to" becoming "Recipient Address".

## Example Usage

### AccountData

`<AccountData drizzle={drizzle} drizzleStatus={drizzleStatus} accountIndex='0' units='ether' displayFunc={(addr, bal, units) => (<div><strong>{addr}:</strong> {bal} {units}</div>)} />`

### ContractData

`<ContractData drizzle={drizzle} drizzleStatus={drizzleStatus} contract='MyContract' method='getStructKeys' />`
`<ContractData drizzle={drizzle} drizzleStatus={drizzleStatus} contract='MyContract' method='getStruct' methodArgs=['1'] />`

### ContractForm

`<ContractForm drizzle={drizzle} drizzleStatus={drizzleStatus} contract='MyContract' method='addStruct' />`


