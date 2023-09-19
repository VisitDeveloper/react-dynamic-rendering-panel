/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fragment } from "react";
import styled from "styled-components";

interface OptionGroupProps extends React.HTMLProps<HTMLOptGroupElement> {}

function OptionGroup(props: OptionGroupProps): JSX.Element {
  return <optgroup {...props}>{props.children}</optgroup>;
}

interface OptionPropsComponent extends React.HTMLProps<HTMLOptionElement> {}

function OptionComponent(props: OptionPropsComponent): JSX.Element {
  return <option {...props}>{props.children}</option>;
}

interface OptionGroupImplementsNewOptions extends OptionGroupProps {
  options?: Array<OptionPropsComponent>
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: Array<OptionPropsComponent>;
  noDataTitle?: string;
  groupOptions?: Array<OptionGroupImplementsNewOptions>;
}

const Select = ({groupOptions =[] , ...props}: SelectProps): JSX.Element => {

  return (
    <Container>
      <select {...props}>
        {groupOptions?.length !== 0 ? (
          groupOptions?.map((optgroup: OptionGroupImplementsNewOptions, i: number) => {
            return (
              <Fragment key={i}>
                <OptionGroup {...optgroup}>
                  {optgroup.options?.length !== 0 ? (
                    optgroup.options?.map(
                      (option: OptionPropsComponent, i: number) => {
                        return (
                          <Fragment key={i}>
                            <OptionComponent value={option.value} {...option}>
                              {option.children}
                            </OptionComponent>
                          </Fragment>
                        );
                      }
                    )
                  ) : (
                    <>{props.noDataTitle}</>
                  )}
                </OptionGroup>
              </Fragment>
            );
          })
        ) : props.options?.length !== 0 ? (
          props.options?.map((option: OptionPropsComponent, i: number) => {
            return (
              <Fragment key={i}>
                <OptionComponent value={option.value} {...option}>
                  {option.children}
                </OptionComponent>
              </Fragment>
            );
          })
        ) : (
          <>{props.noDataTitle}</>
        )}
      </select>
    </Container>
  );
};
export default Select;



const Container = styled.div(
  () => `
    
  `
);
