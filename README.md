# Integer Overflow in Dapp Reward Calculation

This repository demonstrates a common error in decentralized applications (dApps) involving integer overflow in Javascript.  The `calculateReward` function, when given sufficiently large inputs for `amount` and `rate`, can produce inaccurate results due to Javascript's use of double-precision floating-point numbers which have limited precision. This can lead to unexpected rewards and potential vulnerabilities in the dApp.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a corrected version that addresses the integer overflow issue.