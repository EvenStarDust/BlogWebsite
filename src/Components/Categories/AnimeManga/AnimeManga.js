import animeManga from "../../Data/anime_mangaData.json";

import img1 from "../../Data/photo/anime_manga/1.jpeg";
import img2 from "../../Data/photo/anime_manga/2.jpg";
import img3 from "../../Data/photo/anime_manga/3.jpg";
import img4 from "../../Data/photo/anime_manga/4.jpg";
import img5 from "../../Data/photo/anime_manga/5.jpg";
import img6 from "../../Data/photo/anime_manga/6.jpg";
import img7 from "../../Data/photo/anime_manga/7.jpg";
import img8 from "../../Data/photo/anime_manga/8.jpg";
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

const AnimeManga = () => {
  return (
    <div className="bilimContainer">
      <div class="col-md-12 text-center">
        <h3 class="animate-charcter"> ANİME VE MANGALAR HAKKINDA YAZILAR</h3>
      </div>

      <ul>
        {animeManga && animeManga.length > 0 ? (
          animeManga.map((article) => (
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
export default AnimeManga;
