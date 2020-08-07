import React, { Component } from "react";
import styles from "./index.module.scss";

class VariantSelector extends Component {
  render() {
    return (
      <div>
        Select {this.props.option.name}
        <select
          className={styles.Option}
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
