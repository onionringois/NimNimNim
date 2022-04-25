import twilio, { Twilio } from "twilio";
import { MessageInstance } from "twilio/lib/rest/api/v2010/account/message";

const client: Twilio = twilio(process.env.TWILIO_AUTH_TOKEN, process.env.TWILIO_ACCOUNT_SID);

export const sendMessage = (text: string, receivingPhoneNumber: string): Promise<MessageInstance> => {
    return client.messages 
      .create({ 
         body: text, 
         from: 'whatsapp:+14155238886',       
         to: `whatsapp:${receivingPhoneNumber}` 
       });
}