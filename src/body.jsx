import "./body.css";
function Body() {
  return (
    <>
      <div className="main">
        <p className="Title"> --- AI-native software studio · Delhi NCR</p>
      </div>
      <div className="Container">
        <div className="box">
          <span>
            <p>Software & AI</p>
            <p>development</p>
            <p>company,</p>
            <em>
              built to grow <br /> your business.
            </em>
          </span>
          <h6 className="box1">
            A software development company in Delhi NCR building custom
            software, apps and AI for businesses in India, the US and the UK. We
            build for outcomes, not just deliverables — signups, checkout
            completion, support load. Whatever moves your numbers.
          </h6>
          <button type="button" className="style btn-solid theme-inverse">
            Start your project
          </button>
        </div>

        <div className="box ">
          <div className="BoxContainer">
            <div className="question">inqmise scope -- client = new</div>
            <div className="answer">Requirements locked — stage 1 of 7</div>
            <div className="question">inqmise build --web --mobile --cloud</div>
            <div className="answer">Shipped in one sprint, not three</div>
            <div className="question">inqmise test --coverage=full</div>
            <div className="answer">QA passed — stage 6 of 7</div>
            <div className="question">inqmise deploy --ai=agentic-workflow</div>
            <div className="answer">Live in production</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
