/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactNode } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  outerClassName?: string;
  inputSize?: 'small' | 'medium' | 'large';
  imgright?: ReactNode | string;
  imgleft?: ReactNode | string;
  error?: string | boolean;
  labelLayoutStatus?:  'vertical' | 'horizental' ;
}

const labelLayout  = {
  horizental :'flex flex-row items-center',
  vertical :''
}

const sizeMap = {
  small: 'border-none bg-[inherit] text-sm',
  medium: 'bg-[inherit]',
  large: 'py-4 text-xl'
};


const defaultStyle = 'w-full bg-inherit px-4 outline-none';

const Input: FC<InputProps> = ({
  outerClassName,
  className,
  title,
  error,
  imgright,
  inputSize = 'medium',
  imgleft,
  labelLayoutStatus= 'vertical',
  ...props
}) => {

  return (
    <>
      <div className={`h-fit ${outerClassName}`}>
        <label className={`${labelLayout[labelLayoutStatus]}`}>
          {title ? <span className="pr-2 text-lg">{title}</span> : <></>}
          <div className=" flex  w-full flex-row items-center overflow-hidden px-2 py-1 ">
            {imgright ?? <></>}
            <input className={`${defaultStyle} ${sizeMap[inputSize]} ${className}`} {...props} />
            {imgleft ?? <></>}
          </div>
        </label>
      </div>
      {error ? (
        <div className="mt-1 min-h-[16px] pr-2 text-xs text-red-500">
          {error && error !== '' ? error : <></>}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Input;
