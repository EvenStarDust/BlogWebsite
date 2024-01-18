import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar({ title }) {
  const [scrolling, setScrolling] = useState(false);
  const [isNavActive, setNavActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    if (window.scrollY) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }

  const handleBurgerClick = () => {
    setNavActive(!isNavActive);

    handleNavLinksAnimation();
  };

  const handleNavLinksAnimation = () => {
    const navLinks = document.querySelectorAll(".nav-links li");

    navLinks.forEach((link, index) => {
      if (isNavActive) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
  };

  return (
    <>
      <nav className={scrolling ? "nav-opacity" : ""}>
        <div className="logo">
          <h4>{title}</h4>
        </div>
        <ul className={`nav-links ${isNavActive ? "nav-activ" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
          <li>
            <a href="#">Accesories</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <div
          className={`burger ${isNavActive ? "toggle" : ""}`}
          onClick={handleBurgerClick}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>

      <div className="banner">
        <div className="text">
          <h1></h1>
        </div>
      </div>
      <div></div>

      <div class="section1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nobis
          expedita voluptatem sint, accusamus maxime assumenda debitis
          voluptates libero ea quasi necessitatibus ipsa sunt qui et corporis
          iusto? Asperiores neque dolorem laudantium non rem assumenda, magni
          odio accusantium quia, aliquam totam perferendis quos nam quae,
          provident autem molestias. Tempora impedit fuga sint magnam
          aspernatur, quam, reiciendis dolorem temporibus ex sed, cumque minus
          maiores porro. Ipsa iure odit omnis nesciunt, doloremque libero dolor
          quo distinctio voluptatibus? Qui totam optio ad cupiditate dolorem
          quisquam ipsa tempora aspernatur nesciunt quasi. Quas quo praesentium
          saepe autem consectetur libero accusantium, culpa ea, molestiae quae
          soluta!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nobis
          expedita voluptatem sint, accusamus maxime assumenda debitis
          voluptates libero ea quasi necessitatibus ipsa sunt qui et corporis
          iusto? Asperiores neque dolorem laudantium non rem assumenda, magni
          odio accusantium quia, aliquam totam perferendis quos nam quae,
          provident autem molestias. Tempora impedit fuga sint magnam
          aspernatur, quam, reiciendis dolorem temporibus ex sed, cumque minus
          maiores porro. Ipsa iure odit omnis nesciunt, doloremque libero dolor
          quo distinctio voluptatibus? Qui totam optio ad cupiditate dolorem
          quisquam ipsa tempora aspernatur nesciunt quasi. Quas quo praesentium
          saepe autem consectetur libero accusantium, culpa ea, molestiae quae
          soluta!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nobis
          expedita voluptatem sint, accusamus maxime assumenda debitis
          voluptates libero ea quasi necessitatibus ipsa sunt qui et corporis
          iusto? Asperiores neque dolorem laudantium non rem assumenda, magni
          odio accusantium quia, aliquam totam perferendis quos nam quae,
          provident autem molestias. Tempora impedit fuga sint magnam
          aspernatur, quam, reiciendis dolorem temporibus ex sed, cumque minus
          maiores porro. Ipsa iure odit omnis nesciunt, doloremque libero dolor
          quo distinctio voluptatibus? Qui totam optio ad cupiditate dolorem
          quisquam ipsa tempora aspernatur nesciunt quasi. Quas quo praesentium
          saepe autem consectetur libero accusantium, culpa ea, molestiae quae
          soluta!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nobis
          expedita voluptatem sint, accusamus maxime assumenda debitis
          voluptates libero ea quasi necessitatibus ipsa sunt qui et corporis
          iusto? Asperiores neque dolorem laudantium non rem assumenda, magni
          odio accusantium quia, aliquam totam perferendis quos nam quae,
          provident autem molestias. Tempora impedit fuga sint magnam
          aspernatur, quam, reiciendis dolorem temporibus ex sed, cumque minus
          maiores porro. Ipsa iure odit omnis nesciunt, doloremque libero dolor
          quo distinctio voluptatibus? Qui totam optio ad cupiditate dolorem
          quisquam ipsa tempora aspernatur nesciunt quasi. Quas quo praesentium
          saepe autem consectetur libero accusantium, culpa ea, molestiae quae
          soluta!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          vel, commodi magni, omnis numquam ea incidunt maiores autem voluptas
          neque sed reprehenderit saepe quo corrupti quis excepturi veritatis
          ipsa ab, aliquam suscipit placeat facere alias! Porro eius culpa
          labore numquam. Rem, officia. Quae nihil perferendis rem asperiores
          corrupti quam veniam, dolor repellendus, molestiae beatae esse sed
          placeat delectus animi dolore eaque facilis, maiores pariatur a
          consequatur possimus saepe qui quos! Expedita doloremque sequi
          eligendi assumenda praesentium pariatur vel voluptates laudantium.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
          delectus, illum exercitationem voluptatum reiciendis quasi ratione
          asperiores quo iusto, dolor iste accusantium explicabo voluptates
          modi, eligendi labore error pariatur quod?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          voluptas ratione delectus sit? Nihil consequatur corrupti fugiat
          dolores recusandae tenetur consectetur explicabo delectus velit
          laboriosam voluptas voluptatum odit saepe molestiae dolore,
          perspiciatis voluptatibus illum enim alias unde facere quas blanditiis
          numquam. Pariatur asperiores est numquam, totam perspiciatis
          dignissimos repudiandae fugiat aperiam obcaecati explicabo, nulla quas
          iusto provident culpa unde dolores ullam mollitia eaque saepe id
          consequuntur sit. Facilis quibusdam dicta doloribus obcaecati repellat
          sequi, repellendus veritatis rem ex consequuntur, tempora blanditiis
          corrupti rerum cumque iusto? Est autem perferendis quos molestias
        </p>
      </div>
    </>
  );
}
