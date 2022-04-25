import twilio, { Twilio } from "twilio";
import { MessageInstance } from "twilio/lib/rest/api/v2010/account/message";
import type { NextApiRequest, NextApiResponse } from 'next'

const client: Twilio = twilio(process.env.TWILIO_AUTH_TOKEN, process.env.TWILIO_ACCOUNT_SID);

const sendMessage = (text: string, receivingPhoneNumber: string): Promise<MessageInstance> => {
    return client.messages 
      .create({ 
         body: text, 
         from: 'whatsapp:+14155238886',       
         to: `whatsapp:${receivingPhoneNumber}` 
       });
}

const distribute = async (): Promise<void> => {
  const people = (await import('./peopleMockData.json')).default;
  const stages = (await import('./stagesMockData.json')).default;
  const authorities = (await import('./weaponAuthority.json')).default;

  const approvers = people.filter((person) => person.rankId > 0);

  approvers.forEach(async (approver) => {
    const stagesToApprove = stages.filter((stage) => 
        !stage.approvingAuthority &&
        authorities.some((authority) => 
            authority.approverId === approver.id && 
            authority.stageTypeId === stage.id
        )
    );

    if (stagesToApprove.length) {
        const countText = stagesToApprove.length === 1 ? 'יש לך בקשה אחת פתוחה' : `יש לך ${stagesToApprove.length} בקשות פתוחות`
        const text = `${countText} לאישור טופס נשק.\nלאישורים עקבו אחרי הלינק הבא!\nhttps://tinyurl.com/2p8svfxn`
        const messageRes = await sendMessage(text, approver.phoneNumber);
        const { body, from, to, dateCreated, dateSent } = messageRes;
        
        console.log({
          body, from, to, dateCreated, dateSent
        });
    } else {
        console.log(`nothing to approve for ${approver.name}`);
    }
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  await distribute();
  res.status(200).json('hi')
}
