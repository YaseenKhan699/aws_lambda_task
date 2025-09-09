import { handler } from './editTask.js';

const event = {
  body: JSON.stringify({ taskId: '1', taskName: 'Learn AWS Lambda UPDATED' })
};

handler(event)
  .then(response => console.log(response))
  .catch(err => console.error(err));
