import AWS from 'aws-sdk';
const dynamo = new AWS.DynamoDB.DocumentClient();

export const handler = async (event) => {
    const body = JSON.parse(event.body);
    const params = {
        TableName: 'table',
        Item: { taskId: body.taskId, taskName: body.taskName }
    };

    try {
        await dynamo.put(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Task added!' })
        };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
