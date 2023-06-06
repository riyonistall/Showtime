import "./Footer.css";

const Footer = () => {
  return (
    <div className="copyright">Copyright © {new Date().getFullYear()} {" "}
      <a href="https://www.riyonchakraborty.in" target="_blank" rel="noreferrer" className="copyright-link">Riyon Chakraborty</a>
    </div>
  )
}
export default Footer