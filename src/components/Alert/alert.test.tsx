import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Alert, { AlertProps } from "./alert";
const defaultProps = {
  onClick: jest.fn(),
};

const testProps: AlertProps = {
  title: "alert",
  onClose: jest.fn(),
};

const typeProps: AlertProps = {
  ...testProps,
  alertType: "success",
  description: "hello",
  closable: true,
};

describe("test alert component", () => {
  it("should render the correct Alert based on different type and description", () => {
    const { getByText, container, queryByText } = render(
      <Alert {...typeProps}>Nice</Alert>
    );
    expect(queryByText("alert")).toBeInTheDocument();
    expect(container.querySelector(".alert")).toHaveClass("alert-success");
    expect(queryByText("hello")).toBeInTheDocument();
  });
  it("After clicking Close, the function runs and the Alert component disappears", () => {
    //包裹器掛載HTML

    // const { getByText, container, queryByText } = render(
    //   <Alert {...testProps} />
    // );
    const wrapper = render(<Alert {...typeProps}>Nice</Alert>);

    const element = wrapper.getByText("alert");
    const close = wrapper.getByText("關閉");
    console.log(close);
    expect(element).toBeInTheDocument();
    fireEvent.click(close);
    expect(testProps.onClose).toHaveBeenCalled();
    expect(element).not.toBeInTheDocument();
  });
  // it("should render the correct component based on different props", () => {
  //   const wrapper = render(<Button {...testProps}>Nice</Button>);
  //   const element = wrapper.getByText("Nice");
  //   expect(element).toBeInTheDocument();
  //   expect(element).toHaveClass("btn-primary btn-lg klass");
  // });
  // it("should render a link when btnType equals link and href is provided", () => {
  //   const wrapper = render(
  //     <Button btnType="link" href="http://dummyurl">
  //       Link
  //     </Button>
  //   );
  //   const element = wrapper.getByText("Link");
  //   expect(element).toBeInTheDocument();
  //   expect(element.tagName).toEqual("A");
  //   expect(element).toHaveClass("btn btn-link");
  // });
  // it("should render disabled button when disabled set to true", () => {
  //   const wrapper = render(<Button {...disabledProps}>Nice</Button>);
  //   const element = wrapper.getByText("Nice") as HTMLButtonElement;
  //   expect(element).toBeInTheDocument();
  //   expect(element.disabled).toBeTruthy();
  //   fireEvent.click(element);
  //   expect(disabledProps.onClick).not.toHaveBeenCalled();
  // });
});
