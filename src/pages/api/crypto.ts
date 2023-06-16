import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosError } from 'axios';
import { IResponse } from '../../../models/response';
import { ICrypto } from '../../../models/crypto';
import { success, failed } from './_response';

type CryptoResponse = IResponse<ICrypto>

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CryptoResponse>
) {
  if (req.method == "GET") {
    return get(req, res)
  }
}

async function get(
  _: NextApiRequest,
  res: NextApiResponse<CryptoResponse>
) {
  try {
    const response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/new', {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.CMC_PRO_API_KEY,
      },
    });
    const data = response.data;
    res.send(success<CryptoResponse>(data))
  } catch (e) {
    const error = e as AxiosError;
    res.send(failed(error.message))
  }
}
