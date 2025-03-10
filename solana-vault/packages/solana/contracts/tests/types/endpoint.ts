export type Endpoint = {
  "version": "0.1.0",
  "name": "endpoint",
  "instructions": [
    {
      "name": "initEndpoint",
      "docs": [
        "--------------------------- Admin Instructions ---------------------------"
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "endpoint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitEndpointParams"
          }
        }
      ]
    },
    {
      "name": "transferAdmin",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "endpoint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "TransferAdminParams"
          }
        }
      ]
    },
    {
      "name": "setLzToken",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "endpoint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetLzTokenParams"
          }
        }
      ]
    },
    {
      "name": "registerLibrary",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "endpoint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "RegisterLibraryParams"
          }
        }
      ]
    },
    {
      "name": "initDefaultSendLibrary",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "endpoint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "defaultSendLibraryConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitDefaultSendLibraryParams"
          }
        }
      ]
    },
    {
      "name": "setDefaultSendLibrary",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "endpoint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "defaultSendLibraryConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetDefaultSendLibraryParams"
          }
        }
      ]
    },
    {
      "name": "initDefaultReceiveLibrary",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "endpoint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "defaultReceiveLibraryConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitDefaultReceiveLibraryParams"
          }
        }
      ]
    },
    {
      "name": "setDefaultReceiveLibrary",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "endpoint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "defaultReceiveLibraryConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetDefaultReceiveLibraryParams"
          }
        }
      ]
    },
    {
      "name": "setDefaultReceiveLibraryTimeout",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "endpoint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "defaultReceiveLibraryConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetDefaultReceiveLibraryTimeoutParams"
          }
        }
      ]
    },
    {
      "name": "withdrawRent",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "endpoint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "WithdrawRentParams"
          }
        }
      ]
    },
    {
      "name": "registerOapp",
      "docs": [
        "--------------------------- OApp Instructions ---------------------------"
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "oapp",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the OApp"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "RegisterOAppParams"
          }
        }
      ]
    },
    {
      "name": "initNonce",
      "accounts": [
        {
          "name": "delegate",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "only the delegate can initialize the nonce accounts"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nonce",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pendingInboundNonce",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitNonceParams"
          }
        }
      ]
    },
    {
      "name": "initSendLibrary",
      "accounts": [
        {
          "name": "delegate",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "only the delegate can initialize the send_library_config"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sendLibraryConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitSendLibraryParams"
          }
        }
      ]
    },
    {
      "name": "setSendLibrary",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the OApp or delegate"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sendLibraryConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetSendLibraryParams"
          }
        }
      ]
    },
    {
      "name": "initReceiveLibrary",
      "accounts": [
        {
          "name": "delegate",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "only the delegate can initialize the send_library_config"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiveLibraryConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitReceiveLibraryParams"
          }
        }
      ]
    },
    {
      "name": "setReceiveLibrary",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the OApp or delegate"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiveLibraryConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetReceiveLibraryParams"
          }
        }
      ]
    },
    {
      "name": "setReceiveLibraryTimeout",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the OApp or delegate"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiveLibraryConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetReceiveLibraryTimeoutParams"
          }
        }
      ]
    },
    {
      "name": "initConfig",
      "accounts": [
        {
          "name": "delegate",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "only the delegate can initialize the config accounts"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The PDA signer to the message lib when the endpoint calls the message lib program."
          ]
        },
        {
          "name": "messageLib",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "the pda of the message_lib_program"
          ]
        },
        {
          "name": "messageLibProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitConfigParams"
          }
        }
      ]
    },
    {
      "name": "setConfig",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the OApp or delegate"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The PDA signer to the message lib when the endpoint calls the message lib program"
          ]
        },
        {
          "name": "messageLib",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "the pda of the message_lib_program"
          ]
        },
        {
          "name": "messageLibProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetConfigParams"
          }
        }
      ]
    },
    {
      "name": "quote",
      "accounts": [
        {
          "name": "sendLibraryProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sendLibraryConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "defaultSendLibraryConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sendLibraryInfo",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The PDA signer to the send library when the endpoint calls the send library."
          ]
        },
        {
          "name": "endpoint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nonce",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "QuoteParams"
          }
        }
      ],
      "returns": {
        "defined": "MessagingFee"
      }
    },
    {
      "name": "send",
      "accounts": [
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "sendLibraryProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sendLibraryConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "defaultSendLibraryConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sendLibraryInfo",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The PDA signer to the send library when the endpoint calls the send library."
          ]
        },
        {
          "name": "endpoint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nonce",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SendParams"
          }
        }
      ],
      "returns": {
        "defined": "MessagingReceipt"
      }
    },
    {
      "name": "initVerify",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nonce",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payloadHash",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitVerifyParams"
          }
        }
      ]
    },
    {
      "name": "verify",
      "accounts": [
        {
          "name": "receiveLibrary",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the receive library."
          ]
        },
        {
          "name": "receiveLibraryConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "defaultReceiveLibraryConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nonce",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pendingInboundNonce",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payloadHash",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "VerifyParams"
          }
        }
      ]
    },
    {
      "name": "skip",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the OApp or delegate"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nonce",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pendingInboundNonce",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payloadHash",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "the payload hash needs to be initialized before it can be skipped and closed, in order to prevent someone",
            "from skipping a payload hash that has been initialized and can be re-verified and executed after skipping"
          ]
        },
        {
          "name": "endpoint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SkipParams"
          }
        }
      ]
    },
    {
      "name": "burn",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the OApp or delegate"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nonce",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payloadHash",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "close the account and return the lamports to endpoint settings account"
          ]
        },
        {
          "name": "endpoint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "BurnParams"
          }
        }
      ]
    },
    {
      "name": "nilify",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the OApp or delegate"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nonce",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pendingInboundNonce",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payloadHash",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "NilifyParams"
          }
        }
      ]
    },
    {
      "name": "clear",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the OApp or delegate"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nonce",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payloadHash",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "close the account and return the lamports to endpoint settings account"
          ]
        },
        {
          "name": "endpoint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "ClearParams"
          }
        }
      ],
      "returns": {
        "array": [
          "u8",
          32
        ]
      }
    },
    {
      "name": "sendCompose",
      "accounts": [
        {
          "name": "from",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "composeMessage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SendComposeParams"
          }
        }
      ]
    },
    {
      "name": "clearCompose",
      "accounts": [
        {
          "name": "to",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "composeMessage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "ClearComposeParams"
          }
        }
      ]
    },
    {
      "name": "setDelegate",
      "accounts": [
        {
          "name": "oapp",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the OApp"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetDelegateParams"
          }
        }
      ]
    },
    {
      "name": "lzReceiveAlert",
      "accounts": [
        {
          "name": "executor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "LzReceiveAlertParams"
          }
        }
      ]
    },
    {
      "name": "lzComposeAlert",
      "accounts": [
        {
          "name": "executor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "LzComposeAlertParams"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "composeMessageState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "received",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "endpointSettings",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "lzTokenMint",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "oAppRegistry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "delegate",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "messageLibInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "messageLibType",
            "type": {
              "defined": "MessageLibType"
            }
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "messageLibBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "receiveLibraryConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "messageLib",
            "type": "publicKey"
          },
          {
            "name": "timeout",
            "type": {
              "option": {
                "defined": "ReceiveLibraryTimeout"
              }
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "sendLibraryConfig",
      "docs": [
        "the reason for not using Option::None to indicate default is to respect the spec on evm"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "messageLib",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "nonce",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "outboundNonce",
            "type": "u64"
          },
          {
            "name": "inboundNonce",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "payloadHash",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "hash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "pendingInboundNonce",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nonces",
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "InitDefaultReceiveLibraryParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "newLib",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "InitDefaultSendLibraryParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "newLib",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "InitEndpointParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "admin",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "RegisterLibraryParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "libProgram",
            "type": "publicKey"
          },
          {
            "name": "libType",
            "type": {
              "defined": "MessageLibType"
            }
          }
        ]
      }
    },
    {
      "name": "SetDefaultReceiveLibraryParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "newLib",
            "type": "publicKey"
          },
          {
            "name": "gracePeriod",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SetDefaultReceiveLibraryTimeoutParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "lib",
            "type": "publicKey"
          },
          {
            "name": "expiry",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SetDefaultSendLibraryParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "newLib",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "SetLzTokenParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lzToken",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "TransferAdminParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "WithdrawRentParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "InitVerifyParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "srcEid",
            "type": "u32"
          },
          {
            "name": "sender",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "receiver",
            "type": "publicKey"
          },
          {
            "name": "nonce",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "LzComposeAlertParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "from",
            "type": "publicKey"
          },
          {
            "name": "to",
            "type": "publicKey"
          },
          {
            "name": "guid",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "computeUnits",
            "type": "u64"
          },
          {
            "name": "value",
            "type": "u64"
          },
          {
            "name": "message",
            "type": "bytes"
          },
          {
            "name": "extraData",
            "type": "bytes"
          },
          {
            "name": "reason",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "LzReceiveAlertParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "receiver",
            "type": "publicKey"
          },
          {
            "name": "srcEid",
            "type": "u32"
          },
          {
            "name": "sender",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "guid",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "computeUnits",
            "type": "u64"
          },
          {
            "name": "value",
            "type": "u64"
          },
          {
            "name": "message",
            "type": "bytes"
          },
          {
            "name": "extraData",
            "type": "bytes"
          },
          {
            "name": "reason",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "BurnParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "receiver",
            "type": "publicKey"
          },
          {
            "name": "srcEid",
            "type": "u32"
          },
          {
            "name": "sender",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "payloadHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ClearParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "receiver",
            "type": "publicKey"
          },
          {
            "name": "srcEid",
            "type": "u32"
          },
          {
            "name": "sender",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "guid",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "message",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "ClearComposeParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "from",
            "type": "publicKey"
          },
          {
            "name": "guid",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "message",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "InitNonceParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "localOapp",
            "type": "publicKey"
          },
          {
            "name": "remoteEid",
            "type": "u32"
          },
          {
            "name": "remoteOapp",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "InitReceiveLibraryParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "receiver",
            "type": "publicKey"
          },
          {
            "name": "eid",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "InitSendLibraryParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sender",
            "type": "publicKey"
          },
          {
            "name": "eid",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "NilifyParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "receiver",
            "type": "publicKey"
          },
          {
            "name": "srcEid",
            "type": "u32"
          },
          {
            "name": "sender",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "payloadHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "QuoteParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sender",
            "type": "publicKey"
          },
          {
            "name": "dstEid",
            "type": "u32"
          },
          {
            "name": "receiver",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "message",
            "type": "bytes"
          },
          {
            "name": "options",
            "type": "bytes"
          },
          {
            "name": "payInLzToken",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "RegisterOAppParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "delegate",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "SendParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "dstEid",
            "type": "u32"
          },
          {
            "name": "receiver",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "message",
            "type": "bytes"
          },
          {
            "name": "options",
            "type": "bytes"
          },
          {
            "name": "nativeFee",
            "type": "u64"
          },
          {
            "name": "lzTokenFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SendComposeParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "to",
            "type": "publicKey"
          },
          {
            "name": "guid",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "message",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "SetDelegateParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "delegate",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "SetReceiveLibraryParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "receiver",
            "type": "publicKey"
          },
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "newLib",
            "type": "publicKey"
          },
          {
            "name": "gracePeriod",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SetReceiveLibraryTimeoutParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "receiver",
            "type": "publicKey"
          },
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "lib",
            "type": "publicKey"
          },
          {
            "name": "expiry",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SetSendLibraryParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sender",
            "type": "publicKey"
          },
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "newLib",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "SkipParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "receiver",
            "type": "publicKey"
          },
          {
            "name": "srcEid",
            "type": "u32"
          },
          {
            "name": "sender",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "VerifyParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "srcEid",
            "type": "u32"
          },
          {
            "name": "sender",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "receiver",
            "type": "publicKey"
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "payloadHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ReceiveLibraryTimeout",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "messageLib",
            "type": "publicKey"
          },
          {
            "name": "expiry",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "InitConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oapp",
            "type": "publicKey"
          },
          {
            "name": "eid",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "MessageLibType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Send"
          },
          {
            "name": "Receive"
          },
          {
            "name": "SendAndReceive"
          }
        ]
      }
    },
    {
      "name": "MessagingFee",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nativeFee",
            "type": "u64"
          },
          {
            "name": "lzTokenFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "MessagingReceipt",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "guid",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "fee",
            "type": {
              "defined": "MessagingFee"
            }
          }
        ]
      }
    },
    {
      "name": "SetConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oapp",
            "type": "publicKey"
          },
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "configType",
            "type": "u32"
          },
          {
            "name": "config",
            "type": "bytes"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "AdminTransferredEvent",
      "fields": [
        {
          "name": "newAdmin",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "ComposeDeliveredEvent",
      "fields": [
        {
          "name": "from",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "to",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "guid",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "index",
          "type": "u16",
          "index": false
        }
      ]
    },
    {
      "name": "ComposeSentEvent",
      "fields": [
        {
          "name": "from",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "to",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "guid",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "index",
          "type": "u16",
          "index": false
        },
        {
          "name": "message",
          "type": "bytes",
          "index": false
        }
      ]
    },
    {
      "name": "DefaultReceiveLibrarySetEvent",
      "fields": [
        {
          "name": "eid",
          "type": "u32",
          "index": false
        },
        {
          "name": "newLib",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "DefaultReceiveLibraryTimeoutSetEvent",
      "fields": [
        {
          "name": "eid",
          "type": "u32",
          "index": false
        },
        {
          "name": "timeout",
          "type": {
            "option": {
              "defined": "ReceiveLibraryTimeout"
            }
          },
          "index": false
        }
      ]
    },
    {
      "name": "DefaultSendLibrarySetEvent",
      "fields": [
        {
          "name": "eid",
          "type": "u32",
          "index": false
        },
        {
          "name": "newLib",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "DelegateSetEvent",
      "fields": [
        {
          "name": "newDelegate",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "InboundNonceSkippedEvent",
      "fields": [
        {
          "name": "srcEid",
          "type": "u32",
          "index": false
        },
        {
          "name": "sender",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "receiver",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "nonce",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "LibraryRegisteredEvent",
      "fields": [
        {
          "name": "newLib",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newLibProgram",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "LzComposeAlertEvent",
      "fields": [
        {
          "name": "executor",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "from",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "to",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "guid",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "index",
          "type": "u16",
          "index": false
        },
        {
          "name": "computeUnits",
          "type": "u64",
          "index": false
        },
        {
          "name": "value",
          "type": "u64",
          "index": false
        },
        {
          "name": "message",
          "type": "bytes",
          "index": false
        },
        {
          "name": "extraData",
          "type": "bytes",
          "index": false
        },
        {
          "name": "reason",
          "type": "bytes",
          "index": false
        }
      ]
    },
    {
      "name": "LzReceiveAlertEvent",
      "fields": [
        {
          "name": "receiver",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "executor",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "srcEid",
          "type": "u32",
          "index": false
        },
        {
          "name": "sender",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "nonce",
          "type": "u64",
          "index": false
        },
        {
          "name": "guid",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "computeUnits",
          "type": "u64",
          "index": false
        },
        {
          "name": "value",
          "type": "u64",
          "index": false
        },
        {
          "name": "message",
          "type": "bytes",
          "index": false
        },
        {
          "name": "extraData",
          "type": "bytes",
          "index": false
        },
        {
          "name": "reason",
          "type": "bytes",
          "index": false
        }
      ]
    },
    {
      "name": "LzTokenSetEvent",
      "fields": [
        {
          "name": "token",
          "type": {
            "option": "publicKey"
          },
          "index": false
        }
      ]
    },
    {
      "name": "OAppRegisteredEvent",
      "fields": [
        {
          "name": "oapp",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "delegate",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "PacketBurntEvent",
      "fields": [
        {
          "name": "srcEid",
          "type": "u32",
          "index": false
        },
        {
          "name": "sender",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "receiver",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "nonce",
          "type": "u64",
          "index": false
        },
        {
          "name": "payloadHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        }
      ]
    },
    {
      "name": "PacketDeliveredEvent",
      "fields": [
        {
          "name": "srcEid",
          "type": "u32",
          "index": false
        },
        {
          "name": "sender",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "receiver",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "nonce",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "PacketNilifiedEvent",
      "fields": [
        {
          "name": "srcEid",
          "type": "u32",
          "index": false
        },
        {
          "name": "sender",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "receiver",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "nonce",
          "type": "u64",
          "index": false
        },
        {
          "name": "payloadHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        }
      ]
    },
    {
      "name": "PacketSentEvent",
      "fields": [
        {
          "name": "encodedPacket",
          "type": "bytes",
          "index": false
        },
        {
          "name": "options",
          "type": "bytes",
          "index": false
        },
        {
          "name": "sendLibrary",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "PacketVerifiedEvent",
      "fields": [
        {
          "name": "srcEid",
          "type": "u32",
          "index": false
        },
        {
          "name": "sender",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "receiver",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "nonce",
          "type": "u64",
          "index": false
        },
        {
          "name": "payloadHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        }
      ]
    },
    {
      "name": "ReceiveLibrarySetEvent",
      "fields": [
        {
          "name": "receiver",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "eid",
          "type": "u32",
          "index": false
        },
        {
          "name": "newLib",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "ReceiveLibraryTimeoutSetEvent",
      "fields": [
        {
          "name": "receiver",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "eid",
          "type": "u32",
          "index": false
        },
        {
          "name": "timeout",
          "type": {
            "option": {
              "defined": "ReceiveLibraryTimeout"
            }
          },
          "index": false
        }
      ]
    },
    {
      "name": "RentWithdrawnEvent",
      "fields": [
        {
          "name": "receiver",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "SendLibrarySetEvent",
      "fields": [
        {
          "name": "sender",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "eid",
          "type": "u32",
          "index": false
        },
        {
          "name": "newLib",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidSendLibrary"
    },
    {
      "code": 6001,
      "name": "InvalidReceiveLibrary"
    },
    {
      "code": 6002,
      "name": "SameValue"
    },
    {
      "code": 6003,
      "name": "AccountNotFound"
    },
    {
      "code": 6004,
      "name": "OnlySendLib"
    },
    {
      "code": 6005,
      "name": "OnlyReceiveLib"
    },
    {
      "code": 6006,
      "name": "InvalidExpiry"
    },
    {
      "code": 6007,
      "name": "OnlyNonDefaultLib"
    },
    {
      "code": 6008,
      "name": "InvalidAmount"
    },
    {
      "code": 6009,
      "name": "InvalidNonce"
    },
    {
      "code": 6010,
      "name": "Unauthorized"
    },
    {
      "code": 6011,
      "name": "PayloadHashNotFound"
    },
    {
      "code": 6012,
      "name": "ComposeNotFound"
    },
    {
      "code": 6013,
      "name": "InvalidPayloadHash"
    },
    {
      "code": 6014,
      "name": "LzTokenUnavailable"
    },
    {
      "code": 6015,
      "name": "ReadOnlyAccount"
    },
    {
      "code": 6016,
      "name": "InvalidMessageLib"
    },
    {
      "code": 6017,
      "name": "WritableAccountNotAllowed"
    }
  ]
};

export const IDL: Endpoint = {
  "version": "0.1.0",
  "name": "endpoint",
  "instructions": [
    {
      "name": "initEndpoint",
      "docs": [
        "--------------------------- Admin Instructions ---------------------------"
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "endpoint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitEndpointParams"
          }
        }
      ]
    },
    {
      "name": "transferAdmin",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "endpoint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "TransferAdminParams"
          }
        }
      ]
    },
    {
      "name": "setLzToken",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "endpoint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetLzTokenParams"
          }
        }
      ]
    },
    {
      "name": "registerLibrary",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "endpoint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "RegisterLibraryParams"
          }
        }
      ]
    },
    {
      "name": "initDefaultSendLibrary",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "endpoint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "defaultSendLibraryConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitDefaultSendLibraryParams"
          }
        }
      ]
    },
    {
      "name": "setDefaultSendLibrary",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "endpoint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "defaultSendLibraryConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetDefaultSendLibraryParams"
          }
        }
      ]
    },
    {
      "name": "initDefaultReceiveLibrary",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "endpoint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "defaultReceiveLibraryConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitDefaultReceiveLibraryParams"
          }
        }
      ]
    },
    {
      "name": "setDefaultReceiveLibrary",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "endpoint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "defaultReceiveLibraryConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetDefaultReceiveLibraryParams"
          }
        }
      ]
    },
    {
      "name": "setDefaultReceiveLibraryTimeout",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "endpoint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "defaultReceiveLibraryConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetDefaultReceiveLibraryTimeoutParams"
          }
        }
      ]
    },
    {
      "name": "withdrawRent",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "endpoint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "WithdrawRentParams"
          }
        }
      ]
    },
    {
      "name": "registerOapp",
      "docs": [
        "--------------------------- OApp Instructions ---------------------------"
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "oapp",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the OApp"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "RegisterOAppParams"
          }
        }
      ]
    },
    {
      "name": "initNonce",
      "accounts": [
        {
          "name": "delegate",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "only the delegate can initialize the nonce accounts"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nonce",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pendingInboundNonce",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitNonceParams"
          }
        }
      ]
    },
    {
      "name": "initSendLibrary",
      "accounts": [
        {
          "name": "delegate",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "only the delegate can initialize the send_library_config"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sendLibraryConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitSendLibraryParams"
          }
        }
      ]
    },
    {
      "name": "setSendLibrary",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the OApp or delegate"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sendLibraryConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetSendLibraryParams"
          }
        }
      ]
    },
    {
      "name": "initReceiveLibrary",
      "accounts": [
        {
          "name": "delegate",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "only the delegate can initialize the send_library_config"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiveLibraryConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitReceiveLibraryParams"
          }
        }
      ]
    },
    {
      "name": "setReceiveLibrary",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the OApp or delegate"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiveLibraryConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetReceiveLibraryParams"
          }
        }
      ]
    },
    {
      "name": "setReceiveLibraryTimeout",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the OApp or delegate"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiveLibraryConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetReceiveLibraryTimeoutParams"
          }
        }
      ]
    },
    {
      "name": "initConfig",
      "accounts": [
        {
          "name": "delegate",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "only the delegate can initialize the config accounts"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The PDA signer to the message lib when the endpoint calls the message lib program."
          ]
        },
        {
          "name": "messageLib",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "the pda of the message_lib_program"
          ]
        },
        {
          "name": "messageLibProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitConfigParams"
          }
        }
      ]
    },
    {
      "name": "setConfig",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the OApp or delegate"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "messageLibInfo",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The PDA signer to the message lib when the endpoint calls the message lib program"
          ]
        },
        {
          "name": "messageLib",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "the pda of the message_lib_program"
          ]
        },
        {
          "name": "messageLibProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetConfigParams"
          }
        }
      ]
    },
    {
      "name": "quote",
      "accounts": [
        {
          "name": "sendLibraryProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sendLibraryConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "defaultSendLibraryConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sendLibraryInfo",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The PDA signer to the send library when the endpoint calls the send library."
          ]
        },
        {
          "name": "endpoint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nonce",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "QuoteParams"
          }
        }
      ],
      "returns": {
        "defined": "MessagingFee"
      }
    },
    {
      "name": "send",
      "accounts": [
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "sendLibraryProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sendLibraryConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "defaultSendLibraryConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sendLibraryInfo",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The PDA signer to the send library when the endpoint calls the send library."
          ]
        },
        {
          "name": "endpoint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nonce",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SendParams"
          }
        }
      ],
      "returns": {
        "defined": "MessagingReceipt"
      }
    },
    {
      "name": "initVerify",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nonce",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payloadHash",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitVerifyParams"
          }
        }
      ]
    },
    {
      "name": "verify",
      "accounts": [
        {
          "name": "receiveLibrary",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the receive library."
          ]
        },
        {
          "name": "receiveLibraryConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "defaultReceiveLibraryConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nonce",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pendingInboundNonce",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payloadHash",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "VerifyParams"
          }
        }
      ]
    },
    {
      "name": "skip",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the OApp or delegate"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nonce",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pendingInboundNonce",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payloadHash",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "the payload hash needs to be initialized before it can be skipped and closed, in order to prevent someone",
            "from skipping a payload hash that has been initialized and can be re-verified and executed after skipping"
          ]
        },
        {
          "name": "endpoint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SkipParams"
          }
        }
      ]
    },
    {
      "name": "burn",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the OApp or delegate"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nonce",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payloadHash",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "close the account and return the lamports to endpoint settings account"
          ]
        },
        {
          "name": "endpoint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "BurnParams"
          }
        }
      ]
    },
    {
      "name": "nilify",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the OApp or delegate"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nonce",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pendingInboundNonce",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payloadHash",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "NilifyParams"
          }
        }
      ]
    },
    {
      "name": "clear",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the OApp or delegate"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nonce",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payloadHash",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "close the account and return the lamports to endpoint settings account"
          ]
        },
        {
          "name": "endpoint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "ClearParams"
          }
        }
      ],
      "returns": {
        "array": [
          "u8",
          32
        ]
      }
    },
    {
      "name": "sendCompose",
      "accounts": [
        {
          "name": "from",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "composeMessage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SendComposeParams"
          }
        }
      ]
    },
    {
      "name": "clearCompose",
      "accounts": [
        {
          "name": "to",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "composeMessage",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "ClearComposeParams"
          }
        }
      ]
    },
    {
      "name": "setDelegate",
      "accounts": [
        {
          "name": "oapp",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The PDA of the OApp"
          ]
        },
        {
          "name": "oappRegistry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetDelegateParams"
          }
        }
      ]
    },
    {
      "name": "lzReceiveAlert",
      "accounts": [
        {
          "name": "executor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "LzReceiveAlertParams"
          }
        }
      ]
    },
    {
      "name": "lzComposeAlert",
      "accounts": [
        {
          "name": "executor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "LzComposeAlertParams"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "composeMessageState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "received",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "endpointSettings",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "lzTokenMint",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "oAppRegistry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "delegate",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "messageLibInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "messageLibType",
            "type": {
              "defined": "MessageLibType"
            }
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "messageLibBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "receiveLibraryConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "messageLib",
            "type": "publicKey"
          },
          {
            "name": "timeout",
            "type": {
              "option": {
                "defined": "ReceiveLibraryTimeout"
              }
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "sendLibraryConfig",
      "docs": [
        "the reason for not using Option::None to indicate default is to respect the spec on evm"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "messageLib",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "nonce",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "outboundNonce",
            "type": "u64"
          },
          {
            "name": "inboundNonce",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "payloadHash",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "hash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "pendingInboundNonce",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nonces",
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "InitDefaultReceiveLibraryParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "newLib",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "InitDefaultSendLibraryParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "newLib",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "InitEndpointParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "admin",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "RegisterLibraryParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "libProgram",
            "type": "publicKey"
          },
          {
            "name": "libType",
            "type": {
              "defined": "MessageLibType"
            }
          }
        ]
      }
    },
    {
      "name": "SetDefaultReceiveLibraryParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "newLib",
            "type": "publicKey"
          },
          {
            "name": "gracePeriod",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SetDefaultReceiveLibraryTimeoutParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "lib",
            "type": "publicKey"
          },
          {
            "name": "expiry",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SetDefaultSendLibraryParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "newLib",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "SetLzTokenParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lzToken",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "TransferAdminParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "WithdrawRentParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "InitVerifyParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "srcEid",
            "type": "u32"
          },
          {
            "name": "sender",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "receiver",
            "type": "publicKey"
          },
          {
            "name": "nonce",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "LzComposeAlertParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "from",
            "type": "publicKey"
          },
          {
            "name": "to",
            "type": "publicKey"
          },
          {
            "name": "guid",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "computeUnits",
            "type": "u64"
          },
          {
            "name": "value",
            "type": "u64"
          },
          {
            "name": "message",
            "type": "bytes"
          },
          {
            "name": "extraData",
            "type": "bytes"
          },
          {
            "name": "reason",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "LzReceiveAlertParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "receiver",
            "type": "publicKey"
          },
          {
            "name": "srcEid",
            "type": "u32"
          },
          {
            "name": "sender",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "guid",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "computeUnits",
            "type": "u64"
          },
          {
            "name": "value",
            "type": "u64"
          },
          {
            "name": "message",
            "type": "bytes"
          },
          {
            "name": "extraData",
            "type": "bytes"
          },
          {
            "name": "reason",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "BurnParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "receiver",
            "type": "publicKey"
          },
          {
            "name": "srcEid",
            "type": "u32"
          },
          {
            "name": "sender",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "payloadHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ClearParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "receiver",
            "type": "publicKey"
          },
          {
            "name": "srcEid",
            "type": "u32"
          },
          {
            "name": "sender",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "guid",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "message",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "ClearComposeParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "from",
            "type": "publicKey"
          },
          {
            "name": "guid",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "message",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "InitNonceParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "localOapp",
            "type": "publicKey"
          },
          {
            "name": "remoteEid",
            "type": "u32"
          },
          {
            "name": "remoteOapp",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "InitReceiveLibraryParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "receiver",
            "type": "publicKey"
          },
          {
            "name": "eid",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "InitSendLibraryParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sender",
            "type": "publicKey"
          },
          {
            "name": "eid",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "NilifyParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "receiver",
            "type": "publicKey"
          },
          {
            "name": "srcEid",
            "type": "u32"
          },
          {
            "name": "sender",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "payloadHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "QuoteParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sender",
            "type": "publicKey"
          },
          {
            "name": "dstEid",
            "type": "u32"
          },
          {
            "name": "receiver",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "message",
            "type": "bytes"
          },
          {
            "name": "options",
            "type": "bytes"
          },
          {
            "name": "payInLzToken",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "RegisterOAppParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "delegate",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "SendParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "dstEid",
            "type": "u32"
          },
          {
            "name": "receiver",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "message",
            "type": "bytes"
          },
          {
            "name": "options",
            "type": "bytes"
          },
          {
            "name": "nativeFee",
            "type": "u64"
          },
          {
            "name": "lzTokenFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SendComposeParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "to",
            "type": "publicKey"
          },
          {
            "name": "guid",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "message",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "SetDelegateParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "delegate",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "SetReceiveLibraryParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "receiver",
            "type": "publicKey"
          },
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "newLib",
            "type": "publicKey"
          },
          {
            "name": "gracePeriod",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SetReceiveLibraryTimeoutParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "receiver",
            "type": "publicKey"
          },
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "lib",
            "type": "publicKey"
          },
          {
            "name": "expiry",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SetSendLibraryParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sender",
            "type": "publicKey"
          },
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "newLib",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "SkipParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "receiver",
            "type": "publicKey"
          },
          {
            "name": "srcEid",
            "type": "u32"
          },
          {
            "name": "sender",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "VerifyParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "srcEid",
            "type": "u32"
          },
          {
            "name": "sender",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "receiver",
            "type": "publicKey"
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "payloadHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ReceiveLibraryTimeout",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "messageLib",
            "type": "publicKey"
          },
          {
            "name": "expiry",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "InitConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oapp",
            "type": "publicKey"
          },
          {
            "name": "eid",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "MessageLibType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Send"
          },
          {
            "name": "Receive"
          },
          {
            "name": "SendAndReceive"
          }
        ]
      }
    },
    {
      "name": "MessagingFee",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nativeFee",
            "type": "u64"
          },
          {
            "name": "lzTokenFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "MessagingReceipt",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "guid",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "fee",
            "type": {
              "defined": "MessagingFee"
            }
          }
        ]
      }
    },
    {
      "name": "SetConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oapp",
            "type": "publicKey"
          },
          {
            "name": "eid",
            "type": "u32"
          },
          {
            "name": "configType",
            "type": "u32"
          },
          {
            "name": "config",
            "type": "bytes"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "AdminTransferredEvent",
      "fields": [
        {
          "name": "newAdmin",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "ComposeDeliveredEvent",
      "fields": [
        {
          "name": "from",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "to",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "guid",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "index",
          "type": "u16",
          "index": false
        }
      ]
    },
    {
      "name": "ComposeSentEvent",
      "fields": [
        {
          "name": "from",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "to",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "guid",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "index",
          "type": "u16",
          "index": false
        },
        {
          "name": "message",
          "type": "bytes",
          "index": false
        }
      ]
    },
    {
      "name": "DefaultReceiveLibrarySetEvent",
      "fields": [
        {
          "name": "eid",
          "type": "u32",
          "index": false
        },
        {
          "name": "newLib",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "DefaultReceiveLibraryTimeoutSetEvent",
      "fields": [
        {
          "name": "eid",
          "type": "u32",
          "index": false
        },
        {
          "name": "timeout",
          "type": {
            "option": {
              "defined": "ReceiveLibraryTimeout"
            }
          },
          "index": false
        }
      ]
    },
    {
      "name": "DefaultSendLibrarySetEvent",
      "fields": [
        {
          "name": "eid",
          "type": "u32",
          "index": false
        },
        {
          "name": "newLib",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "DelegateSetEvent",
      "fields": [
        {
          "name": "newDelegate",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "InboundNonceSkippedEvent",
      "fields": [
        {
          "name": "srcEid",
          "type": "u32",
          "index": false
        },
        {
          "name": "sender",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "receiver",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "nonce",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "LibraryRegisteredEvent",
      "fields": [
        {
          "name": "newLib",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newLibProgram",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "LzComposeAlertEvent",
      "fields": [
        {
          "name": "executor",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "from",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "to",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "guid",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "index",
          "type": "u16",
          "index": false
        },
        {
          "name": "computeUnits",
          "type": "u64",
          "index": false
        },
        {
          "name": "value",
          "type": "u64",
          "index": false
        },
        {
          "name": "message",
          "type": "bytes",
          "index": false
        },
        {
          "name": "extraData",
          "type": "bytes",
          "index": false
        },
        {
          "name": "reason",
          "type": "bytes",
          "index": false
        }
      ]
    },
    {
      "name": "LzReceiveAlertEvent",
      "fields": [
        {
          "name": "receiver",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "executor",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "srcEid",
          "type": "u32",
          "index": false
        },
        {
          "name": "sender",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "nonce",
          "type": "u64",
          "index": false
        },
        {
          "name": "guid",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "computeUnits",
          "type": "u64",
          "index": false
        },
        {
          "name": "value",
          "type": "u64",
          "index": false
        },
        {
          "name": "message",
          "type": "bytes",
          "index": false
        },
        {
          "name": "extraData",
          "type": "bytes",
          "index": false
        },
        {
          "name": "reason",
          "type": "bytes",
          "index": false
        }
      ]
    },
    {
      "name": "LzTokenSetEvent",
      "fields": [
        {
          "name": "token",
          "type": {
            "option": "publicKey"
          },
          "index": false
        }
      ]
    },
    {
      "name": "OAppRegisteredEvent",
      "fields": [
        {
          "name": "oapp",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "delegate",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "PacketBurntEvent",
      "fields": [
        {
          "name": "srcEid",
          "type": "u32",
          "index": false
        },
        {
          "name": "sender",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "receiver",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "nonce",
          "type": "u64",
          "index": false
        },
        {
          "name": "payloadHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        }
      ]
    },
    {
      "name": "PacketDeliveredEvent",
      "fields": [
        {
          "name": "srcEid",
          "type": "u32",
          "index": false
        },
        {
          "name": "sender",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "receiver",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "nonce",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "PacketNilifiedEvent",
      "fields": [
        {
          "name": "srcEid",
          "type": "u32",
          "index": false
        },
        {
          "name": "sender",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "receiver",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "nonce",
          "type": "u64",
          "index": false
        },
        {
          "name": "payloadHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        }
      ]
    },
    {
      "name": "PacketSentEvent",
      "fields": [
        {
          "name": "encodedPacket",
          "type": "bytes",
          "index": false
        },
        {
          "name": "options",
          "type": "bytes",
          "index": false
        },
        {
          "name": "sendLibrary",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "PacketVerifiedEvent",
      "fields": [
        {
          "name": "srcEid",
          "type": "u32",
          "index": false
        },
        {
          "name": "sender",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        },
        {
          "name": "receiver",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "nonce",
          "type": "u64",
          "index": false
        },
        {
          "name": "payloadHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          },
          "index": false
        }
      ]
    },
    {
      "name": "ReceiveLibrarySetEvent",
      "fields": [
        {
          "name": "receiver",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "eid",
          "type": "u32",
          "index": false
        },
        {
          "name": "newLib",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "ReceiveLibraryTimeoutSetEvent",
      "fields": [
        {
          "name": "receiver",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "eid",
          "type": "u32",
          "index": false
        },
        {
          "name": "timeout",
          "type": {
            "option": {
              "defined": "ReceiveLibraryTimeout"
            }
          },
          "index": false
        }
      ]
    },
    {
      "name": "RentWithdrawnEvent",
      "fields": [
        {
          "name": "receiver",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "SendLibrarySetEvent",
      "fields": [
        {
          "name": "sender",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "eid",
          "type": "u32",
          "index": false
        },
        {
          "name": "newLib",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidSendLibrary"
    },
    {
      "code": 6001,
      "name": "InvalidReceiveLibrary"
    },
    {
      "code": 6002,
      "name": "SameValue"
    },
    {
      "code": 6003,
      "name": "AccountNotFound"
    },
    {
      "code": 6004,
      "name": "OnlySendLib"
    },
    {
      "code": 6005,
      "name": "OnlyReceiveLib"
    },
    {
      "code": 6006,
      "name": "InvalidExpiry"
    },
    {
      "code": 6007,
      "name": "OnlyNonDefaultLib"
    },
    {
      "code": 6008,
      "name": "InvalidAmount"
    },
    {
      "code": 6009,
      "name": "InvalidNonce"
    },
    {
      "code": 6010,
      "name": "Unauthorized"
    },
    {
      "code": 6011,
      "name": "PayloadHashNotFound"
    },
    {
      "code": 6012,
      "name": "ComposeNotFound"
    },
    {
      "code": 6013,
      "name": "InvalidPayloadHash"
    },
    {
      "code": 6014,
      "name": "LzTokenUnavailable"
    },
    {
      "code": 6015,
      "name": "ReadOnlyAccount"
    },
    {
      "code": 6016,
      "name": "InvalidMessageLib"
    },
    {
      "code": 6017,
      "name": "WritableAccountNotAllowed"
    }
  ]
};
