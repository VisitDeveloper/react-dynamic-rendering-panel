/* eslint-disable react-refresh/only-export-components */
import {CreateObjectLiterals} from './../../../tools/object-literals'
import Col from 'components/warpper-element/Col/Col'
import Input,{InputProps} from 'components/pure-components/Input/index'
import Button,{ButtonProps} from 'components/pure-components/Button/index'
import {JSX} from 'react'



export enum Type_List_FormElement {
  button = 'button',
  input = "input",
  password="password",
  email = "email"
}

export interface FormElementProps {
    colSpan:number;
    component: Type_List_FormElement;
    propsChildren : ButtonProps | InputProps;
}




function FormElement({colSpan , propsChildren ,component } :FormElementProps) {
  
    const componentMapping  = {
        button: <Button {...propsChildren as ButtonProps}  />,
        input: <Input {...propsChildren as InputProps} />,
        password: <Input type='password' {...propsChildren as InputProps} />,
        email: <Input type='email' {...propsChildren as InputProps} />,
        // checkbox: <Checkbox {...propChildren} />,
        // number: <InputNumber  {...propChildren} />,
        // switch: <Switch  {...propChildren} />,
        // slider: <Slider  {...propChildren} />,
        // rate: <Rate {...propChildren} />,
        // radioGroup: <Radio.Group {...propChildren}>{children}</Radio.Group>,
        // select: <Select {...propChildren}>{children}</Select>,
        // upload: <Upload {...propChildren}>{children}</Upload>,
        // uploadDrager: <Upload.Dragger {...propChildren}>
        //   {children}
        // </Upload.Dragger>
    }

    const FinalObjectRendered: JSX.Element = CreateObjectLiterals(componentMapping, component, componentMapping['input'])

  return (
    <Col colSpan={colSpan}>
        {FinalObjectRendered}
    </Col>
  )
}
export default FormElement