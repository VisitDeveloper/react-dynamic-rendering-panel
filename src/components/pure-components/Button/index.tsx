/* eslint-disable react-refresh/only-export-components */
'use client';
import React, { FC, ReactNode } from 'react';
import Ripple from './ripple';

const defaultStyle =
  'outline-none text-lg flex flex-row gap-2 rounded-full items-center justify-center';

export enum HasRipple {
  isRipple = 'isRipple',
  isRippleDelay = 'isRippleDelay',
  withOutRipple = 'withOutRipple'
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // buttonSize?: 'small' | 'medium' | 'large';
  paletteColor?: 'disable' | 'fill-main' | 'outlined-main';
  isLoading?: boolean;
  imgLeft?: ReactNode | string;
  imgRight?: ReactNode | string;
  hasRipple?: HasRipple;
  onClickRipple?: () => void;
}

// const sizeMap = {
//   small: 'text-sm rounded-sm px-2 py-1 items-center flex justify-center',
//   medium: 'text-md rounded-md px-4 py-1 items-center flex justify-center',
//   large: 'text-lg rounded-full px-6 py-2 items-center flex justify-center'
// };

const styleMap = {
  'fill-main':
    'bg-gradient-to-r text-white to-[#00A3FF] from-[#5B44E7] border font-semibold text-gray-m-50 py-2 px-8 border-[2px] px-14',
  disable: '',
  'outlined-main': 'bg-white borderImage'
};

const Button: FC<ButtonProps> = ({
  paletteColor = 'fill-main',
  children,
  className,
  disabled,
  isLoading,
  imgLeft,
  imgRight,
  hasRipple,
  onClickRipple,
  ...props
}) => {
  const ButtonComponent = (
    <button
      disabled={disabled || isLoading}
      className={`${defaultStyle} ${
        disabled ? styleMap['disable'] : styleMap[paletteColor]
      } ${className}`}
      {...props}>
      {isLoading ? (
        <span className="flex h-full min-h-[26px] w-full flex-col items-center justify-center">
          {/* <BeatLoader size={8} color="white" className="h-full" /> */}
        </span>
      ) : (
        <>
          {imgLeft ?? <></>}
          {children}
          {imgRight ?? <></>}
        </>
      )}
    </button>
  );

  switch (hasRipple) {
    case HasRipple.withOutRipple: {
      return <>{ButtonComponent}</>;
    }
    case HasRipple.isRipple: {
      return (
        <>
          <Ripple onClick={onClickRipple}>{ButtonComponent}</Ripple>
        </>
      );
    }
    case HasRipple.isRippleDelay: {
      return (
        <>
          <Ripple duration={600} onClick={onClickRipple}>
            {ButtonComponent}
          </Ripple>
        </>
      );
    }
    default: {
      return <>{ButtonComponent}</>;
    }
  }
};

export default Button;
