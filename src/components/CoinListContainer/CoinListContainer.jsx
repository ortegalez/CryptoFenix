import CoinsList from "../CoinsList/CoinsList";
import Loading_1 from "../Loaders/Loading_1";
import { useFetch } from "../../helpers/useFetch";
import ErrorMessagesAPI from "../ErrorMessage/ErrorMessageAPI";
import { useCoinContext } from "../../context/CoinContext";

const CoinListContainer = () => {
  const { data, loading, error } = useCoinContext();

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
