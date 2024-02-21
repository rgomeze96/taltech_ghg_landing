import { Icons } from '@/assets/icons'
import { paths } from '@/routes/paths'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const HowTaltechToolWorks = () => {
	const navigate = useNavigate()
	const { t } = useTranslation()
	return (
		<div className='flex flex-row bg-primary'>
			<div className='container max-w-[1024px] min-h-[300px] pb-20 relative'>
				<div className='flex flex-row'>
					<div className='lg:absolute top-[-80px] right-[-120px]'>
						<div className='flex flex-row gap-5'>
							<Icons.TrioGroupLeft className='h-[241px] w-[241px]' />
							<Icons.TrioGroupMiddle className='h-[241px] w-[241px]' />
							<Icons.TrioGroupRight className='h-[241px] w-[241px]' />
						</div>
					</div>
				</div>
				<div className='flex flex-row mt-52'>
					<h1 className='text-white font-bold text-5xl '>
						{t('translations:ourServicesTitle')}
					</h1>
				</div>
				<p className='text-white pt-10'>{t('translations:ourServicesText')}</p>
				<div className='flex flex-row gap-5'>
					<div className='flex flex-col pt-10'>
						<h2 className='text-white'>01</h2>
						<h3 className='text-green'>
							{t('translations:freeWorkshopTitle')}
						</h3>
						<div className='max-w-[470px] text-white mx-auto'>
							{t('translations:freeWorkshopText')}
						</div>
					</div>
					<div className='flex flex-col pt-10'>
						<h2 className='text-white'>02</h2>
						<h3 className='text-green'>
							{t('translations:methodologicalSupportTitle')}
						</h3>
						<div className='max-w-[470px] text-white mx-auto'>
							{t('translations:methodologicalSupportText')}
						</div>
					</div>
				</div>
				<div className='flex flex-row'>
					<div className='flex flex-col pt-10 w-full'>
						<h2 className='text-white'>03</h2>
						<h3 className='text-green'>
							{t('translations:ghgEmissionFactorsTitle')}
						</h3>
						<div className='text-white w-full'>
							{t('translations:ghgEmissionFactorsText')}
						</div>
					</div>
				</div>
				<div className='flex flex-row gap-5'>
					<div className='flex flex-col pt-10'>
						<h2 className='text-white'>04</h2>
						<h3 className='text-green'>
							{t('translations:toolFeaturesByCustomerTitle')}
						</h3>
						<div className='max-w-[470px] text-white mx-auto'>
							{t('translations:toolFeaturesByCustomerText')}
						</div>
					</div>
					<div className='flex flex-col pt-10'>
						<h2 className='text-white'>05</h2>
						<h3 className='text-green'>
							{t('translations:exclusiveGHGAccountingToolTitle')}
						</h3>
						<div className='max-w-[470px] text-white mx-auto'>
							{t('translations:exclusiveGHGAccountingToolText')}
						</div>
					</div>
				</div>
				<div className='flex flex-row mt-10'>
					<h5
						className='text-secondary font-bold hover:underline hover:cursor-pointer'
						onClick={() => navigate(paths.disclaimer)}
					>
						{t('translations:disclaimerTitle')}
					</h5>
				</div>
			</div>
		</div>
	)
}

export default HowTaltechToolWorks
