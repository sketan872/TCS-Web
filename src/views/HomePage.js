import "./css/HomePage.css";
import Event from "./events/Event";

export default function HomePage() {
    return (
        <>
          <section class="fpage" id="fpage">
            <div className="content">
                <h1>TIT&S Computer </h1>
            </div>
          </section>
          <section class="developer" id="developer">
            <div className="heading">
              <span>Developers</span>
            </div>

          <div className="dev-container">

          <div className="dev-card">
            <div className="dev-image">
                <img src="/images/p1.jpg"></img>
            </div>
            <div class="dev-name">
                Mohit 
            </div>
            <div class="dev-roll">Web-Developer</div>
          </div>
          
          <div className="dev-card">
            <div className="dev-image">
                <img src="/images/rahul.webp"></img>
            </div>
            <div class="dev-name">
                 Rahul Goyal &#128526;&#128520;&#128509;
            </div>
            <div class="dev-roll">Front-End Developer</div>
          </div>

          <div className="dev-card">
            <div className="dev-image">
                <img src="/images/vidhukant.webp"></img>
            </div>
            <div class="dev-name">
                Vidhu Kand Shama
            </div>
            <div class="dev-roll">Back-End Developer</div>
          </div>
         
          </div>
          </section>
          <Event/>
        </>
    );
}