# ds_lab9
## How chat looks like
Chat was created with the help Node.js, which was based on: https://dzone.com/articles/creating-a-chat-application-in-node-js-with-expres
![Chat](https://github.com/KonevDmitry/ds_lab9/blob/master/chat.png)
## Status and config of instances
Below are config and status of each instances during the work:
### First instance
#### rs.status()
```json
{
	"set" : "rs0",
	"date" : ISODate("2019-11-01T19:31:15.465Z"),
	"myState" : 1,
	"term" : NumberLong(1),
	"syncingTo" : "",
	"syncSourceHost" : "",
	"syncSourceId" : -1,
	"heartbeatIntervalMillis" : NumberLong(2000),
	"majorityVoteCount" : 2,
	"writeMajorityCount" : 2,
	"optimes" : {
		"lastCommittedOpTime" : {
			"ts" : Timestamp(1572636666, 1),
			"t" : NumberLong(1)
		},
		"lastCommittedWallTime" : ISODate("2019-11-01T19:31:06.593Z"),
		"readConcernMajorityOpTime" : {
			"ts" : Timestamp(1572636666, 1),
			"t" : NumberLong(1)
		},
		"readConcernMajorityWallTime" : ISODate("2019-11-01T19:31:06.593Z"),
		"appliedOpTime" : {
			"ts" : Timestamp(1572636666, 1),
			"t" : NumberLong(1)
		},
		"durableOpTime" : {
			"ts" : Timestamp(1572636666, 1),
			"t" : NumberLong(1)
		},
		"lastAppliedWallTime" : ISODate("2019-11-01T19:31:06.593Z"),
		"lastDurableWallTime" : ISODate("2019-11-01T19:31:06.593Z")
	},
	"lastStableRecoveryTimestamp" : Timestamp(1572636616, 1),
	"lastStableCheckpointTimestamp" : Timestamp(1572636616, 1),
	"electionCandidateMetrics" : {
		"lastElectionReason" : "electionTimeout",
		"lastElectionDate" : ISODate("2019-11-01T18:04:16.054Z"),
		"termAtElection" : NumberLong(1),
		"lastCommittedOpTimeAtElection" : {
			"ts" : Timestamp(0, 0),
			"t" : NumberLong(-1)
		},
		"lastSeenOpTimeAtElection" : {
			"ts" : Timestamp(1572631445, 1),
			"t" : NumberLong(-1)
		},
		"numVotesNeeded" : 2,
		"priorityAtElection" : 1,
		"electionTimeoutMillis" : NumberLong(10000),
		"numCatchUpOps" : NumberLong(27017),
		"newTermStartDate" : ISODate("2019-11-01T18:04:16.442Z"),
		"wMajorityWriteAvailabilityDate" : ISODate("2019-11-01T18:04:17.134Z")
	},Code for 3 nodes looks the same except global url of instance. Also, have the same config and status:
	"members" : [
		{
			"_id" : 0,
			"name" : "machine1:27017",
			"ip" : "172.31.21.211",
			"health" : 1,
			"state" : 1,
			"stateStr" : "PRIMARY",
			"uptime" : 5625,
			"optime" : {
				"ts" : Timestamp(1572636666, 1),
				"t" : NumberLong(1)
			},
			"optimeDate" : ISODate("2019-11-01T19:31:06Z"),
			"syncingTo" : "",
			"syncSourceHost" : "",
			"syncSourceId" : -1,
			"infoMessage" : "",
			"electionTime" : Timestamp(1572631456, 1),
			"electionDate" : ISODate("2019-11-01T18:04:16Z"),
			"configVersion" : 1,
			"self" : true,
			"lastHeartbeatMessage" : ""
		},
		{
			"_id" : 1,
			"name" : "machine2:27017",
			"ip" : "172.31.28.139",
			"health" : 1,
			"state" : 2,
			"stateStr" : "SECONDARY",
			"uptime" : 5230,
			"optime" : {
				"ts" : Timestamp(1572636666, 1),
				"t" : NumberLong(1)
			},
			"optimeDurable" : {
				"ts" : Timestamp(1572636666, 1),
				"t" : NumberLong(1)
			},
			"optimeDate" : ISODate("2019-11-01T19:31:06Z"),
			"optimeDurableDate" : ISODate("2019-11-01T19:31:06Z"),
			"lastHeartbeat" : ISODate("2019-11-01T19:31:13.513Z"),
			"lastHeartbeatRecv" : ISODate("2019-11-01T19:31:14.301Z"),
			"pingMs" : NumberLong(0),
			"lastHeartbeatMessage" : "",
			"syncingTo" : "machine1:27017",
			"syncSourceHost" : "machine1:27017",
			"syncSourceId" : 0,
			"infoMessage" : "",
			"configVersion" : 1
		},
		{
			"_id" : 2,
			"name" : "machine3:27017",
			"ip" : "172.31.39.149",
			"health" : 1,
			"state" : 2,
			"stateStr" : "SECONDARY",
			"uptime" : 5230,
			"optime" : {
				"ts" : Timestamp(1572636666, 1),
				"t" : NumberLong(1)
			},
			"optimeDurable" : {
				"ts" : Timestamp(1572636666, 1),
				"t" : NumberLong(1)
			},
			"optimeDate" : ISODate("2019-11-01T19:31:06Z"),
			"optimeDurableDate" : ISODate("2019-11-01T19:31:06Z"),
			"lastHeartbeat" : ISODate("2019-11-01T19:31:14.712Z"),
			"lastHeartbeatRecv" : ISODate("2019-11-01T19:31:13.754Z"),
			"pingMs" : NumberLong(0),
			"lastHeartbeatMessage" : "",
			"syncingTo" : "machine1:27017",
			"syncSourceHost" : "machine1:27017",
			"syncSourceId" : 0,
			"infoMessage" : "",
			"configVersion" : 1
		}
	],
	"ok" : 1,
	"$clusterTime" : {
		"clusterTime" : Timestamp(1572636666, 1),
		"signature" : {
			"hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
			"keyId" : NumberLong(0)
		}
	},
	"operationTime" : Timestamp(1572636666, 1)
}
```
#### rs.config()
```json
{
	"_id" : "rs0",
	"version" : 1,
	"protocolVersion" : NumberLong(1),
	"writeConcernMajorityJournalDefault" : true,
	"members" : [
		{
			"_id" : 0,
			"host" : "machine1:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		},
		{
			"_id" : 1,
			"host" : "machine2:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		},
		{
			"_id" : 2,
			"host" : "machine3:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		}
	],
	"settings" : {
		"chainingAllowed" : true,
		"heartbeatIntervalMillis" : 2000,
		"heartbeatTimeoutSecs" : 10,
		"electionTimeoutMillis" : 10000,
		"catchUpTimeoutMillis" : -1,
		"catchUpTakeoverDelayMillis" : 30000,
		"getLastErrorModes" : {
			
		},
		"getLastErrorDefaults" : {
			"w" : 1,
			"wtimeout" : 0
		},
		"replicaSetId" : ObjectId("5dbc739533d40956d3b4eca3")
	}
}

```
### Second (and by fact third) instance
For shortening the report, status and config won't be shown for the third instance
#### rs.status()
```json
{
	"set" : "rs0",
	"date" : ISODate("2019-11-01T19:47:46.804Z"),
	"myState" : 2,
	"term" : NumberLong(1),
	"syncingTo" : "machine1:27017",
	"syncSourceHost" : "machine1:27017",
	"syncSourceId" : 0,
	"heartbeatIntervalMillis" : NumberLong(2000),
	"majorityVoteCount" : 2,
	"writeMajorityCount" : 2,
	"optimes" : {
		"lastCommittedOpTime" : {
			"ts" : Timestamp(1572637664, 1),
			"t" : NumberLong(1)
		},
		"lastCommittedWallTime" : ISODate("2019-11-01T19:47:44.246Z"),
		"readConcernMajorityOpTime" : {
			"ts" : Timestamp(1572637664, 1),
			"t" : NumberLong(1)
		},
		"readConcernMajorityWallTime" : ISODate("2019-11-01T19:47:44.246Z"),
		"appliedOpTime" : {
			"ts" : Timestamp(1572637664, 1),
			"t" : NumberLong(1)
		},
		"durableOpTime" : {
			"ts" : Timestamp(1572637664, 1),
			"t" : NumberLong(1)
		},
		"lastAppliedWallTime" : ISODate("2019-11-01T19:47:44.246Z"),
		"lastDurableWallTime" : ISODate("2019-11-01T19:47:44.246Z")
	},
	"lastStableRecoveryTimestamp" : Timestamp(1572637636, 1),
	"lastStableCheckpointTimestamp" : Timestamp(1572637636, 1),
	"members" : [
		{
			"_id" : 0,
			"name" : "machine1:27017",
			"ip" : "172.31.21.211",
			"health" : 1,
			"state" : 1,
			"stateStr" : "PRIMARY",
			"uptime" : 6221,
			"optime" : {
				"ts" : Timestamp(1572637664, 1),
				"t" : NumberLong(1)
			},
			"optimeDurable" : {
				"ts" : Timestamp(1572637664, 1),
				"t" : NumberLong(1)
			},
			"optimeDate" : ISODate("2019-11-01T19:47:44Z"),
			"optimeDurableDate" : ISODate("2019-11-01T19:47:44Z"),
			"lastHeartbeat" : ISODate("2019-11-01T19:47:46.748Z"),
			"lastHeartbeatRecv" : ISODate("2019-11-01T19:47:45.978Z"),
			"pingMs" : NumberLong(0),
			"lastHeartbeatMessage" : "",
			"syncingTo" : "",
			"syncSourceHost" : "",
			"syncSourceId" : -1,
			"infoMessage" : "",
			"electionTime" : Timestamp(1572631456, 1),
			"electionDate" : ISODate("2019-11-01T18:04:16Z"),
			"configVersion" : 1
		},
		{
			"_id" : 1,
			"name" : "machine2:27017",
			"ip" : "172.31.28.139",
			"health" : 1,
			"state" : 2,
			"stateStr" : "SECONDARY",
			"uptime" : 6604,
			"optime" : {
				"ts" : Timestamp(1572637664, 1),
				"t" : NumberLong(1)
			},
			"optimeDate" : ISODate("2019-11-01T19:47:44Z"),
			"syncingTo" : "machine1:27017",
			"syncSourceHost" : "machine1:27017",
			"syncSourceId" : 0,
			"infoMessage" : "",
			"configVersion" : 1,
			"self" : true,
			"lastHeartbeatMessage" : ""
		},
		{
			"_id" : 2,
			"name" : "machine3:27017",
			"ip" : "172.31.39.149",
			"health" : 1,
			"state" : 2,
			"stateStr" : "SECONDARY",
			"uptime" : 6221,
			"optime" : {
				"ts" : Timestamp(1572637664, 1),
				"t" : NumberLong(1)
			},
			"optimeDurable" : {
				"ts" : Timestamp(1572637664, 1),
				"t" : NumberLong(1)
			},
			"optimeDate" : ISODate("2019-11-01T19:47:44Z"),
			"optimeDurableDate" : ISODate("2019-11-01T19:47:44Z"),
			"lastHeartbeat" : ISODate("2019-11-01T19:47:46.046Z"),
			"lastHeartbeatRecv" : ISODate("2019-11-01T19:47:46.046Z"),
			"pingMs" : NumberLong(0),
			"lastHeartbeatMessage" : "",
			"syncingTo" : "machine1:27017",
			"syncSourceHost" : "machine1:27017",
			"syncSourceId" : 0,
			"infoMessage" : "",
			"configVersion" : 1
		}
	],
	"ok" : 1,
	"$clusterTime" : {
		"clusterTime" : Timestamp(1572637664, 1),
		"signature" : {
			"hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
			"keyId" : NumberLong(0)
		}
	},
	"operationTime" : Timestamp(1572637664, 1)
}
```
#### rs.config()
```json
{
	"_id" : "rs0",
	"version" : 1,
	"protocolVersion" : NumberLong(1),
	"writeConcernMajorityJournalDefault" : true,
	"members" : [
		{
			"_id" : 0,
			"host" : "machine1:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		},
		{
			"_id" : 1,
			"host" : "machine2:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		},
		{
			"_id" : 2,
			"host" : "machine3:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		}
	],
	"settings" : {
		"chainingAllowed" : true,
		"heartbeatIntervalMillis" : 2000,
		"heartbeatTimeoutSecs" : 10,
		"electionTimeoutMillis" : 10000,
		"catchUpTimeoutMillis" : -1,
		"catchUpTakeoverDelayMillis" : 30000,
		"getLastErrorModes" : {
			
		},
		"getLastErrorDefaults" : {
			"w" : 1,
			"wtimeout" : 0
		},
		"replicaSetId" : ObjectId("5dbc739533d40956d3b4eca3")
	}
}
```
