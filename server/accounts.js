ServiceConfiguration.configurations.remove({
    service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: Meteor.settings.facebookCli.CLIENT_ID,
    secret: Meteor.settings.facebookCli.CLIENT_SECRET
});

ServiceConfiguration.configurations.remove({
    service: "google"
});

ServiceConfiguration.configurations.insert({
    service: "google",
    appId: Meteor.settings.googleCli.CLIENT_ID,
    secret: Meteor.settings.googleCli.CLIENT_SECRET
});