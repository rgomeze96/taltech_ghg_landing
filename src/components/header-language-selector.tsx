'use client'

import { Separator } from './ui/separator'

import { cn } from '@/lib/utils'

export function HeaderLanguageSelector() {
	return (
		<div className='flex h-5 items-center space-x-2'>
			<>
				<button
					type='button'
					onClick={() => console.log('change language')}
					className={cn('uppercase before:font-bold', {
						'font-bold': true,
					})}
				>
					EN
				</button>
				<Separator orientation='vertical' className='h-4' />
				<button
					type='button'
					onClick={() => console.log('change language')}
					className={cn('uppercase before:font-bold', {
					})}
				>
					ET
				</button>
			</>
		</div>
	)
}
