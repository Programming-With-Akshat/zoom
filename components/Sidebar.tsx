'use client';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
	const pathName = usePathname();

	return (
		<section className='sticky left-0 flex min-h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
			<div className='flex flex-1 flex-col gap-6'>
				{sidebarLinks.map((link) => {
					const isActive =
						pathName === link.route || pathName.startsWith(`${link.route}/`);

					return (
						<Link
							key={link.label}
							href={link.route}
							className={cn(
								'flex gap-4 items-center p-4 rounded-xl justify-start',
								{
									'bg-blue-1': isActive
								}
							)}
						>
							<Image
								src={link.imgURL}
								alt={link.label}
								height={24}
								width={24}
							/>
							<p className='text-lg font-semibold max-lg:hidden'>
								{link.label}
							</p>
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default Sidebar;
