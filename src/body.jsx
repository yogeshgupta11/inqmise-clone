import "./body.css";
function Body() {
  return (
    <>
      <div className="CONTAINER  grid grid-cols-2">
        <div className="BOX1">
          <p className="TITLE "> --- AI-native software studio · Delhi NCR</p>
          <h1 className="HEADING ">
            Software & AI development company, <br />
            <em>built to grow your business.</em>
          </h1>
          <p className="PARAGRAPH">
            A software development company in Delhi NCR building custom
            software, apps and AI for businesses in India, the US and the UK. We
            build for outcomes, not just deliverables — signups, checkout
            completion, support load. Whatever moves your numbers.
          </p>

          <button className=" BODYBUTTON btn-solid theme-inverse">
            Start your project
          </button>
        </div>

        <div className="BOX2">
          <div className="ASIDE">
            <p className="QUESTION">inqmise scope -- client = new</p>
            <p className="ANSWER">Requirements locked — stage 1 of 7</p>
            <p className="QUESTION">inqmise build --web --mobile --cloud</p>
            <p className="ANSWER">Shipped in one sprint, not three</p>
            <p className="QUESTION">inqmise test --coverage=full</p>
            <p className="ANSWER">QA passed — stage 6 of 7</p>
            <p className="QUESTION">inqmise deploy --ai=agentic-workflow</p>
            <p className="ANSWER">Live in production</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
