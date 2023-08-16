// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CreateObjectLiterals<Type>(obj : { [index: string]: any } , mood : string , initialValue: any ) : Type   {
    const emoji =  {...obj}[mood];
    return emoji || initialValue;
}
