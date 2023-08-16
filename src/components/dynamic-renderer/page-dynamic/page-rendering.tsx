import { createElement } from "react";
import {
  H1,
  ButtonElement,
  Div,
  Footer,
  H2,
  H3,
  H4,
  H5,
  H6,
  Header,
  Img,
  LI,
  OL,
  P,
  Span,
  UL,
} from "components/_index";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const KeysToComponentMap: any = {
  button: ButtonElement,
  div: Div,
  footer: Footer,
  header: Header,
  li: LI,
  p: P,
  span: Span,
  ul: UL,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  img: Img,
  ol:OL,
};

interface StylePropsArray {
  name: string;
  value: string;
}

interface MappedStyles {
  [key: string]: string;
}

const StylesMaps = (styles: Array<StylePropsArray>) => {
  const mappedStyles: MappedStyles = {};
  styles?.forEach((style: StylePropsArray) => {
    mappedStyles[style.name] = style.value;
  });
  return mappedStyles;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
 const ConfigRenderComponent = (config: any) => {
  if (typeof KeysToComponentMap[config.component] !== "undefined") {
    return createElement(
      KeysToComponentMap[config.component],
      {
        id: config.id,
        key: config.id,
        className: config.className ? config.className : null,
        cursor: config.cursor ? config.cursor : null,
        ariaHidden: config.ariaHidden ? config.ariaHidden : null,
        style: config.styles ? StylesMaps(config.styles) : null,
        alt: config.alt ? config.alt : null,
        src: config.src ? config.src : null,
        ...config
      },
      config.children &&
        (typeof config.children === "string"
          ? config.children
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          : config.children.map((c: any) => ConfigRenderComponent(c)))
    );
  }
};
export default ConfigRenderComponent