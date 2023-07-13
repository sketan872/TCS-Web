import "./css/HomePage.css";
import Event from "./events/Event";

export default function HomePage() {
    return (
        <>
          <section class="fpage" id="fpage">
            <div className="content">
                <h1>Rahul Goyal s</h1>
            </div>
          </section>
          <section class="Society-goals" id="Society-goals">
            <div className="heading">
              <span>Society Goals</span>
            </div>

          <div className="goals-container">

          <div className="goals-card">
            <div className="goals-image">
                <img src="/images/MM.jpg"></img>
            </div>
            <div class="goals-name">
                 Presentation Expert
            </div>
            <div class="goals-roll">Presentations are the most important aspect of the IT industry that an 
                 intern should be skilled in and we look this skill as an important goal.</div>
          </div>
          
          <div className="goals-card">
            <div className="goals-image">
                <img src="/images/rah.jpg"></img>
            </div>
            <div class="goals-name">
               Skilled Resume
            </div>
            <div class="goals-roll">Making each member aware about the technology prevailing in the IT industry  
                 and helping them achieve those skills to fit in resume.</div>
          </div>

          <div className="goals-card">
            <div className="goals-image">
                <img src="/images/vid.jpg"></img>
            </div>
            <div class="goals-name">
               Placement Ready
            </div>
            <div class="goals-roll">The ultimate Goal is to make an individual ready for the Placement that every 
                 student thrives for.<br></br> <br></br></div>
          </div>
         
          </div>
          </section>
          <Event/>
          <p color="white">hello mu ajhfasalkd</p>
        </>
    );
}