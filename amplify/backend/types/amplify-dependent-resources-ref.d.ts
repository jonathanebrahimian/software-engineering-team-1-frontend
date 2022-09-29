export type AmplifyDependentResourcesAttributes = {
    "storage": {
        "SourceTADB": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "Region": "string"
        },
        "Resumes": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "auth": {
        "sourcetasab0a873b": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "fastapirest": {
            "ServiceName": "string",
            "ClusterName": "string",
            "PipelineName": "string",
            "ContainerNames": "string",
            "ApiName": "string",
            "RootUrl": "string"
        }
    }
}