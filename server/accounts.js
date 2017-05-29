ServiceConfiguration.configurations.remove({
    service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: Meteor.settings.facebookCli.CLIENT_ID,
    secret: Meteor.settings.facebookCli.CLIENT_SECRET
});
