import { useEffect, useState } from "react"
import { CryptoResponse } from "./api/crypto";
import { ICrypto } from "../../models/crypto";
import { Anchor, Card, Group, ScrollArea, Table } from "@mantine/core";

export default function Home() {
  let [isLoading, setIsLoading] = useState(true)
  let [cryptoData, setCryptoData] = useState<ICrypto | null>(null);

  useEffect(() => {
    async function fetchCryptoData() {
      const res = await fetch("/api/crypto");
      const data = await res.json(); // This will parse the JSON returned by the API into a JavaScript object
      return data;
    }
    fetchCryptoData().then((x: CryptoResponse) => {
      console.log(x)
      if (x.successful) {
        setCryptoData(x.data!)
        if (isLoading) setIsLoading(false)
      }
    });
    const seconds = 1000
    const intervalId = setInterval(fetchCryptoData, 60 * seconds); // 60000 ms = 60 s
    // Clear interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [])

  if (isLoading) return <></> // TODO: add loading screen 
  const data = cryptoData && cryptoData.data.map((coin) => {
    return (
      <tr key={coin.name}>
        <td>
          <Anchor component="button" fz="sm">
            {coin.name}
          </Anchor>
        </td>
        <td>{coin.id}</td>
        <td>
          <Anchor component="button" fz="sm">
            {coin.cmc_rank}
          </Anchor>
        </td>
        <td>{coin.quote.USD.price} $</td>
        <td>
          {new Date(coin.last_updated).toLocaleString().split(",")[1]}
        </td>
      </tr>
    );
  })

  return (
    <Card withBorder p="xl" radius="md" className="card">
      <ScrollArea>
        <Table sx={{ width: 800 }} verticalSpacing="xs">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>🎖️ CMC_RANK</th>
              <th>💰 Price</th>
              <th>🕒 Last Updated</th>
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </Table>
      </ScrollArea>
    </Card>
  );
}
