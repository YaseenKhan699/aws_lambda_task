import AWS from 'aws-sdk';
const dynamo = new AWS.DynamoDB.DocumentClient();

export const handler = async (event) => {
    const body = JSON.parse(event.body);
    const params = {
        TableName: 'table',
        Key: { taskId: body.taskId },
        UpdateExpression: 'set taskName = :name',
        ExpressionAttributeValues: { ':name': body.taskName },
        ReturnValues: 'UPDATED_NEW'
    };

    try {
        const result = await dynamo.update(params).promise();
        return { statusCode: 200, body: JSON.stringify({ message: 'Task updated!', result }) };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
