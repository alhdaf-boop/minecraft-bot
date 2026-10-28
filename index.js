const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'timbered-saltmarsh.play.hosting',
  port: 25584,
  username: 'AntiAFK_Bot',
  version: '1.20.4' // تحديد الإصدار بدقة ليوافق سيرفر Paper
});

bot.on('spawn', () => {
  console.log('تم دخول البوت إلى السيرفر بنجاح!');
  
  // حركة بسيطة لمنع الطرد بسبب الخمول (AFK)
  setInterval(() => {
    bot.setControlState('left', true);
    setTimeout(() => bot.setControlState('left', false), 1000);
    setTimeout(() => {
      bot.setControlState('right', true);
      setTimeout(() => bot.setControlState('right', false), 1000);
    }, 2000);
  }, 15000);
});

bot.on('error', (err) => {
  console.log('خطأ في اتصال البوت:', err);
});

bot.on('kicked', (reason) => {
  console.log('تم طرد البوت من السيرفر بسبب:', reason);
});
