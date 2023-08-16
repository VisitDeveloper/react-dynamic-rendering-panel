import React from "react";
import Row from "components/warpper-element/Row/Row";

interface FormProps extends React.HTMLProps<HTMLFormElement> {
  children?: React.ReactNode | React.ReactElement | JSX.Element;
}

function Form({ children, ...props }: FormProps) {
  return (
    <form {...props}>
      <Row>{children}</Row>
    </form>
  );
}
export default Form;
