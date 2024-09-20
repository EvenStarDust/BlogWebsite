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
              <div>
                <h2>{article.title}</h2>
                <img src="/photo/1.jpg" alt={article.title || "image"} />
              </div>

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
