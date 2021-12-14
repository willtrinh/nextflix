import { loadMore } from '../../helpers/api-utils';

let page = 2;
async function handler(req, res) {
  const type = req.query;
  if (req.method === 'GET' && page < 5) {
    const data = await loadMore(page++, type);
    console.log(data);
    res.status(200).json(data);
  } else {
    res.status(200).json({ message: 'end' });
  }
}

export default handler;
