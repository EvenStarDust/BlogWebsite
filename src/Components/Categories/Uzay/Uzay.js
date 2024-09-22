import uzayData from "../../Data/uzayData.json";

/* import img1 from "../../Data/photo/muzik/1.jpeg";
import img2 from "../../Data/photo/muzik/2.jpg";
import img3 from "../../Data/photo/muzik/3.jpg";
import img4 from "../../Data/photo/muzik/4.jpg";
import img5 from "../../Data/photo/muzik/5.jpg";
import img6 from "../../Data/photo/muzik/6.jpg";
import img7 from "../../Data/photo/muzik/7.jpg";
import img8 from "../../Data/photo/muzik/8.jpg";
const imageMap = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
  7: img7,
  8: img8,
}; */

const Uzay = () => {
  return (
    <div className="bilimContainer">
      <div class="col-md-12 text-center">
        <h3 class="animate-charcter"> UZAY YAZILARI</h3>
      </div>

      <ul>
        {uzayData && uzayData.length > 0 ? (
          uzayData.map((article) => (
            <li key={article.id}>
              <div className="textImageContainer">
                {/*   <img
                  className="imgBilim-container"
                  src={imageMap[article.id]}
                  alt={article.title || "image"}
                /> */}

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
export default Uzay;
