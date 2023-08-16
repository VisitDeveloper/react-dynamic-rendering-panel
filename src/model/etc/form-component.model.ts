import { TYPE_INPUT } from "enum/components/form-type";

export interface DataFormArray {
    type : TYPE_INPUT;
    name: string ;
    value?:string  | number ;
    index ?: number ;
    placeholder?: string;
    defaultValue?: string;
    required?: boolean;
    messageRequired ?: string;
    pattern ?:  RegExp;
    messagePattern ?: string;
  }

