import Header from "../components/Common/header";
import ErrorMessage from "../components/Error/ErrorMessage";
import "./css/Error.css";

export default function Error() {
  return (
    <>
      <Header />
      <div className="errorBackground">
        <div className="errorOpacity">
          <ErrorMessage />
        </div>
      </div>
    </>
  );
}
