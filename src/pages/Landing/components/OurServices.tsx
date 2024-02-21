import { useTranslation } from 'react-i18next'

const OurServices = () => {
	const { t } = useTranslation()
	return (
		<div className='container mt-40 pb-20 h-full w-full max-w-[1320px] rounded-[10px]'>
			<div className='container max-w-[1024px] pl-10 pt-10 text-left'>
				<h2 className='font-bold'>{t('translations:ourServicesTitle')}</h2>
				<p className='pl-5 pt-5 text-black'>
					{t('translations:ourServicesText')}
				</p>
				<h3 className='font-bold'>{t('translations:freeWorkshopTitle')}</h3>
				<p className='pl-5 pt-5 text-black'>
					{t('translations:freeWorkshopText')}
				</p>
				<h3 className='font-bold'>
					{t('translations:methodologicalSupportTitle')}
				</h3>
				<p className='pl-5 pt-5 text-black'>
					{t('translations:methodologicalSupportText')}
				</p>
				<h3 className='font-bold'>
					{t('translations:ghgEmissionFactorsTitle')}
				</h3>
				<p className='pl-5 pt-5 text-black'>
					{t('translations:ghgEmissionFactorsText')}
				</p>
				<h3 className='font-bold'>
					{t('translations:toolFeaturesByCustomerTitle')}
				</h3>
				<p className='pl-5 pt-5 text-black'>
					{t('translations:toolFeaturesByCustomerText')}
				</p>
				<h3 className='font-bold'>
					{t('translations:exclusiveGHGAccountingToolTitle')}
				</h3>
				<p className='pl-5 pt-5 text-black'>
					{t('translations:exclusiveGHGAccountingToolText')}
				</p>
			</div>
		</div>
	)
}

export default OurServices
