import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, name, score, scoreLabel } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const DC = API_KEY?.split('-')[1]; // e.g. "us11"

  if (!API_KEY || !AUDIENCE_ID) {
    return res.status(500).json({ error: 'Mailchimp config missing' });
  }

  const subscriberHash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
  const url = `https://${DC}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${subscriberHash}`;

  const nameParts = (name || '').trim().split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString('base64')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          SCORE: String(score || ''),
          SLABEL: scoreLabel || ''
        },
        tags: ['scorecard-lead', scoreLabel || '']
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Mailchimp error:', data);
      return res.status(200).json({ success: false, error: data.detail });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    return res.status(200).json({ success: false });
  }
}
