var TelegramBot = require('node-telegram-bot-api');
var Bluebird = require('bluebird');
const TOKEN = '358236263:AAHDIU40ArA32mfu9mPBzhyq7X9mmEUoIro';

var options = {
  polling: {
    interval: 1000,
    params: 20
  }
}

var bot = new TelegramBot(TOKEN, options);

var botImprov = [];
var genFeedback = [];
var counterBotImprov = 0;
var counterGenFeedback = 0;
var stage = 0;

bot.on('message', function(msg, match)
{
  console.log(msg);
})

bot.onText(/^\/start/i, function(msg,match){
  if (stage===0){
    stage++;
    const menu = {
      reply_markup: {
        keyboard: [
          ['Feedback'],
          ['Order Food']
        ],
        one_time_keyboard: true,
        selective: true,
      }
    }
    bot.sendMessage(msg.chat.id, "Hello there " + msg.from.first_name+ "! Welcome to the BOT of Noctua!\n\nWhat can I help you with?", menu);
    //OrderFood();
    Access();
    Help();
    Feedback();
  }
});

//Bookmarked
/*function OrderFood(){
  bot.onText(/^\/orderfood/i, function(msg, match) {}
}*/

function Access(){
  bot.onText(/^\/access/i, function(msg, match)
  {
    const options = {
      reply_to_message_id: msg.message_id,
      reply_markup: {
        keyboard: [
          ['Bot Improvements'],
          ['General Feedback'],
          ['Both']
        ],
        one_time_keyboard: true,
        selective: true,
      }
    }
    bot.sendMessage(msg.chat.id, 'Which would you like to access?', options);
    bot.once('message', function(msg, match)
    {
      var replyChatId = msg.chat.id;
      var output = "";
      if(msg.text === "Bot Improvements")
      {
        output += "Bot Improvements: \n";
        for(var x = 0; x<counterBotImprov;x++)
        {
          var y = x+1;
          output += y+ ": " + botImprov[x]+"\n";
        }
      }
      else if(msg.text === "General Feedback")
      {
        output += "General Feedback: \n";
        for(var x = 0; x<counterGenFeedback;x++)
        {
          var y = x+1;
          output += y+ ": " + genFeedback[x]+"\n";
        }
      }
      else if(msg.text === "Both")
      {
        output += "Bot Improvements: \n";
        for(var x = 0; x<counterBotImprov;x++)
        {
          var y = x+1;
          output += y+ ": " + botImprov[x]+"\n";
        }
        output += "General Feedback: \n";
        for(var x = 0; x<counterGenFeedback;x++)
        {
          var y = x+1;
          output += y+ ": " + genFeedback[x]+"\n";
        }
      }
      const remove = {
        reply_markup: {
          remove_keyboard: true,
          selective: true
        }
      }
      bot.sendMessage(replyChatId, output, remove);
    })
  });
}

function Help(){
  bot.onText(/^\/help/i, function(msg, match) {
    var replyChatId = msg.chat.id;
    bot.sendMessage(replyChatId, "/feedback - To give feedback to us");
  });
}

function Feedback(){
  bot.onText(/Feedback/i, function(msg, match){
    const options = {
      reply_to_message_id: msg.message_id,
      reply_markup: {
        keyboard: [
          ['Bot Improvements'],
          ['General Feedback']
        ],
        one_time_keyboard: true,
        selective: true
      }
    }
    bot.sendMessage(msg.chat.id, 'Is there any thing particular you want to feedback about?', options);
    bot.once('message', function (msg, match){
      var replyChatId = msg.chat.id;
      function record_BI(msg, match) {
        if(msg.text === "/done") {
          bot.sendMessage(replyChatId, "Thank you for your feedback!\n\nIf your feedback requires a response, we’ll get back to you soon!")
        }
        else {
          botImprov[counterBotImprov] = msg.text + " " + msg.from.first_name;
          counterBotImprov++;
          bot.sendMessage(replyChatId, "Feedback received! Would you like to submit another?\n\nWhen you're done, simply type /done to submit all your responses.");
          bot.once('message', record_BI);
        }
      }
      function record_GF(msg, match) {
        if(msg.text === "/done") {
          bot.sendMessage(replyChatId, "Thank you for your feedback!\n\nIf your feedback requires a response, we’ll get back to you soon!")
        }
        else {
          botImprov[counterBotImprov] = msg.text + " " + msg.from.first_name;
          counterBotImprov++;
          bot.sendMessage(replyChatId, "Feedback received! Would you like to submit another?\n\nWhen you're done, simply type /done to submit all your responses.");
          bot.once('message', record_GF);
        }
      }
      const remove = {
        reply_markup: {
          remove_keyboard: true,
          selective: true
        }
      }
      if(msg.text === "Bot Improvements")
      {
        bot.sendMessage(replyChatId, "Missing a key feature, found a bug that needs fixing, or just want to give us your thoughts? Let us know. :)", remove);
        bot.once('message', record_BI);
      }
      else if(msg.text === "General Feedback")
      {
        bot.sendMessage(replyChatId, "Feel free to tell us anything you want us to know! \nDo note that all responses will be kept private and confidential.", remove);
        bot.once('message', record_GF);
      }
      else {
        console.log("error");
      }
    });
  });
}
