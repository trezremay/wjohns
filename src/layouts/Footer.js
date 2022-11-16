import { Link } from "react-router-dom";
function Footer() {
    return (
      <div className="">
       <footer>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <nav className="nav-footer">
                     <ul className="list-inline">
                        <li className="list-inline-item"> <a href="#">Home</a></li>
                        <li className="list-inline-item"> <a href="#">About</a></li>
                        <li className="list-inline-item"> <a href="#">Property</a></li>
                        <li className="list-inline-item"> <a href="#">Blog</a></li>
                        <li className="list-inline-item"> <a href="#">Contact</a></li>
                     </ul>
                  </nav>
                  <div className="socials-a">
                     <ul className="list-inline">
                        <li className="list-inline-item"> <a href="#"> <i className="bi bi-facebook" aria-hidden="true"></i> </a></li>
                        <li className="list-inline-item"> <a href="#"> <i className="bi bi-twitter" aria-hidden="true"></i> </a></li>
                        <li className="list-inline-item"> <a href="#"> <i className="bi bi-instagram" aria-hidden="true"></i> </a></li>
                        <li className="list-inline-item"> <a href="#"> <i className="bi bi-linkedin" aria-hidden="true"></i> </a></li>
                     </ul>
                  </div>
                  <div className="copyright-footer">
                     <p className="copyright color-text-a"> &copy; Copyright <span className="color-a">Estate </span> All Rights Reserved.</p>
                  </div>
                  <div className="credits"> Devloped by <a href="https://therichpost.com/">Therichpost</a></div>
               </div>
            </div>
         </div>
      </footer>
      <div id="preloader"></div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
       
   </div>
);
}
export default Footer;