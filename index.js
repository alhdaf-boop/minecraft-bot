const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'timbered-saltmarsh.play.hosting',
  port: 25584,
  username: 'AntiAFK_Bot',
  version: false
});

bot.on('spawn', () => {
  console.log('تم دخول البوت إلى السيرفر بنجاح!');
  setInterval(() => {
    bot.setControlState('left', true);
    setTimeout(() => bot.setControlState('left', false), 1000);
    setTimeout(() => {
      bot.setControlState('right', true);
      setTimeout(() => bot.setControlState('right', false), 1000);
    }, 1500);
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
    console.log('تم تنفيذ حركة منع الطرد');
  }, 120000);
});

bot.on('kick', (reason) => {
  console.log(`طرد البوت: ${reason}`);
});

bot.on('error', (err) => {
  console.log(`خطأ: ${err}`);
});
