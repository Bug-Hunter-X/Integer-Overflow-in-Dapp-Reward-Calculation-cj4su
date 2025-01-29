```javascript
function calculateReward(amount, rate) {
  if (amount <= 0 || rate <= 0) {
    return 0; // Handle invalid inputs
  }
  // Use BigInt to handle arbitrary-precision integers, preventing overflow
  const amountBigInt = BigInt(amount);
  const rateBigInt = BigInt(rate);
  const rewardBigInt = amountBigInt * rateBigInt;
  // Convert back to a regular number if needed (though potentially still limited by the maximum safe integer)
  return Number(rewardBigInt); 
}
```