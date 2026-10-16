import "./body.css";
function Body() {
  return (
    <>
      <div className="main">
        {/* <p className="Title"> --- AI-NATIVE SOFTWARE STUDIO · Delhi NCR</p> */}
      
      <div className="container Container grid text-left grid-cols-2">
        <div className="box">
          <p className="">
            Software & AI development company, <br />
            <em>
              built to grow <br /> your business.
            </em>
          </p>

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
          <div className="BoxContainer ">
            <p className="answer">Requirements locked — stage 1 of 7</p>
            <p className="question ">inqmise scope -- client = new</p>
            <p className="question">inqmise build --web --mobile --cloud</p>
            <p className="answer">Shipped in one sprint, not three</p>
            <p className="question">inqmise test --coverage=full</p>
            <p className="answer">QA passed — stage 6 of 7</p>
            <p className="question">inqmise deploy --ai=agentic-workflow</p>
            <p className="answer">Live in production</p>
            <p className="answer bottom"></p>
            <p className="answer">
              Built for growth · not just code · Delhi NCRF
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Body;
