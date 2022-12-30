'use client';
import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import clsx from 'clsx';

interface NavLinkProps {
  href: string;
  name: string;
}

const NavLink = ({ item }: { item: NavLinkProps }) => {
  const segment = useSelectedLayoutSegment() ?? '';
  const current = '/' + segment === item.href;

  return (
    <Link
      href={item.href}
      className={clsx({
        'px-3 py-2 rounded-md text-sm font-semibold': true,
        'bg-gray-800 text-white': current,
        ' text-black  hover:bg-gray-700 hover:text-white': !current,
      })}
    >
      {item.name}
    </Link>
  );
};

export default NavLink;
