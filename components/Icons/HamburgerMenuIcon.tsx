import Image from 'next/image';
import React from 'react';
import BurgerMenuItem from '../../public/hamburger-menu-mobile.svg';

export default function HamburgerMenuIcon (Props: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt' | 'fill'>) {
  return <Image fill={true} src={BurgerMenuItem} alt='burger menu' {...Props} />
}