//
// Demo interactive adaptive cards
//
module.exports = function (controller) {

    controller.adapter.registerAdaptiveCardWebhookSubscription(controller.getConfig('webhook_uri'));

    controller.hears('pao-ecard', 'message,direct_message', async (bot, message) => {
        //  await bot.reply(message, "Please, compile the following feedback card");
        let from = await bot.api.people.get(message.actorId);
        console.log("Message from: ", from.displayName);

        if (from.trim === "Paola Mancini".trim) {
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
                                    "text": "DTLAB Napoli: Webex Teams Workshop",
                                    "weight": "Bolder",
                                    "size": "Medium"
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
                                                    "url": `${process.env.PUBLIC_ADDRESS}/www/uff-api.jpg`,
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
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Mi conosco da una vita come Software Developer, mi sento DevNet Evangelist, mi reinvento mamma e mi riscopro come persona ogni giorno. Amo la musica, i colori, la natura e le piccole cose. Non mi piace la stanchezza! Cosa mi aspetto dal workshop? Qualcosa che non mi aspetto.. Che effetto fanno alle persone i miei workshop? ..... l'immagine seguente ne è un esempio...",
                                    "wrap": true,
                                    "color": "Good"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Che effetto fanno alle persone i miei workshop?  \nGuarda tu stesso ...\n",
                                    "weight": "Bolder",
                                    "color": "Accent",
                                    "maxLines": 2,
                                    "spacing": "Small",
                                    "horizontalAlignment": "Center",
                                    "wrap": true
                                },
                                {
                                    "type": "Image",
                                    "url": "https://i.pinimg.com/736x/17/9c/fc/179cfcd504475b3df212495cf9012e0e.jpg",
                                    "size": "auto"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "E tu? Chi sei? Cosa ti piace? Cosa ti aspetti?",
                                    "weight": "Bolder",
                                    "size": "Medium",
                                    "horizontalAlignment": "Left",
                                    "wrap": true,
                                    "spacing": "Small"
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
                                                    "text": "Racconta a Paola qualcosa di te ...",
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



    controller.commandHelp.push({ command: 'xmas_card', text: 'Demo with interactive adaptive cards. Just Paola can use this command' });

}
