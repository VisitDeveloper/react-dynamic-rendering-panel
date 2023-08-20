import React, { JSX } from "react";
import styled from "styled-components";

type LabelStatus = "vertical" | "horizental";

interface SwitchCustomProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  isToggle: boolean;
  labelStatus?: LabelStatus;
  onChangeCheckBox?:() => void ;
  className?: string;
  classNameLabel?: string ;
  classNameInput?:string;
}

const SwitchCustom = (
  props: SwitchCustomProps
): JSX.Element | React.ReactNode => {
  const { labelStatus = "vertical" } = props;
  return (
    <ContainerSwitchCustom labelStatus={labelStatus} isToggle={props.isToggle} className={`${props.className}`}>
      <label className={`${props.classNameLabel}`}>
        {props.title}
      </label>
      <input
        id={props.id}
        type="checkbox"
        checked={props.isToggle}
        onChange={props.onChangeCheckBox}
        hidden={true}
        {...props}
      />
      <div className={`wrap ${props.classNameInput}`} onClick={props.onChangeCheckBox}>
        <span className="circle" />
      </div>
    </ContainerSwitchCustom>
  );
};
export default SwitchCustom;

const ContainerSwitchCustom = styled.div<{
  labelStatus?: LabelStatus;
  isToggle: boolean;
}>(
  (props) => `
    
    display:flex;
    flex-direction:${props.labelStatus === "vertical" ? "column" : "row"};
    align-items:${props.labelStatus === "vertical" ? "baseline" : "center"}; ;
    width: fit-content ;
        .wrap{
            cursor:pointer;
            margin :10px;
            width:50px;
            height:30px;
            position:relative ;
            background-color : #000;
            border-radius :30px;
            .circle {
                margin: 5px 0;
                position : absolute ;
                background-color :#F00;
                border-radius : 50%;
                height : 20px;
                width:20px;
                top:0 ;
                right :0 ;
                left : 0 ;
                bottom : 0;
                transition : 0.5s;
                -webkit-transform:${
                  props.isToggle ? "translateX(30px)" : "translateX(0)"
                };
                -ms-transform: ${
                  props.isToggle ? "translateX(30px)" : "translateX(0)"
                };
                transform: ${
                  props.isToggle ? "translateX(30px)" : "translateX(0)"
                };
            }
        }
        
    
`
);
