import React, { Component } from "react";

class VariantSelector extends Component {
  render() {
    return (
      <div>
        Select {this.props.option.name}
        <select
          className="Product__option"
          name={this.props.option.name}
          key={this.props.option.name}
          onChange={this.props.handleOptionChange}
        >
          {this.props.option.values.map((value) => {
            return (
              <option
                value={value}
                key={`${this.props.option.name}-${value}`}
              >{`${value}`}</option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default VariantSelector;
