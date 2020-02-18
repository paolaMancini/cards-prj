//
// Demo interactive adaptive cards
//
module.exports = function (controller) {

    controller.adapter.registerAdaptiveCardWebhookSubscription(controller.getConfig('webhook_uri'));

    controller.hears('dtlab-card', 'message,direct_message', async (bot, message) => {
        //  await bot.reply(message, "Please, compile the following feedback card");
        let from = await bot.api.people.get(message.actorId);
        console.log("Message from: ", from.displayName);

        if (from.displayName.trim === "Paola Mancini".trim) {
            await bot.reply(message, {
                text: "Best Wishes from Paola Mancini",
                attachments: [
                    {
                        "contentType": "application/vnd.microsoft.card.adaptive",
                        "content": {
                            "type": "AdaptiveCard",
                            "version": "1.0",
                            "body": [
                                {
                                    "type": "TextBlock",
                                    "text": "Webex Teams Workshop  ",
                                    "weight": "Bolder",
                                    "size": "Medium",
                                    "horizontalAlignment": "Center"
                                },
                                {
                                    "type": "ColumnSet",
                                    "columns": [
                                        {
                                            "type": "Column",
                                            "width": "auto",
                                            "items": [
                                                {
                                                    "type": "Image",
                                                    "url": "https://app-cards-prj.herokuapp.com/www/pao.png",
                                                    "size": "Small",
                                                    "style": "Person"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "Column",
                                            "width": "stretch",
                                            "items": [
                                                {
                                                    "type": "TextBlock",
                                                    "text": "Paola Mancini",
                                                    "weight": "Bolder",
                                                    "wrap": true,
                                                    "spacing": "Small",
                                                    "horizontalAlignment": "Left",
                                                    "size": "Medium",
                                                    "color": "Accent"
                                                },
                                                {
                                                    "type": "TextBlock",
                                                    "text": "Senior Software Developer & DevNet Evangelist",
                                                    "spacing": "None"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "SO COME VI SENTITE ALL'IDEA DI SEGUIRE IL WORKSHOP ......",
                                    "weight": "Bolder",
                                    "color": "Warning",
                                    "horizontalAlignment": "Center",
                                    "size": "Medium",
                                    "id": "indovina",
                                    "wrap": true,
                                    "maxLines": 3
                                },
                                {
                                    "type": "Image",
                                    "url": "https://app-cards-prj.herokuapp.com/www/uff-api.png",
                                    "size": "auto",
                                    "horizontalAlignment": "Center",
                                    "backgroundColor": " ",
                                    "spacing": "Medium"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "... Del resto ...",
                                    "spacing": "ExtraLarge",
                                    "horizontalAlignment": "Center",
                                    "size": "Medium",
                                    "weight": "Bolder"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "\n \"Chi vuole il miele deve avere il coraggio di affrontare le API\"                  (Proverbio africano)",
                                    "weight": "Bolder",
                                    "size": "Medium",
                                    "horizontalAlignment": "Left",
                                    "wrap": true,
                                    "spacing": "Small",
                                    "maxLines": 4,
                                    "color": "Good"
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
                                                    "text": "New TextBlock"
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
            await bot.reply(message, "Sorry! Only Paola is authorized to ask for xmas_card!");
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



    controller.commandHelp.push({ command: 'dtlab-card', text: 'Demo with interactive adaptive cards. Just Paola can use this command' });

}
