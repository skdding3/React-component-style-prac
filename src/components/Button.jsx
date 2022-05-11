import classNames from "classnames/bind";
import React from "react";
import styles from "./Button.module.css";

class Button extends React.Component {
  state = {
    loading: false,
  };

  render() {
    // console.log(classNames("foo", "bar"));

    console.log(classNames(styles["button"], styles["loading"]));

    return (
      <button
        onClick={this.startLoading}
        className={
          // classNames를 사용하지 않았을 때 코드
          this.state.loading
            ? `${styles["button"]} ${styles["loading"]}`
            : styles["button"]
          // classNames 사용시
          // classNames(styles["button"],
          //   {styles["loading"]: this.state.loading,
        }
        {...this.props}
      />
    );
  }

  startLoading = () => {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
  };
}

export default Button;
