// your-repository/api/cron/index.js

export default async function handler(req, res) {
  console.log('This is a cron job running on Vercel!');
  res.status(200).json({ message: 'Cron job ran successfully!' });
}