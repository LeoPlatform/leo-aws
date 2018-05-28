module.exports = {
	dynamodbrole: function() {
		return {
			AutoScalingRole: {
				"Type": "AWS::IAM::Role",
				"Properties": {
					"AssumeRolePolicyDocument": {
						"Version": "2012-10-17",
						"Statement": [{
							"Effect": "Allow",
							"Principal": {
								"Service": [
									"application-autoscaling.amazonaws.com"
								]
							},
							"Action": [
								"sts:AssumeRole"
							]
						}]
					},
					"Path": "/",
					"Policies": [{
						"PolicyName": "root",
						"PolicyDocument": {
							"Version": "2012-10-17",
							"Statement": [{
								"Effect": "Allow",
								"Action": [
									"dynamodb:DescribeTable",
									"dynamodb:UpdateTable",
									"cloudwatch:PutMetricAlarm",
									"cloudwatch:DescribeAlarms",
									"cloudwatch:GetMetricStatistics",
									"cloudwatch:SetAlarmState",
									"cloudwatch:DeleteAlarms"
								],
								"Resource": "*"
							}]
						}
					}]
				}
			}
		};
	}
};
