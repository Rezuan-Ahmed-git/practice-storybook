import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react';
import {addDecorator} from '@storybook/react'

addDecorator((story) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    {story()}
  </ChakraProvider>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
