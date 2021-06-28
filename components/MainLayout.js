import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const MainLayout = ({ children }) => {
  useEffect(() => {
    console.log('Initialize')
  }, [])
  const [value, setValue] = useState('');
  return <div>
    <p>Main layout</p>
    {value}
      <Link href='/menu/item-modal/1' scroll={false}>
        <a>
          Go to item 1
        </a>
      </Link>
    <input value={value} onChange={(e) => setValue(e.target.value)} type='text' />
    {children}
  </div>
}

export const getLayout = page => <MainLayout>{page}</MainLayout>

export default MainLayout;
