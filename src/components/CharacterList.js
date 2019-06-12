import React, { Component } from "react";
import {connect} from 'react-redux';

class CharacterList extends Component {

  render() {
    console.log(this.props)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly"
        }}
      >
        <aside>
          <h1>Breaking Bad Characters</h1>
          <div>
            {/* Breaking Bad Characters Here */}
          </div>
        </aside>
        <aside>
          <h1>Star Wars Characters</h1>
          <div>
            {/* Star Wars Characters Here */}
          </div>
        </aside>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return reduxState;
}

export default connect(mapStateToProps)(CharacterList);
