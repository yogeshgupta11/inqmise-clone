import "./About.css";
function About() {
  return (
    <>
      <div className="MAIN grid grid-cols-2">
        <div className="MAINBOX1">
          <p className="MAINPARA">--About InQmise · IT company in Delhi NCR</p>
          <h1 className="MAINHEADING">
            Building <em>reliable software</em> for your growth.
          </h1>
          <p className="MAINPARAGRAPH">
            InQmise Technologies is an MSME-registered IT company headquartered
            in Delhi NCR, delivering custom software, cloud infrastructure, and
            AI-powered systems for startups and enterprises.
          </p>
          <button className="MAINBTN btn-solid theme-inverse">
            Start your project
          </button>
        </div>
        <div className="MAINBOX2">
          <div className="ASIDEBOX">
            <div className="ASIDETOP">
              INQMISE / COMPANY PROFILE <b>VERIFIED</b>
            </div>
            <h2 className="ASIDETITLE">
              An MSME-registered partner, built for the long term.
            </h2>
            <div className="REGESTRATIONBOX">
              <small>REGESTRATION</small>
              InQmise Technologies India Pvt Ltd — MSME registered IT company
            </div>
            <div className="HEADQUARTERSBOX">
              <small>HEADQUARTERS</small>
              Delhi NCR, India
            </div>
            <div className="ASIDEBOTTOM grid grid-col-3">
              <span className="BOTTOMBOX">Strategy</span>
              <span className="BOTTOMBOX">Build</span>
              <span className="BOTTOMBOX">Scale</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
