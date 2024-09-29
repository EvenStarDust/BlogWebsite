import "./Footer.css";
const Footer = () => {
  return (
    <div id="contact" className="main">
      <div className="footer">
        <div className="contentfooter">
          <div className="container">
            <div className="footer__label">
              <h2 className="footer__title_main">Evenstar</h2>
              <span className="footer__title">
                📝 Hoş Geldiniz! <br /> Bu bizim blog dünyamız! Burada hayatın
                farklı yönlerini keşfediyor ve deneyimlerimizi paylaşıyoruz.
                Bizi takip etmeyi ve etkileşimde bulunmayı unutmayın!
                Yolculuğumuza hazır mısınız? 🚀
              </span>
            </div>

            <div className="footer__socials">
              <a
                href="https://github.com/bilgekosee"
                target="_blank"
                rel="noreferrer"
                className="footer__social"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/bilge_kosee/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="footer__social"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/Bilgekoose"
                target="_blank"
                rel="noreferrer"
                className="footer__social"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/bilgekosee/"
                target="_blank"
                rel="noreferrer"
                className="footer__social"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <p className="footer__copy">© Copyright All rights reserved</p>
            <p
              className="footer__copy"
              style={{ color: "hsl(11deg 100% 31.04%)", marginTop: "40x" }}
            >
              🪐This site has been created by Evenstar Team🪐
            </p>
          </div>
          <div className="container2">
            <div className="inputBox">
              <input type="text" required /> <span>First Name</span>
            </div>
            <div className="inputBox">
              <input type="text" required /> <span>Surname</span>
            </div>
            <div className="inputBox">
              <input type="text" required /> <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea
                type="text"
                placeholder="write to contact us..."
                required
              />
            </div>
            <button className="btn my-footerbtn">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
