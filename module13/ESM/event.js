const SchoolMan = require('node:events');

class SchoolBel extends SchoolMan {}

const bell = new SchoolBel();
bell.on('event', () => {
  console.log('yaahoooo class ses  ');
});

bell.on('broken', () => {
  console.log('Uhhhh ajk ki r gonta porbe na   ');
});

bell.emit('broken');
bell.emit('event');