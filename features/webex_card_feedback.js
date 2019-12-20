//
// Demo interactive adaptive cards
//
module.exports = function (controller) {

    controller.adapter.registerAdaptiveCardWebhookSubscription(controller.getConfig('webhook_uri'));
    controller.hears('feedback_card', 'message,direct_message', async (bot, message) => {
        //  await bot.reply(message, "Please, compile the following feedback card");
        await bot.reply(message, {
            text: 'Best Wishes from Paola Mancini',
            attachments: [
                {
                    "contentType": "application/vnd.microsoft.card.adaptive",
                    "content": {
                        "type": "AdaptiveCard",
                        "version": "1.0",
                        "body": [
                            {
                                "type": "Image",
                                "url": "https://i.pinimg.com/736x/17/9c/fc/179cfcd504475b3df212495cf9012e0e.jpg",
                                "size": "auto"
                            },
                            {
                                "type": "ColumnSet",
                                "columns": [
                                    {
                                        "type": "Column",
                                        "width": 2,
                                        "items": [
                                            {
                                                "type": "TextBlock",
                                                "text": "May this Christmas fill your heart with warmth and love. I wish you  joy and serendipity for the new year!",
                                                "weight": "Bolder",
                                                "size": "Medium",
                                                "horizontalAlignment": "Center",
                                                "wrap": true,
                                                "spacing": "Small"
                                            },
                                            {
                                                "type": "TextBlock",
                                                "text": "Leave your whishes for Paola",
                                                "wrap": true
                                            },
                                            {
                                                "type": "Input.Text",
                                                "id": "myName",
                                                "placeholder": "..."
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        "actions": [
                            {
                                "type": "Action.Submit",
                                "title": "Send"

                            }
                        ]
                    }
                }
            ]
        })
    })





    controller.on('attachmentActions', async (bot, message) => {

        console.log("message: ", message);
        //  console.log("MESSAGE from: " ,message.personId);
        //console.log("message: ",message.inputs);

        let from = message.incoming_message.from.id;
        var personId = message.personId;
        console.log("========> from: " + from);
        console.log("========> personId: " + personId);


        res= await bot.reply(message, {
            text: 'Answer',
            attachments: [
                {
                    'contentType': 'application/vnd.microsoft.card.adaptive',
                    'content': {
                        'type': 'AdaptiveCard',
                        'version': '1.0',
                        "body": [
                            {
                                "type": "TextBlock",
                                "wrap": true,
                                "text": "Message sent! Thank you " + 'email',
                                "horizontalAlignment": "Center",
                                "color": "Accent",
                                "weight": "Bolder"
                            }
                        ],
                        '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json'
                    }
                }
            ]
        });
        console.log("#### res= " + RES);
    })

 
    controller.commandHelp.push({ command: 'feedback_card', text: 'Demo interactive adaptive cards' });

}
