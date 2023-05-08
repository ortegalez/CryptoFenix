import CoinsList from "../CoinsList/CoinsList";
import Loading_1 from "../Loaders/Loading_1";
import { useFetch } from "../../helpers/useFetch";
import ErrorMessagesAPI from "../ErrorMessage/ErrorMessageAPI";

const CoinListContainer = () => {
  const { data, loading, error } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&locale=en"
  );
  // const [coins, setCoins] = useState([]);
  // const [Loading, setLoading] = useState(true);

  // let urlCrypto =
  //   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&locale=en";

  // useEffect(() => {
  //   fetch(urlCrypto)
  //     .then((resp) => resp.json())
  //     .then((data) => setCoins(data))
  //     .catch((err) => console.error(err))
  //     .finally(() => setLoading(false));
  // }, []);
  // console.log(data);

  return loading ? (
    <Loading_1 />
  ) : (
    <div>
      {error && <ErrorMessagesAPI />}
      {data && (
        <div className="mx-5">
          <CoinsList coins={data} />
        </div>
      )}
    </div>
  );
};

export default CoinListContainer;
