import "./Categories.css";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <>
      <ul id="hexGrid">
        <li class="hex">
          <div class="hexIn">
            <Link class="hexLink" href="#" to="/Bilim">
              <img
                src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNjaWVuY2V8ZW58MHx8MHx8fDA%3D"
                alt="bilim"
              />
              <h1>BİLİM</h1>
              <p>Bilimin Sırlarını Keşfet ve Yeni Ufuklara Yelken Aç!</p>
            </Link>
          </div>
        </li>
        <li class="hex">
          <div class="hexIn">
            <Link class="hexLink" href="#" to="/Teknoloji">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
                alt="teknoloji"
              />
              <h1>TEKNOLOJİ</h1>
              <p>
                Teknolojinin sonsuz dünyasında yenilikleri keşfet, geleceğe
                bugünden adım at!
              </p>
            </Link>
          </div>
        </li>
        <li class="hex">
          <div class="hexIn">
            <Link class="hexLink" href="#" to="/Spor">
              <img
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <h1>SPOR</h1>
              <p>
                Sporun gücüyle sınırlarını zorla, dayanıklılık ve azmin gücünü
                keşfet!
              </p>
            </Link>
          </div>
        </li>
        <li class="hex">
          <div class="hexIn">
            <Link class="hexLink" href="#" to="/Beslenme">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bnV0cml0aW9ufGVufDB8fDB8fHww"
                alt=""
              />
              <h1>Sağlıklı Yaşam ve Beslenme</h1>
              <p>Doğru beslenme ile sağlığınızı koruyun, enerjinizi artırın!</p>
            </Link>
          </div>
        </li>
        <li class="hex">
          <div class="hexIn">
            <Link class="hexLink" href="#" to="/Sinema">
              <img
                src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2luZW1hfGVufDB8fDB8fHww"
                alt=""
              />
              <h1>SİNEMA</h1>
              <p>
                Sinemanın büyülü dünyasında farklı türlerde unutulmaz hikayeler
                keşfedin!
              </p>
            </Link>
          </div>
        </li>
        <li class="hex">
          <div class="hexIn">
            <Link class="hexLink" href="#" to="/Muzik">
              <img
                src="https://media.istockphoto.com/id/1328190544/photo/in-concert.webp?b=1&s=170667a&w=0&k=20&c=eaU86eJ3Xx8BZOQuSBEZeM0dkiqYrZ5Lh45BVuHov6Q="
                alt=""
              />
              <h1>MÜZİK</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </Link>
          </div>
        </li>
        <li class="hex">
          <div class="hexIn">
            <Link class="hexLink" href="#" to="/Kitaplar">
              <img
                src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Qk9PS1N8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <h1>KİTAPLAR</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </Link>
          </div>
        </li>
        <li class="hex">
          <div class="hexIn">
            <Link class="hexLink" href="#" to="/Uzay">
              <img
                src="https://images.unsplash.com/photo-1501862700950-18382cd41497?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFNQQUNFfGVufDB8fDB8fHww"
                alt=""
              />
              <h1>UZAY</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </Link>
          </div>
        </li>
        <li class="hex">
          <div class="hexIn">
            <Link class="hexLink" href="#" to="/GezilecekYerler">
              <img
                src="https://plus.unsplash.com/premium_photo-1667530621211-7924dc31a4a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXRhbHl8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <h1>GEZİLECEK YERLER</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </Link>
          </div>
        </li>
        <li class="hex">
          <div class="hexIn">
            <Link class="hexLink" href="#" to="/Sanat">
              <img
                src="https://images.unsplash.com/photo-1545989253-02cc26577f88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFydHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <h1>SANAT</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </Link>
          </div>
        </li>
        <li class="hex">
          <div class="hexIn">
            <a class="hexLink" href="#">
              <img
                src="https://images.unsplash.com/photo-1641893588018-b958a5845cab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFtb3VzJTIwc2NpZW50aXN0c3xlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <h1>BİLİM İNSANLARI</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </div>
        </li>
        <li class="hex">
          <div class="hexIn">
            <a class="hexLink" href="#">
              <img
                src="https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <h1>HAYVANLAR</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </div>
        </li>
        <li class="hex">
          <div class="hexIn">
            <a class="hexLink" href="#">
              <img
                src="https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWUlMjBhbmQlMjBtYW5nYXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <h1>ANİME VE MANGALAR</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </div>
        </li>
        <li class="hex">
          <div class="hexIn">
            <a class="hexLink" href="#">
              <img
                src="https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q09NUFVURVIlMjBHQU1FU3xlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <h1>BİLGİSAYAR OYUNLARI</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </a>
          </div>
        </li>
      </ul>
      <br />
      <br />
      <br />
    </>
  );
};
export default Categories;
