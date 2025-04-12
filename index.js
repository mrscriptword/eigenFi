const { AptosAccount, AptosClient } = require("aptos");
const prompt = require("prompt-sync")();
const { nodeUrl, privateKey, contractAddress, moduleName } = require("./config");

const client = new AptosClient(nodeUrl);
const account = new AptosAccount(Buffer.from(privateKey, "hex"));

console.log("🔐 Wallet Address Anda:", account.address().hex());

async function sendTransaction(functionName, args = []) {
  const payload = {
    type: "entry_function_payload",
    function: `${contractAddress}::${moduleName}::${functionName}`,
    type_arguments: [],
    arguments: args,
  };

  try {
    const txnRequest = await client.generateTransaction(account.address(), payload);
    const signedTxn = await client.signTransaction(account, txnRequest);
    const response = await client.submitTransaction(signedTxn);

    const hash = response.hash;
    console.log(`🔄 Mengirim transaksi "${functionName}" dengan hash: ${hash}`);
    await client.waitForTransaction(hash);
    console.log(`✅ Transaksi ${functionName} berhasil!\n`);
  } catch (error) {
    console.error("❌ Gagal mengirim transaksi:", error.message);
  }
}

async function main() {
  while (true) {
    console.log("\n=== Movement Bardock Staking CLI ===");
    console.log("1. Stake (10x)");
    console.log("2. Unstake (10x)");
    console.log("3. Claim Reward");
    console.log("0. Keluar");

    const choice = prompt("Pilih aksi [0-3]: ");

    switch (choice) {
      case "1": {
        const amount = prompt("Masukkan jumlah yang ingin di-stake (dalam unit terkecil): ");
        console.log(`🚀 Menjalankan 10x stake dengan jumlah ${amount}...`);
        for (let i = 1; i <= 10; i++) {
          console.log(`➡️ Stake ke-${i}`);
          await sendTransaction("stake", [amount]);
        }
        break;
      }
      case "2": {
        const stakeId = prompt("Masukkan stake ID untuk di-unstake: ");
        console.log(`🚀 Menjalankan 10x unstake dengan ID ${stakeId}...`);
        for (let i = 1; i <= 10; i++) {
          console.log(`➡️ Unstake ke-${i}`);
          await sendTransaction("unstake", [stakeId]);
        }
        break;
      }
      case "3": {
        await sendTransaction("claim_reward");
        break;
      }
      case "0":
        console.log("👋 Keluar dari program. Sampai jumpa!");
        return;
      default:
        console.log("❗ Pilihan tidak valid.");
    }
  }
}

main();
