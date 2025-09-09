import { handler } from './addTask.js';

const event = {
    body: JSON.stringify({ taskId: '1', taskName: 'Learn AWS Lambda' })
};

handler(event).then(response => {
    console.log(response);
}).catch(err => {
    console.error(err);
});
