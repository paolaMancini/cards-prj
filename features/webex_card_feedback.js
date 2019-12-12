//
// Demo interactive adaptive cards
//
module.exports = function (controller) {

    controller.adapter.registerAdaptiveCardWebhookSubscription(controller.getConfig('webhook_uri'));

    controller.hears('feedback_card', 'message,direct_message', async (bot, message) => {
        await bot.reply(message, "Please, compile the following feedback card");
        await bot.reply(message, {
            text: 'VM Monitor',
            attachments: [

            ]
        })
    })

    controller.on('attachmentActions', async (bot, message) => {

        //let hostName = message.value.vmlist;

        await bot.reply(message, "Ok");
    })

    controller.commandHelp.push({ command: 'monitor', text: 'Demo interactive adaptive cards' });

}
