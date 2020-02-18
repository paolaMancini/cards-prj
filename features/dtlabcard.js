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
                                                    "size": "Small",
                                                    "color": "Accent"
                                                },
                                                {
                                                    "type": "TextBlock",
                                                    "text": "Senior Software Developer & DevNet Evangelist",
                                                    "spacing": "None",
                                                    "size": "Small"
                                                }
                                            ]
                                        }
                                    ],
                                    "spacing": "Small",
                                    "style": "default",
                                    "bleed": true,
                                    "height": "stretch"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "SO COME VI SENTITE ALL'IDEA DI SEGUIRE IL WORKSHOP ......",
                                    "weight": "Bolder",
                                    "color": "Warning",
                                    "horizontalAlignment": "Center",
                                    "size": "Small",
                                    "id": "indovina",
                                    "wrap": true,
                                    "maxLines": 3,
                                    "spacing": "Small"
                                },
                                {
                                    "type": "Image",
                                    "url": "https://app-cards-prj.herokuapp.com/www/uff-api.png",
                                    "size": "auto",
                                    "horizontalAlignment": "Center",
                                    "backgroundColor": " ",
                                    "spacing": "Small",
                                    "height": "159px"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "... DEL RESTO",
                                    "spacing": "Small",
                                    "horizontalAlignment": "Center",
                                    "size": "Small",
                                    "weight": "Bolder"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "\"Chi vuole il miele deve avere il coraggio di affrontare le API\"   \n (Proverbio africano)",
                                    "weight": "Bolder",
                                    "size": "Small",
                                    "horizontalAlignment": "Center",
                                    "wrap": true,
                                    "spacing": "Small",
                                    "maxLines": 4,
                                    "color": "Good"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "SEI PRONTO AD INIZIARE ????",
                                    "spacing": "Small",
                                    "weight": "Bolder"
                                },
                                {
                                    "type": "ActionSet",
                                    "spacing": "None",
                                    "actions": [
                                        {
                                            "type": "Action.ShowCard",
                                            "title": "SI",
                                            "card": {
                                                "type": "AdaptiveCard",
                                                "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                                                "body": [
                                                    {
                                                        "type": "Image",
                                                        "altText": "",
                                                        "url": "https://cdn11.bigcommerce.com/s-jd2vdz6ehx/images/stencil/1280x1280/products/2011/7993/enjoy-the-journey__94235.1573244540.jpg?c=2",
                                                        "horizontalAlignment": "Center",
                                                        "height": "stretch",
                                                        "size": "Large"
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "type": "Action.ShowCard",
                                            "title": "NO",
                                            "card": {
                                                "type": "AdaptiveCard",
                                                "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                                                "body": [
                                                    {
                                                        "type": "TextBlock",
                                                        "text": "... La domanda era retorica ...  \nInizieremo lo stesso ma tu verrai segnalato alle autorità ...",
                                                        "color": "Warning",
                                                        "maxLines": 2,
                                                        "wrap": true,
                                                        "horizontalAlignment": "Center"
                                                    }
                                                ]
                                            },
                                            "style": "destructive"
                                        }
                                    ]
                                }
                            ],

                        }
                    }
                ]
            })
        } else {
            await bot.reply(message, "Sorry! Only Paola is authorized to ask for this card!");
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
                                                "spacing": "None",
                                                "horizontalAlignment": "Left",
                                                "color": "Accent"
                                            },
                                            {
                                                "type": "TextBlock",
                                                "text": "Senior Software Developer & DevNet Evangelist",
                                                "spacing": "Small",
                                                "separator": true
                                            }
                                        ]
                                    }
                                ],
                                "spacing": "Small",
                                "style": "default",
                                "bleed": true,
                                "height": "stretch"
                            },
                            {
                                "type": "TextBlock",
                                "text": "SO COME VI SENTITE ALL'IDEA DI SEGUIRE IL WORKSHOP ......",
                                "weight": "Bolder",
                                "color": "Warning",
                                "horizontalAlignment": "Center",
                                "size": "Small",
                                "id": "indovina",
                                "wrap": true,
                                "maxLines": 3,
                                "separator": true
                            },
                            {
                                "type": "Image",
                                "url": "https://app-cards-prj.herokuapp.com/www/uff-api.png",
                                "size": "auto",
                                "horizontalAlignment": "Center",
                                "backgroundColor": " ",
                                "spacing": "None"
                            },
                            {
                                "type": "TextBlock",
                                "text": "... DEL RESTO",
                                "spacing": "None",
                                "horizontalAlignment": "Center",
                                "weight": "Bolder",
                                "separator": true
                            },
                            {
                                "type": "TextBlock",
                                "text": "\"Chi vuole il miele deve avere il coraggio di affrontare le API\"   (Proverbio africano)",
                                "weight": "Bolder",
                                "horizontalAlignment": "Center",
                                "wrap": true,
                                "spacing": "None",
                                "maxLines": 4,
                                "color": "Good"
                            },
                            {
                                "type": "TextBlock",
                                "text": "SEI PRONTO AD INIZIARE ????",
                                "spacing": "Small",
                                "weight": "Bolder",
                                "separator": true
                            },
                            {
                                "type": "ActionSet",
                                "spacing": "None",
                                "actions": [
                                    {
                                        "type": "Action.ShowCard",
                                        "title": "SI",
                                        "card": {
                                            "type": "AdaptiveCard",
                                            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                                            "body": [
                                                {
                                                    "type": "Image",
                                                    "altText": "",
                                                    "url": "https://cdn11.bigcommerce.com/s-jd2vdz6ehx/images/stencil/1280x1280/products/2011/7993/enjoy-the-journey__94235.1573244540.jpg?c=2",
                                                    "horizontalAlignment": "Center",
                                                    "height": "stretch",
                                                    "size": "Large"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "type": "Action.ShowCard",
                                        "title": "NO",
                                        "card": {
                                            "type": "AdaptiveCard",
                                            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                                            "body": [
                                                {
                                                    "type": "TextBlock",
                                                    "text": "... LA DOMANDA ERA RETORICA ...     Inizieremo lo stesso ma tu verrai segnalato alle autorità ...",
                                                    "color": "Warning",
                                                    "maxLines": 4,
                                                    "wrap": true,
                                                    "horizontalAlignment": "Center",
                                                    "fontType": "Monospace",
                                                    "weight": "Bolder"
                                                }
                                            ],
                                            "verticalContentAlignment": "Center"
                                        },
                                        "style": "destructive"
                                    }
                                ],
                                "isVisible": false
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
