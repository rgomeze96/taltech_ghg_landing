import { useTranslation } from 'react-i18next'

const HomeHeader = () => {
	const { t } = useTranslation()
	return (
		<>
			<div className='container max-w-[1024px]'>
				<h1 className='p-2 text-black font-extrabold'>
					{t('translations:taltechsOpenSourceGHG')}
				</h1>
				<h1 className='p-2 text-green'>
					{t('translations:forCompaniesAndOrganisations')}
				</h1>
				<div className='flex flex-row-reverse mb-10'>
					<div className='flex flex-col'>
						<h5 className='max-w-[393px] text-black'>
							{t('translations:designedForOrganizationsAndEnterprises')}
						</h5>
						<h5 className='max-w-[393px] text-black'>
							{t('translations:focusingOnTransparencyAndAccuracy')}
						</h5>
					</div>
				</div>
				<div className='p-5 text-black'>{t('translations:learnMoreText')}</div>
				<img
					className='h-[488px] w-full max-w-[1320px] mx-auto object-cover rounded-[10px] mt-20'
					src='/taltech-sunset.jpeg'
					alt='Header nice mountain road background'
				/>
				<h1 className='text-secondary font-bold mt-10'>
					{t('translations:aboutThisProjectTitle')}
				</h1>
				<h5 className='p-5 text-black'>
					{t('translations:aboutThisProjectText')}
				</h5>
			</div>
		</>
	)
}

export default HomeHeader
