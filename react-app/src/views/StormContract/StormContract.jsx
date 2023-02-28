import "./StormContract.css";
import { Header, Collapsible } from "components/StormContract";

// TODO development only -- remove after contract integration
import contracts from "./contracts.json";

export default function StormContract() {
  console.log({ contracts });
  return (
    <div className="Mangrove-container">
      <Header />

      <div className="content">
        <h2>Dashboard View</h2>

        {contracts?.map((item, index) => (
          <Collapsible key={index} active={item.active} open={item.open} item={item} />
        ))}
      </div>
    </div>
  );
}
