'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import DashboardIcon from './icons/DashboardIcon';
import NotificationIcon from './icons/NotificationIcon';
import PlusIcon from './icons/PlusIcon';
import QueueList from './icons/QueueList';
import SettingsIcon from './icons/SettingsIcon';
import MobileMenuIcon from './icons/MobileMenuIcon';
import logo from '@public/logo.png';
import clsx from 'clsx';
import Logout from './Logout';
import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';
import { useWindowSize } from 'hooks/useWindowSize';
import Trash from './icons/Trash';

const sidebarLinks = [
  {
    label: 'Dashboard',
    Icon: DashboardIcon,
    link: '/dashboard',
  },

  {
    label: 'Projects',
    Icon: QueueList,
    link: '/projects',
  },

  {
    label: 'Add New',
    Icon: PlusIcon,
    link: '/add-new',
  },
  {
    label: 'Settings',
    Icon: SettingsIcon,
    link: '/settings',
  },
  {
    label: 'Trash',
    Icon: Trash,
    link: '/trash',
  },
];

const footerLists = [
  { Icon: SettingsIcon, id: 1 },
  { Icon: NotificationIcon, id: 2 },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();
  const segment = useSelectedLayoutSegment() ?? '';

  const current = '/' + segment;

  const sidebarToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (width && width > 640) {
      setIsOpen(false);
    }
  }, [width]);

  return (
    <div className='relative z-50 flex'>
      <div
        className={clsx({
          'absolute h-full min-h-screen text-gray-900 bg-white shadow sm:flex sm:relative w-80':
            true,
          hidden: !isOpen,
          flex: isOpen,
        })}
      >
        <div className='flex flex-col justify-between h-full min-h-[95vh]'>
          <div>
            <div className='px-8 py-10'>
              <Link href='/dashboard'>
                <Image src={logo} alt='Logo' width={120} />
              </Link>
            </div>
            <ul>
              {sidebarLinks.map(({ label, Icon, link }) => (
                <Link key={label} href={link}>
                  <li
                    className={clsx({
                      'flex px-8 py-3 space-x-4 text-gray-900 cursor-pointer':
                        true,
                      'bg-gray-600 text-gray-100': current == link,
                    })}
                  >
                    <Icon />
                    <span>{label}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div className='pl-8 space-y-6'>
            <div>
              <Logout />
            </div>
            <div className='border-t border-gray-700'>
              <ul className='flex py-6 space-x-6 '>
                {footerLists.map(({ id, Icon }) => (
                  <li key={id}>
                    <Icon />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className={clsx({
          'absolute right-[-25px] top-8 sm:hidden': true,
          'right-[-345px]': isOpen,
        })}
      >
        <MobileMenuIcon onClick={sidebarToggle} />
      </div>
    </div>
  );
};

export default Sidebar;
