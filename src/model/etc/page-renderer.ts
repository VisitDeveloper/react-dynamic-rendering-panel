/* eslint-disable @typescript-eslint/no-explicit-any */
interface StylesProps {
    name : string ; 
    value : string;

}

export interface ConfigRenderComponent {
    component : string ;
    children: any;
    id?: string;
    className?: string ; 
    styles?: Array<StylesProps>;
    cursor?:string;
    src?: string ; 
    alt?: string ;
    ariaHidden?: string;
}
