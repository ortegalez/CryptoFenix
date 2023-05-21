import { useCoinContext } from "../../context/CoinContext";
import { useEffect } from "react";

import CoinsList from "../CoinsList/CoinsList";
import Loading_1 from "../Loaders/Loading_1";
import ErrorMessagesAPI from "../ErrorMessage/ErrorMessageAPI";

const CoinListContainer = () => {
  const { data, loading, error, setSearchValue } = useCoinContext();

  useEffect(() => {
    setSearchValue("");
  }, []);

  return loading ? (
    <Loading_1 />
  ) : (
    <div>
      {error && <ErrorMessagesAPI />}
      {data && (
        <div className="mx-5">
          <h2>Today's Cryptocurrency Prices by Market Cap</h2>
          <CoinsList coins={data} />
        </div>
      )}
    </div>
  );
};

export default CoinListContainer;
