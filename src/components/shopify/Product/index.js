import React, { Component } from "react";
import VariantSelector from "../VariantSelector";
import styles from "./index.module.scss";

class Product extends Component {
  constructor(props) {
    super(props);

    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { selectedOptions: defaultOptionValues };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
  }

  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange(event) {
    const target = event.target;
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.client.product.helpers.variantForOptions(
      this.props.product,
      selectedOptions
    );

    console.log(event);

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image,
    });
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value,
    });
  }

  render() {
    let variantImage =
      this.state.selectedVariantImage || this.props.product.images[0];
    let variant = this.state.selectedVariant || this.props.product.variants[0];
    let variantQuantity = this.state.selectedVariantQuantity || 1;
    const filteredOptions = this.props.product.options.filter((option) => {
      return option.name !== "Title";
    });

    let variantSelectors = filteredOptions.map((option) => {
      return (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
        />
      );
    });

    console.log(variant);
    return (
      <div className={styles.Product}>
        {this.props.product.images.length ? (
          <img
            className={styles.Image}
            src={variantImage.src}
            alt={`${this.props.product.title} product shot`}
          />
        ) : null}
        <div className={styles.Details}>
          <h5 className={styles.Title}>{this.props.product.title}</h5>
          <p>{this.props.product.description}</p>
          <span className={styles.Price}>${variant.price}</span>
          {variantSelectors}
          <label>
            Quantity
            <input
              className={styles.Option}
              min="1"
              type="number"
              defaultValue={variantQuantity}
              onChange={this.handleQuantityChange}
            ></input>
          </label>
        </div>
        <button
          className={styles.BuyButton}
          onClick={() =>
            this.props.addVariantToCart(variant.id, variantQuantity)
          }
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

export default Product;
