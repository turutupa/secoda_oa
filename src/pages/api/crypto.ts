import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosError } from 'axios';
import { IResponse } from '../../../models/response';
import { ICrypto } from '../../../models/crypto';
import { success, failed } from './_response';

const API = 'https://sandbox-api.coinmarketcap.com' // move this elsewhere if re-used in diff handlers
const CRYPTO_API = `${API}/v1/cryptocurrency`
const endpoint = ((endpoint: string) => `${CRYPTO_API}${endpoint}`) // currying to make it easier to add endpoints
const listings = endpoint("/listings/new")
// ... expand here with additional endpoints

export type CryptoResponse = IResponse<ICrypto>

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CryptoResponse>
) {
  if (req.method == "GET") {
    return get(req, res)
  }
  res.send(failed(`No ${req.method} handler extant`))
}

async function get(
  _: NextApiRequest,
  res: NextApiResponse<CryptoResponse>
) {
  try {
    const response = await axios.get(listings, {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.CMC_PRO_API_KEY,
      },
    });
    const data = response.data;
    res.send(success<ICrypto>(data))
  } catch (e) {
    const error = e as AxiosError;
    res.send(failed(error.message))
  }
}
