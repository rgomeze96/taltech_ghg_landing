import { useTranslation } from 'react-i18next'

const ReliableEmissionBaseline = () => {
	const { t } = useTranslation()
	return (
		<>
			<div className='container max-w-[1024px] pb-32'>
				<h1 className=' text-black font-extrabold'>
					{t('translations:taltechsOpenSourceGHG')}
				</h1>
				<div className='columns-1 sm:columns-2 pt-5'>
					<div className='flex flex-col'>
						<div className='text-black'>{t('translations:designedForOrganizationsAndEnterprises')}</div>
						<div className='text-black pt-4'>{t('translations:designedForOrganizationsAndEnterprises')}</div>
					</div>
					<div className='text-black'>{t('translations:designedForOrganizationsAndEnterprises')}</div>
				</div>
			</div>
		</>
	)
}

export default ReliableEmissionBaseline
