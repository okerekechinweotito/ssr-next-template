'use client';

import { Center, Spinner } from '@chakra-ui/react';
import PublicLayout from './(public)/layout';

export default function loading() {
  return (
    <PublicLayout>
      <Center background='brand.primary' height={'70vh'}>
        <Spinner
          size='xl'
          speed='0.65s'
          width={['5em', null, null, '7em']}
          height={['5em', null, null, '7em']}
          thickness='20px'
          emptyColor='neutral.mateBlack'
          color='brand.secondary'
          marginTop='-24'
        />
      </Center>
    </PublicLayout>
  );
}
