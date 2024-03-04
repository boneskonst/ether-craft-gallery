// etherCraftGallery.js
const EtherCraftArtisan = require('ether-craft-artisan');

async function main() {
  const etherCraftArtisan = new EtherCraftArtisan();

  // Craft a contract
  const contractAddress = await etherCraftArtisan.craftContract();
  console.log('Contract crafted at address:', contractAddress);

  // Interact with the crafted contract
  const result = await etherCraftArtisan.interactWithContract(contractAddress);
  console.log('Result from crafted contract:', result);
}

main();
