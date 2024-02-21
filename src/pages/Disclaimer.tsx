import { useTranslation } from 'react-i18next'

const Disclaimer = () => {
	const { t } = useTranslation()
	return (
		<div className='container max-w-[1024px] text-center'>
			<h2 className='font-bold'>{t('translations:disclaimerTitle')}</h2>
			<h5>{t('translations:disclaimerText')}</h5>
		</div>
	)
}

export default Disclaimer
