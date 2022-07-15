
import React from "react";
import { hot } from 'react-hot-loader/root';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <button type="button" class="btn btn-primary">
          This is a bootstrap button
        </button>
      </>
    );
  }
}

export default hot(App);
