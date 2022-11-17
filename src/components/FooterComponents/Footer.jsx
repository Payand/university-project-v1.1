import React from "react";
import { AiOutlineGithub, AiFillPhone, AiTwotoneMail } from "react-icons/ai";
const Footer = () => {
  return (
    <div id="footer" className="footer-design">
      <div className="container">
        <div className="footer-content">
          <div className="footer-content-left">
            <h3>Contact me:</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              iusto doloremque, sed delectus eius, reprehenderit accusamus
              cumque, reiciendis sapiente laborum eaque nulla. Atque modi
              accusantium animi aut. Culpa, ipsam excepturi.
            </p>
          </div>
          <div className="footer-content-right">
            <div className="git-hub">
              <a href="tel:09122119692">
                <AiFillPhone />
              </a>
            </div>
            <div className="git-hub">
              <a href="https://github.com/Payand">
                <AiOutlineGithub />
              </a>
            </div>
            <div className="git-hub">
              <a href="mailto:shooshtariali05@gmail.com">
                <AiTwotoneMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
