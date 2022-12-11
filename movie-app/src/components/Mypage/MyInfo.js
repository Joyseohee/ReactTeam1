import "./css/MyInfo.css";
import AccountName from "./AccountName";

export default function MyInfo() {
  return (
    <>
      <div className="MyInfo profile container-fluid text-center">
        <div className="profileWrapper row">
          <div className="photoWrapper col-4">
            <div className="photo"></div>
          </div>
          <div className="Info col">
            <div className="accountName row">
              <AccountName />
            </div>
            <div className="accountDetail row">
              영화를 사랑하는 영화광입니다!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
