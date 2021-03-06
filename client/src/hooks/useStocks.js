import { useSelector, useDispatch } from "react-redux";
import { subscribeStock, unsubscribeStock } from "../store/reducers/stocks";

export default function useStocks() {
  const dispatch = useDispatch();
  const { stocks, supportedStocks } = useSelector((store) => store.stocks);
  const subscribedStocks = supportedStocks.filter(stock => {
    return stocks[stock].subscribed;
  });
  const noStocksSubscribed = subscribedStocks.length === 0;

  function subscribe(stocksName) {
    dispatch(subscribeStock(stocksName));
  }

  function unsubscribe(stocksName) {
    dispatch(unsubscribeStock(stocksName));
  }

  return { stocks, supportedStocks, subscribe, unsubscribe, noStocksSubscribed };
}
