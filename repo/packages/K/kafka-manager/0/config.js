{
    "type": "object",
    "properties": {
        "kafka-manager": {
            "description": "Kafka Manager configuration properties",
            "type": "object",
            "additionalProperties": false,

            "properties": {
                "app": {
                    "description": "Marathon app configuration properties",
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "cpus": {
                            "description": "cpu requirements",
                            "type": "number",
                            "default": 0.5
                        },
                        "mem": {
                            "description": "mem requirements (this should be approximately 120% of the heap size).",
                            "type": "integer",
                            "default": 512
                        },
                        "heap-mb": {
                            "description": "Heap size for scheduler JVM, in MiB",
                            "type": "integer",
                            "default": 384
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
                    "required": ["cpus", "mem", "instances", "heap-mb"]
                },
                "zk": {
                    "type": "string",
                    "description": "ZK URL for Kafka-manager",
                    "default": "master.mesos:2181"
                }
            },
            "required": [
                "app",
                "zk"
            ]
        }
    }
}
