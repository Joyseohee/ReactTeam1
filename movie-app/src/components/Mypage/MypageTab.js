export default function MypageTab({ clickTab, showTab }) {
  return (
    <>
      <div className={clickTab}>{showTab}</div>
    </>
  );
}
