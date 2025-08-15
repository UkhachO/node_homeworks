import EventEmitter from 'node:events';

const eventEmitter = new EventEmitter();

const sendMessage = (userName, message, emitter) => {
  const timeStamp = new Date().toLocaleString('uk-UA');
  emitter.emit('message', { userName, message, timeStamp });
};

eventEmitter.on('message', (data) => {
  console.log(`[${data.timeStamp}] ${data.userName}: ${data.message}`);
});

sendMessage(
  'Alex',
  'После твоей фичи прод лег, тимлид зовёт на созвон — не подключайся!',
  eventEmitter
);
sendMessage(
  'TeamLead',
  'Про твою фичу... есть что обсудить. Вот ссылка, заходи)',
  eventEmitter
);
sendMessage('Ivan', 'А у нас бэкапы есть?', eventEmitter);
