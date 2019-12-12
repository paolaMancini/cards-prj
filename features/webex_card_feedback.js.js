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

        let hostName = message.value.vmlist;

        await bot.reply(message, {
            text: 'cards',
            attachments: [{

                'contentType': 'application/vnd.microsoft.card.adaptive',
                'content': {
                    'type': 'AdaptiveCard',
                    'version': '1.0',
                    'body': [
                        {
                            'type': 'Image',
                            'url': 'https://www.tdevents.it/wp-content/uploads/2019/11/cisco-ok.jpg',
                            'size': 'auto'
                        },
                        {
                            'type': 'ColumnSet',
                            'columns': [
                                {
                                    'type': 'Column',
                                    'width': 2,
                                    'items': [
                                        {
                                            'type': 'TextBlock',
                                            'text': 'Tell us what you think about the TechData DevNet Training',
                                            'weight': 'Bolder',
                                            'size': 'Medium'
                                        },
                                        {
                                            'type': 'TextBlock',
                                            'text': 'Your name',
                                            'wrap': true
                                        },
                                        {
                                            'type': 'Input.Text',
                                            'id': 'myName',
                                            'placeholder': 'Last, First'
                                        }
                                    ]
                                }
                            ]
                        }

                    ],
                    'actions': [
                        {
                            'type': 'Action.ShowCard',
                            'title': 'Bot, B&C',
                            'card': {
                                'type': 'AdaptiveCard',
                                'body': [

                                    {
                                        'type': 'Input.ChoiceSet',
                                        'id': 'botsId',
                                        'style': 'expanded',
                                        'choices': [
                                            {
                                                'title': 'Below Expectations',
                                                'value': 'Below Expectations'
                                            },
                                            {
                                                'title': 'Average',
                                                'value': 'Average'
                                            },
                                            {
                                                'title': 'Excellent',
                                                'value': 'Excellent'
                                            }
                                        ]
                                    }
                                ],
                                'actions': [
                                    {
                                        'type': 'Action.Submit',
                                        'title': 'OK',
                                        'data': {
                                            'BotChoice': 'bot'
                                        }
                                    }
                                ],
                                '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json'
                            }
                        },
                        {
                            'type': 'Action.ShowCard',
                            'title': 'xAPI',
                            'card': {
                                'type': 'AdaptiveCard',
                                'body': [

                                    {
                                        'type': 'Input.ChoiceSet',
                                        'id': 'xAPI',
                                        'style': 'expanded',
                                        'choices': [
                                            {
                                                'title': 'Below Expectations',
                                                'value': 'Below Expectations'
                                            },
                                            {
                                                'title': 'Average',
                                                'value': 'Average'
                                            },
                                            {
                                                'title': 'Excellent',
                                                'value': 'Excellent'
                                            }
                                        ]
                                    }
                                ],
                                'actions': [

                                ],
                                '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json'
                            }
                        },
                        {
                            'type': 'Action.ShowCard',
                            'title': 'Challenge',
                            'card': {
                                'type': 'AdaptiveCard',
                                'body': [

                                    {
                                        'type': 'Input.ChoiceSet',
                                        'id': 'Challenge',
                                        'style': 'expanded',
                                        'choices': [
                                            {
                                                'title': 'Below Expectations',
                                                'value': 'Below Expectations'
                                            },
                                            {
                                                'title': 'Average',
                                                'value': 'Average'
                                            },
                                            {
                                                'title': 'Excellent',
                                                'value': 'Excellent'
                                            }
                                        ]
                                    }
                                ],
                                'actions': [
                                    {
                                        'type': 'Action.Submit',
                                        'title': 'OK',
                                        'data': {
                                            'ChallengeChoice': 'Challenge'
                                        }
                                    }
                                ],
                                '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json'
                            }
                        },
                        {
                            'type': 'Action.ShowCard',
                            'title': 'Location',
                            'card': {
                                'type': 'AdaptiveCard',
                                'body': [

                                    {
                                        'type': 'Input.ChoiceSet',
                                        'id': 'Location',
                                        'style': 'expanded',
                                        'choices': [
                                            {
                                                'title': 'Below Expectations',
                                                'value': 'Below Expectations'
                                            },
                                            {
                                                'title': 'Average',
                                                'value': 'Average'
                                            },
                                            {
                                                'title': 'Excellent',
                                                'value': 'Excellent'
                                            }
                                        ]
                                    }
                                ],
                                'actions': [

                                ],
                                '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json'
                            }
                        },
                        {
                            'type': 'Action.ShowCard',
                            'title': 'Organization',
                            'card': {
                                'type': 'AdaptiveCard',
                                'body': [

                                    {
                                        'type': 'Input.ChoiceSet',
                                        'id': 'Organization',
                                        'style': 'expanded',
                                        'choices': [
                                            {
                                                'title': 'Below Expectations',
                                                'value': 'Below Expectations'
                                            },
                                            {
                                                'title': 'Average',
                                                'value': 'Average'
                                            },
                                            {
                                                'title': 'Excellent',
                                                'value': 'Excellent'
                                            }
                                        ]
                                    }
                                ],
                                'actions': [
                                    {
                                        'type': 'Action.Submit',
                                        'title': 'Submit',
                                        'data': {
                                            'OrganizationChoice': 'Organization'
                                        }
                                    }
                                ],
                                '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json'
                            }
                        }
                    ]
                }
            ]
        })
    })

    controller.commandHelp.push({ command: 'monitor', text: 'Demo interactive adaptive cards' });

}
