import React from "react";

import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  disabled?: boolean | undefined;
}

function Button({ children, type, disabled, onClick }: Props) {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

// Como era feito utilizando classes

// class Button extends React.Component<{
//   children: React.ReactNode;
//   type?: "button" | "submit" | "reset" | undefined;
//   onClick?: () => void;
// }> {
//   render() {
//     const { type = "button", onClick } = this.props;
//     return (
//       <button onClick={onClick} className={styles.button} type={type}>
//         {this.props.children}
//       </button>
//     );
//   }
// }

export default Button;
