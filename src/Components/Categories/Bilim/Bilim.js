import bilimData from "../../Data/bilimData.json";
import "./Bilim.css";

const Bilim = () => {
  return (
    <div className="bilimContainer">
      <h1 className="bilimbaslik">BİLİM YAZILARI</h1>
      <ul>
        {bilimData && bilimData.length > 0 ? (
          bilimData.map((article) => (
            <li key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </li>
          ))
        ) : (
          <p>Yükleniyor....</p>
        )}
      </ul>
    </div>
  );
};
export default Bilim;
