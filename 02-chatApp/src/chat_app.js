import EventEmitter from 'node:events';

const eventEmitter = new EventEmitter();

const sendMessage = ({ userName, message, emitter }) => {
  const timeStamp = new Date().toLocaleString('uk-UA');
  emitter.emit('message', { userName, message, timeStamp });
};

eventEmitter.on('message', (data) => {
  console.log(`[${data.timeStamp}] ${data.userName}: ${data.message}`);
});

sendMessage({
  userName: 'Alex',
  message:
    'После твоей фичи прод лег, тимлид зовёт на созвон — не подключайся!',
  emitter: eventEmitter,
});
sendMessage({
  userName: 'TeamLead',
  message: 'Про твою фичу... есть что обсудить. Вот ссылка, заходи)',
  emitter: eventEmitter,
});
sendMessage({
  userName: 'Ivan',
  message: 'А у нас бэкапы есть?',
  emitter: eventEmitter,
});
