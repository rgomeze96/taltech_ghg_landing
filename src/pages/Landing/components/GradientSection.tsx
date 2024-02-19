import { Icons } from '@/assets/icons'
import { useTranslation } from 'react-i18next'

const GradientSection = () => {
	const { t } = useTranslation()
	return (
		<>
			<div className='flex flex-row w-full pt-10'>
				<div className='w-full h-full min-h-[250px] lg:min-h-[445px] min-w-[250px] pb-20 bg-gradient-to-r from-violet-950/50 via-lime-800/60 to-violet-950/70'>
					<div className='container max-w-[1024px]'>
						<div className='flex flex-row flex-wrap sm:flex-nowrap'>
							<div className='flex flex-col pt-10'>
								<h4 className='text-white font-normal w-60'>
									{t('translations:accountingAndReportingPrinciples')}
								</h4>
								<h1 className='text-white font-bold pt-10'>
									{t('translations:accurate')}
								</h1>
								<h1 className='text-white font-bold pt-2'>
									{t('translations:consistent')}
								</h1>
								<h1 className='text-white font-bold pt-2'>
									{t('translations:transparent')}
								</h1>
							</div>
							<a
								className='hover:underline text-white ml-auto pr-20 pt-28'
								href='/'
							>
								<div className='w-full flex flex-col'>
									<h1 className='text-white font-bold'>
										{t('translations:startEmissionInventory')}
									</h1>
									<Icons.TransitEnterExit className='h-[40px] w-[40px] mt-15 ml-auto fill-white' />
								</div>
							</a>
						</div>
						<div className='flex flex-row-reverse'>
							<div className='flex flex-col relative lg:absolute'>
								<img
									className='h-[460px] w-full max-w-[321px] object-cover right-0 rounded-[10px] mt-10 mx-auto'
									src='/office-building-bg-purple-50000.jpg'
									alt='Office building, grey sky background'
								/>
								<div className='text-white pl-10 lg:text-black max-w-[441px]'>
									{t('translations:companiesInTotalThatWillFall')}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default GradientSection
