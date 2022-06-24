const main = async () => {   
const transactionFactory = await hre.ethers.getContractFactory('Transactions')
const transactionContract = await transactionFactory.deploy()

await transactionContract.deployed()

console.log('Transaction delopyed to:', transactionContract.address)
}

;(async () => {
    try {
        await main()
        Process.exit(0)
}catch (error) {
    console.error(error)
    process.exit(1)
}
})()
