import "./Service.css";
function Service() {
  return (
    <>
      <div className="SERVICEMAIN grid grid-cols-2">
        <div className="SERVICEBOX1">
          <p className="SERVICEPARA1">
            -- FUll-SERVICE SOFTWARE DEVELOPMENT · BUILT TO SCALE
          </p>
          <h1 className="SERVICEHEADING">
            Software development services that
            <em> fit how you actually build.</em>
          </h1>
          <p className="SERVICEPARA2">
            Software development services from web and mobile to cloud,
            security, and AI — eleven core services, one accountable team, and
            the same seven-stage process behind every engagement.
          </p>
          <button className="SERVICEBTN btn-solid theme-inverse">
            Plan your Ai project
          </button>
        </div>
        <div className="SERVICEBOX2">
          <div className="SERVICEASIDEBOX">
            <div className="SERVICETOP">
              INQMISE / SERVICE CATALOG
              <b>LIVE</b>
            </div>
            <h2 className="SERVICETITLE">
              Eleven services, one accountable team.
            </h2>
            <div className="SERVICESMALLBOX1">
              <small>CORE STACK</small>
              Web, mobile, UI/UX, cloud, DevOps, and cybersecurity — all
              in-house
            </div>
            <div className="SERVICESMALLBOX2">
              <small>AI-READY</small>
              Every engagement can plug into our AI solutions when you're ready
            </div>
            <div className="AISOLUTIONBOTTOM grid grid-col-3">
              <span className="AIBOTTOMBOX">Scope</span>
              <span className="AIBOTTOMBOX">Build</span>
              <span className="AIBOTTOMBOX">Support</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Service;
