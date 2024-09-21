import sinemaData from "../../Data/sinemaData.json";

import img1 from "../../Data/photo/sinema/1.jpeg";
import img2 from "../../Data/photo/sinema/2.jpg";
import img3 from "../../Data/photo/sinema/3.jpg";
import img4 from "../../Data/photo/sinema/4.jpg";
import img5 from "../../Data/photo/sinema/5.jpg";
import img6 from "../../Data/photo/sinema/6.jpg";
import img7 from "../../Data/photo/sinema/7.jpg";
import img8 from "../../Data/photo/sinema/8.jpg";
const imageMap = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
  7: img7,
  8: img8,
};

const Sinema = () => {
  return (
    <div className="bilimContainer">
      <div class="col-md-12 text-center">
        <h3 class="animate-charcter"> SİNEMA YAZILARI</h3>
      </div>

      <ul>
        {sinemaData && sinemaData.length > 0 ? (
          sinemaData.map((article) => (
            <li key={article.id}>
              <div className="textImageContainer">
                <img
                  className="imgBilim-container"
                  src={imageMap[article.id]}
                  alt={article.title || "image"}
                />

                <div>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p>Yükleniyor....</p>
        )}
      </ul>
    </div>
  );
};
export default Sinema;
