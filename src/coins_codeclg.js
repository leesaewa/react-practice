import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [cost, setCost] = useState(1);
  const [amount, setAmount] = useState(1);

  const onChange = (e) => {
    setCost(e.target.value);
    setAmount(1);
  };
  const inputAmount = (e) => {
    setAmount(e.target.value);
    // console.log(e.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []); // 빈 배열-> 한 번만 동작
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          <option>Select Coins</option>
          {coins.map((coin, index) => (
            <option key={index} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}):${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <h2>Please enter the amount to convert to coins.</h2>
      <input
        type="number"
        placeholder="please enter the amount"
        onChange={inputAmount}
        value={amount}
      />
      $<p>You can buy {amount / cost}</p>
    </div>
  );
}
export default App;
