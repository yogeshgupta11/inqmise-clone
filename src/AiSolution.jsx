import "./Aisolution.css";
function Aisolution() {
  return (
    <>
      <div className="AISOLUTIONMAIN grid grid-cols-2">
        <div className="AISOLUTIONBOX1">
          <p className="AISOLUTIONPARA1">--AI SOLUTION</p>
          <h1 className="AISOLUTIONHEADING">
            AI development services: six ways to bring
            <em> real AI </em> into your business.
          </h1>
          <p className="AISOLUTIONPARA2">
            From generative AI and autonomous agents to recommendation engines
            and full AI integration — pick the entry point that matches where
            your business is today.
          </p>
          <button className="AIBTN btn-solid theme-inverse">
            Plan your Ai project
          </button>
        </div>
        <div className="AISOLUTIONBOX2">
          <div className="AISOLUTIONASIDEBOX">
            <div className="AISOLUTIONTOP">
              INQMISE / AI SOLUTIONS
              <b>LIVE</b>
            </div>
            <h2 className="AISOLUTIONTITLE">
              Six dedicated AI services, one accountable team.
            </h2>
            <div className="AISMALLBOX1">
              <small>GENERATIVE AI DEVELOPMENT</small>
              Build generative AI apps and copilots, with evaluation and cost
              limits
            </div>
            <div className="AISMALLBOX2">
              <small>AGENTIC AI DEVELOPMENT</small>
              Build autonomous agent systems with intelligent automation
            </div>
            <div className="AISOLUTIONBOTTOM grid grid-col-3">
              <span className="AIBOTTOMBOX">Scope</span>
              <span className="AIBOTTOMBOX">Build</span>
              <span className="AIBOTTOMBOX">Integrate</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Aisolution;
