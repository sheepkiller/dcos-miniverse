{
  "type": "object",
  "properties": {
    "kafka-manager": {
      "description": "Kafka-manager configuration properties",
      "type": "object",
      "properties": {
        "framework-name": {
          "description": "The framework name to register with marathon.",
          "type": "string",
          "default": "kafka-manager"
        },
        "cpus": {
            "description": "CPU shares to allocate.",
            "type": "number",
            "default": 1.0,
            "minimum": 0.1
        },
        "mem": {
            "description": "Memory to allocate.",
            "type": "number",
            "default": 1024.0,
            "minimum": 1024.0
        },
        "zk": {
            "type": "string",
            "description": "ZK URL for Kafka-manager",
            "default": "master.mesos:2181"
        },
        "instances": {
            "description": "app instances",
            "type": "integer",
            "default": 1
        },
        "application_secret": {
            "description": "The secret key is used to secure cryptographics functions",
            "type": "string",
            "default": "^<csmm5Fx4d=r2HEX8pelM3iBkFVv?k[mc;IZE<_Qoq8EkX_/7@Zt6dP05Pzea3U"
        }
      },
      "required": [
        "framework-name",
        "cpus",
        "mem",
        "instances",
        "zk"
      ]
    }
  },
  "required": [
    "kafka-manager"
  ]
}
