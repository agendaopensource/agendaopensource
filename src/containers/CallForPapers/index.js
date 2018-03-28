import React from 'react';
import { withRouteData, Link } from 'react-static';
import PropTypes from 'prop-types';

class CallForPapers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frequentCfp: props.frequentCallForPapers,
      sporadicCfp: props.sporadicCallForPapers,
    };
  }

  render() {
    const { frequentCfp, sporadicCfp } = this.state;

    return (
      <div>
        <h1>
          Call for Papers
        </h1>
        <p>
          Do you want to share your talent and knowledge with others?
          Find here ongoing call for papers that you can submit your proposals.
        </p>
        <div>
          {sporadicCfp.map(cfp => (
            <div key={`${cfp.deadline}${cfp.name}`} className="card card-1">
              <h1 className="font-weight-normal text-black title">
                <Link to={cfp.url} href={cfp.url} target="_blank" rel="noopener">
                  {cfp.name}
                </Link>
              </h1>
              <p>
                {cfp.description}
              </p>
              <div className="action-bar">
                <Link to={cfp.url} href={cfp.url} className="button" target="_blank" rel="noopener">
                    Open event website
                </Link>
              </div>
            </div>
          ))}
        </div>

        <h3>
          Frequent initiatives:
        </h3>

        <div>
          {frequentCfp.map(cfp => (
            <div key={cfp.name} className="card card-1">
              <h1 className="font-weight-normal text-black title">
                <Link to={cfp.url} href={cfp.url} target="_blank" rel="noopener">
                  {cfp.name}
                </Link>
              </h1>
              <p>
                {cfp.description}
              </p>
              <div className="action-bar">
                <Link to={cfp.url} href={cfp.url} className="button" target="_blank" rel="noopener">
                    Open website
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

CallForPapers.propTypes = {
  frequentCallForPapers: PropTypes.array.isRequired,
  sporadicCallForPapers: PropTypes.array.isRequired,
};

export default withRouteData(CallForPapers);
