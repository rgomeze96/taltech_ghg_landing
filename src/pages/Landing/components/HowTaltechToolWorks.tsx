import { Icons } from '@/assets/icons'
import { useTranslation } from 'react-i18next'

const HowTaltechToolWorks = () => {
	const { t } = useTranslation()
	return (
		<div className='flex flex-row bg-primary'>
			<div className='container max-w-[1024px] min-h-[300px] pb-20 relative'>
				<div className='lg:absolute top-[-80px] right-[-120px]'>
					<div className='flex flex-row gap-5'>
						<Icons.TrioGroupLeft className='h-[241px] w-[241px]' />
						<Icons.TrioGroupMiddle className='h-[241px] w-[241px]' />
						<Icons.TrioGroupRight className='h-[241px] w-[241px]' />
					</div>
				</div>
				<h1 className='text-white font-bold pt-10 text-5xl max-w-[273px]'>
					How Taltech Tool Works
				</h1>
				<div className='pt-20 columns-1 sm:columns-3'>
					<h2 className='text-white'>01</h2>
					<h3 className='text-green'>{t('translations:emissionInventoryTool')}</h3>
					<div className='max-w-[470px] text-white mx-auto pt-10'>
						{t('translations:taltechBeingInTheForerunnerPosition')}
					</div>
					<h2 className='text-white'>02</h2>
					<h3 className='text-green'>{t('translations:emissionInventoryTool')}</h3>
					<div className='max-w-[470px] text-white mx-auto pt-10'>
						{t('translations:taltechBeingInTheForerunnerPosition')}
					</div>
					<h2 className='text-white'>03</h2>
					<h3 className='text-green'>{t('translations:emissionInventoryTool')}</h3>
					<div className='max-w-[470px] text-white mx-auto pt-10'>
						{t('translations:taltechBeingInTheForerunnerPosition')}
					</div>
				</div>
			</div>
		</div>
	)
}

export default HowTaltechToolWorks
