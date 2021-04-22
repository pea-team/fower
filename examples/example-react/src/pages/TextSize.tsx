import { Box } from '@fower/react';
import { setTheme, composeAtom } from '@fower/core';

setTheme({
  colors: {
    brand100: '#fa0',
    modes: {
      dark: {
        brand100: '#dd0',
      },
    },
  },
});

composeAtom('formInput', {
  'border-2': true,
  borderGray200: true,
  'borderAmber400--focus': true,
  rounded: true,
  outlineNone: true,
  px4: true,
  py2: true,
});

export default () => {
  return (
    <Box toCenter p10>
      <Box as="input" formInput placeholder="your email"></Box>
    </Box>
  );
  // TODO: bug
  return (
    <Box toCenter>
      <Box square-84 bgOrange300 bgOrange400--D10--hover--sm--i>
        A
      </Box>
      <Box square-84 bgOrange300 bgOrange400--D10--hover--i--sm>
        B
      </Box>
    </Box>
  );
  return (
    <Box
      text2XL
      _hover={['bgAmber300', 'border']}
      _md={['bgTeal400', 'text5XL']}
    >
      40 Lorem ipsum dolor sit amet
    </Box>
  );
  return (
    <Box _hover={['p1', 'p4']}>
      <Box text-30>40 Lorem ipsum dolor sit amet</Box>
      <Box text={40}>40 Lorem ipsum dolor sit amet</Box>
      <Box text={'20px'}>40 Lorem ipsum dolor sit amet</Box>
      <Box text-20px>40 Lorem ipsum dolor sit amet</Box>
      <Box text-17>Lorem ipsum dolor sit amet</Box>
      <Box text={17}>Lorem ipsum dolor sit amet</Box>
      <Box textXS>Lorem ipsum dolor sit amet</Box>
      <Box textSM>Lorem ipsum dolor sit amet</Box>
      <Box textBase>Lorem ipsum dolor sit amet</Box>
      <Box textLG>Lorem ipsum dolor sit amet</Box>
      <Box textXL>Lorem ipsum dolor sit amet</Box>
      <Box text2XL>Lorem ipsum dolor sit amet</Box>
      <Box text3XL>Lorem ipsum dolor sit amet</Box>
      <Box text4XL>Lorem ipsum dolor sit amet</Box>
      <Box text5XL>Lorem ipsum dolor sit amet</Box>
      <Box text6XL>Lorem ipsum dolor sit amet</Box>
      <Box text7XL>Lorem ipsum dolor sit amet</Box>
      <Box text8XL>Lorem ipsum dolor sit amet</Box>
      <Box text9XL>Lorem ipsum dolor sit amet</Box>
    </Box>
  );
};
