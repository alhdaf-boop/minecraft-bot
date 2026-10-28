const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'timbered-saltmarsh.play.hosting',
  port: 25584,
  username: 'AntiAFK_Bot',
  version: false // لتحديد الإصدار تلقائياً ليتوافق مع السيرفر
});

bot.on('spawn', () => {
  console.log('تم دخول البوت إلى السيرفر بنجاح وجاهز لمنع الخمول!');
  
  // حركة تلقائية كل دقيقتين (120000 ملي ثانية) ليبقى البوت نشطاً
  setInterval(() => {
    bot.setControlState('left', true);
    setTimeout(() => bot.setControlState('left', false), 1000);
    
    setTimeout(() => {
      bot.setControlState('right', true);
      setTimeout(() => bot.setControlState('right', false), 1000);
    }, 1500);

    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
    
    console.log('تم تنفيذ حركة منع الخمول بنجاح.');
  }, 120000);
});

bot.on('kick', (reason) => console.log(`تم طرد البوت بسبب: ${reason}`));
bot.on('error', (err) => console.log(`حدث خطأ: ${err}`));
