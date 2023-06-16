import { useEffect, useState } from "react"

export default function Home() {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    async function fetchCryptoData() {
      const res = await fetch("/api/crypto");
      const data = await res.json(); // This will parse the JSON returned by the API into a JavaScript object
      return data;
    }
    fetchCryptoData().then(x => {
      console.log(x)
      setCryptoData(x)
    });
    const seconds = 1000
    const intervalId = setInterval(fetchCryptoData, 60 * seconds); // 60000 ms = 60 s
    // Clear interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [])

  return (
    <>
      hello world
    </>
  )
}
