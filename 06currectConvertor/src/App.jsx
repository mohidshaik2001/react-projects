import { useState } from "react";
import InputBox from "./components/Input";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat "
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg")`,
        }}
      >
        <div className="w-screen ">
          <div
            className="w-screen max-w-4xl mx-auto
          border border-gray-50 rounded-lg p-5
          backdrop-blur-sm bg-white/30"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div>
                <InputBox
                  label="from"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => {
                    setFrom(currency)
                  }}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className=" flex flex-wrap justify-center">
                <button
                  type="button"
                  onClick={swap}
                  className="bg-blue-500 text-white text-3xl justify-center px-1 hover:bg-blue-800 rounded-3xl w-20 h-10"
                >
                  Swap
                </button>
              </div>
              <div>
                <InputBox
                  label="to"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => {
                    setTo(currency);
                    convert()
                  }}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <div className=" flex flex-wrap justify-center px-2 py-2 ">
                <button
                  onClick={convert}
                  type="button"
                  className="bg-blue-500 text-white text-3xl justify-center px-1 hover:bg-blue-800 rounded-3xl w-100 h-10"
                >
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
