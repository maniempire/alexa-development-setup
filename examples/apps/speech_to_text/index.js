var alexa = require('alexa-app');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

// Define an alexa-app
var app = new alexa.app('SpeechToText');

app.launch(function(req,res) {
	res.say("Hello Speak to me!!").shouldEndSession(false);
});
app.intent('NameIntent', {
		"slots":{"NAME":"LITERAL"}
		,"utterances":["{You spoke the following words} {matt|NAME}"]
	},function(req,res) {
		res.say('You Spoke the following words '+req.slot('NAME'));
	}
);

module.exports = app;

