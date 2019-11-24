import React from "react";

class BaseForm extends React.Component {
  handleCancelButton = e => {
    e.preventDefault();
    localStorage.clear();
    this.props.history.push(`/`);
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="form">
        <h2>{this.props.title}</h2>
        {this.props.children}
        <div>
          <button type="submit" className="submit-btn btn">
            save
          </button>
          <button
            type="button"
            className="cancel-btn btn"
            onClick={this.handleCancelButton}
          >
            cancel
          </button>
        </div>
      </form>
    );
  }
}

export default BaseForm;
