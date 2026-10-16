import "./body.css";
function Body() {
  return (
    <>
      <div className="Bodymain">
        <p className="Title"> --- AI-native software studio · Delhi NCR</p>

        <div className="Container">
          <div className="box">
            <h1>
              Software & AI development company,
              <em>
                built to grow <br /> your business.
              </em>
            </h1>
            <p className="box1">
              A software development company in Delhi NCR building custom
              software, apps and AI for businesses in India, the US and the UK.
              We build for outcomes, not just deliverables — signups, checkout
              completion, support load. Whatever moves your numbers.
            </p>

            <button>Start your project</button>
          </div>

          <div className="box ">
            <div className="pContainer">
              <p className="question">inqmise scope -- client = new</p>
              <p className="answer">Requirements locked — stage 1 of 7</p>
              <p className="question">inqmise build --web --mobile --cloud</p>
              <p className="answer">Shipped in one sprint, not three</p>
              <p className="question">inqmise test --coverage=full</p>
              <p className="answer">QA passed — stage 6 of 7</p>
              <p className="question">inqmise deploy --ai=agentic-workflow</p>
              <p className="answer">Live in production</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
