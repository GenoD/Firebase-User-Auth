const twilio = require ('twilio');
const twilioAuth = require('./twilio_auth');

module.exports = new twilio.Twilio(twilioAuth.accountSid, twilioAuth.authToken);