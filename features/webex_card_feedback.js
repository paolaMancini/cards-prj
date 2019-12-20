//
// Demo interactive adaptive cards
//
module.exports = function (controller) {

    controller.adapter.registerAdaptiveCardWebhookSubscription(controller.getConfig('webhook_uri'));

    controller.hears('xmas_card', 'message,direct_message', async (bot, message) => {
        //  await bot.reply(message, "Please, compile the following feedback card");
        let from = await bot.api.people.get(message.actorId);
        console.log("Message from: ", from.displayName);

        if (from === 'Paola Mancini') {
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
                                    "type": "TextBlock",
                                    "text": "Christmas Card Messages by Paola Mancini, leveraging  Webex Teams Cards & Buttons",
                                    "color": "Accent",
                                    "wrap": true,
                                    "size": "Medium",
                                    "weight": "Bolder"
                                },
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
                                                    "horizontalAlignment": "Left",
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
        } else {
            await bot.reply(message, 'Sorry! Only Paola is authorized to ask for xmas_card!');
        }

    })


    controller.on('attachmentActions', async (bot, message) => {

        console.log("message: ", message);
        //  console.log("MESSAGE from: " ,message.personId);
        //console.log("message: ",message.inputs);

        //let from = message.incoming_message.from.id;
        //var personId = message.personId;
        //console.log("========> from: " + from);
        //console.log("========> personId: " + personId);

        //get person name
        let person = await bot.api.people.get(message.actorId);
        console.log("Message from: ", person);


        let reply = await bot.reply(message, {
            text: 'This message will be deleted in a few seconds.',
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
                                "text": "Message sent! Thank you " + `${person.displayName}`,
                                "horizontalAlignment": "Left",
                                "color": "Accent",
                                "weight": "Bolder"
                            }
                        ],
                        '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json'
                    }
                }
            ]
        });
        setTimeout(async () => {
            let res = await bot.deleteMessage(reply);
        }, 5000);


    })



    controller.commandHelp.push({ command: 'xmas_card', text: 'Demo with interactive adaptive cards. Just Paola can use this command' });

}
