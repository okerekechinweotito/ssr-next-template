'use client';

import Layout from '@/components/layout/layout';
import { Center, Spinner } from '@chakra-ui/react';

export default function loading() {
  return (
    <Layout>
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
    </Layout>
  );
}
