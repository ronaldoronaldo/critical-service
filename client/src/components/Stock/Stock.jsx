import React, {useEffect, useState} from "react";
// import usePrevious from "../../hooks/usePrevious";
import ListRow from "./ListRow";
import Card from "./Card";

const frameRate = 30;

export default function Stock ({ stock, viewMode }) {
  const {symbol, companyName, basePrice, subscribed} = stock;
  const [profitStatus, setProfitStatus] = useState('neutral');
  const price = Math.trunc(basePrice);

  // Only this would be necessary if the server send events in a larger time slot:
  // const previousPrice = usePrevious(price);
  // useEffect(() => {
  //   setProfitStatus(price >= previousPrice ? 'positive' : 'negative')
  //   setTimeout(()=>{
  //     setProfitStatus('neutral')
  //   }, 400)
  // }, [price]);

  // All logic below should be back-end business:
  const [speedReducer, setSpeedReducer] = useState(0);
  const [oldPrice, setOldPrice] = useState(price);

  useEffect(() => {
    if(speedReducer <= frameRate){
      setSpeedReducer(speedReducer + 1)
    }
    if(speedReducer > frameRate){
      setSpeedReducer(0)
      setProfitStatus(price >= oldPrice ? 'positive' : 'negative')
      setTimeout(()=>{
        setProfitStatus('neutral')
        setOldPrice(price)
      }, 400)
    }
  }, [price]);

  if(!subscribed) return null;

  if(viewMode === 'cards') {
    return <Card companyName={companyName} symbol={symbol} profitStatus={profitStatus} price={oldPrice}/>
  } else {
    return <ListRow companyName={companyName} symbol={symbol} profitStatus={profitStatus} price={oldPrice}/>
  }
}

