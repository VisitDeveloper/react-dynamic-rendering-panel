/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { JSX } from "react";
import styled from "styled-components";

type LabelStatus = "vertical" | "horizental";
type Variant = 'simple' | 'muiStyle' | 'iosStyle';

interface SwitchCustomProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  isToggle: boolean;
  labelStatus?: LabelStatus;
  onChangeCheckBox?: () => void;
  className?: string;
  classNameLabel?: string;
  classNameInput?: string;
  classNameCircle ?: string;
  icon?: JSX.Element;
  isRtl ?: boolean;
  variant?: Variant
}

// ios dark mode
// #39393c
// #fefefe


const SwitchCustom = (
  props: SwitchCustomProps
): JSX.Element | React.ReactNode => {
  const {
    labelStatus = "vertical",
    className = "",
    classNameLabel = "",
    classNameInput = "",
    classNameCircle = "",
    isRtl ,
    variant = 'simple'
  } = props;

  const styleVariant :Record<Variant , string> = {
  simple :   'm-[5px] w-[20px] h-[20px] top-0 right-0 bottom-0 left-0 bg-[#212121]',
  muiStyle : 'm-[5px] w-[30px] h-[30px] top-[-45%] right-0 bottom-0 left-[-30%] bg-[#212121]',
  iosStyle : 'm-[2px] w-[25px] h-[25px] top-0 right-0 bottom-0 left-0 bg-[#fefefe] shadow-md'
}

  return (
    <ContainerSwitchCustom
      isRtl={isRtl}
      labelStatus={labelStatus}
      isToggle={props.isToggle}
      className={`${className}`}
      variant={variant}
    >
      <label className={`${classNameLabel}`}>{props.title}</label>
      <input
        id={props.id}
        type="checkbox"
        checked={props.isToggle}
        onChange={props.onChangeCheckBox}
        hidden={true}
        {...props}
      />
      <div
        className={`wrap ${classNameInput} ${variant === 'iosStyle' && props.isToggle === true  ? 'bg-[#64cb66]' : '!bg-[#ddd]'}`}
        onClick={props.onChangeCheckBox}
      >
        <span className={`circle shadow-md ${styleVariant[variant]} ${classNameCircle}`} >
          {props.icon}
        </span>
      </div>
    </ContainerSwitchCustom>
  );
};
export default SwitchCustom;

const ContainerSwitchCustom = styled.div<{
  labelStatus?: LabelStatus;
  isToggle: boolean;
  isRtl ?: boolean;
  variant?: Variant
}>(
  (props) => `
    display:flex;
    flex-direction:${props.labelStatus === "vertical" ? "column" : "row"};
    align-items:${props.labelStatus === "vertical" ? "baseline" : "center"}; ;
    width: fit-content ;
        .wrap{
            cursor:pointer;
            margin :10px;
            width:${props.variant === 'muiStyle' ? '40px': '50px'};
            height:${props.variant === 'muiStyle' ? '20px': '30px'};
            position:relative ;
            border-radius :30px;
            .circle {
                position : absolute ;
                border-radius : 50%;
                transition : 0.5s;
                -webkit-transform:${
                  props.isToggle ? props.isRtl ?  `translateX(${props.variant === 'muiStyle' ? '-25px' : '-20px'})` :   `translateX(${props.variant === 'muiStyle' ? '25px' : '20px'})` : "translateX(0)"
                };
                -ms-transform: ${
                  props.isToggle ? props.isRtl ? `translateX(${props.variant === 'muiStyle' ? '-25px' : '-20px'})` :   `translateX(${props.variant === 'muiStyle' ? '25px' : '20px'})` : "translateX(0)"
                };
                transform: ${
                  props.isToggle ? props.isRtl ? `translateX(${props.variant === 'muiStyle' ? '-30px' : '-20px'})` :   `translateX(${props.variant === 'muiStyle' ? '30px' : '20px'})` : "translateX(0)"
                };
            }
        }
`
);
