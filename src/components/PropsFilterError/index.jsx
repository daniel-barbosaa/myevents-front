/* eslint-disable react/jsx-filename-extension */
import { StyleSheetManager } from 'styled-components';

const shouldForwardProp = (prop) => !prop.startsWith();
export function PropsFilterError({ children }) {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      {children}
    </StyleSheetManager>
  );
}
