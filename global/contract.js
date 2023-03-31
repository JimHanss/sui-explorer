export const demo_one = {
  abi: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'walletAddress',
          type: 'address',
        },
        {
          internalType: 'string',
          name: 'tag',
          type: 'string',
        },
      ],
      name: 'addTag',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address[]',
          name: 'invitees',
          type: 'address[]',
        },
        {
          internalType: 'string',
          name: 'tokenName',
          type: 'string',
        },
      ],
      name: 'invite',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'searchAllTags',
      outputs: [
        {
          internalType: 'string[]',
          name: '',
          type: 'string[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'tag',
          type: 'string',
        },
      ],
      name: 'searchByTag',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'walletAddress',
          type: 'address',
        },
      ],
      name: 'searchByWallet',
      outputs: [
        {
          internalType: 'string[]',
          name: '',
          type: 'string[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'token',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  address: '0x3c2B60f973430c5ca6D656db141b30298Dd6a52e',
};

export const test_proxy_1 = {
  abi: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'logic',
          type: 'address',
        },
      ],
      stateMutability: 'payable',
      type: 'constructor',
    },
    {
      stateMutability: 'payable',
      type: 'fallback',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_data',
          type: 'uint256',
        },
      ],
      name: 'setData',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  address: '0x00e5d3dcA5F33a94D965158eBabBC0667B0EB70E',
};
