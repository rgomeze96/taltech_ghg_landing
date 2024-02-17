'use client'

import { useTranslation } from 'react-i18next'
import { Separator } from './ui/separator'

import { cn } from '@/lib/utils'
import { useState } from 'react'

export function HeaderLanguageSelector() {
	const {
		i18n: { changeLanguage, language },
	} = useTranslation()
	const [currentLanguage, setCurrentLanguage] = useState(language)

	const handleChangeLanguage = () => {
		const newLanguage = currentLanguage === 'en' ? 'et' : 'en'
		setCurrentLanguage(newLanguage)
		changeLanguage(newLanguage)
	}
	return (
		<div className='flex h-5 items-center space-x-2'>
			<>
				<button
					type='button'
					onClick={() => handleChangeLanguage()}
					className={cn('uppercase before:font-bold', {
						'font-bold': currentLanguage === 'en',
					})}
				>
					EN
				</button>
				<Separator orientation='vertical' className='h-4' />
				<button
					type='button'
					onClick={() => handleChangeLanguage()}
					className={cn('uppercase before:font-bold', {
						'font-bold': currentLanguage === 'et',
					})}
				>
					ET
				</button>
			</>
		</div>
	)
}
