import { Icons } from '@/assets/icons'
import { useTranslation } from 'react-i18next'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

const GradientSection = () => {
	const { t } = useTranslation()
	return (
		<>
			<div className='flex flex-row w-full pt-10'>
				<div className='w-full h-full min-h-[250px] lg:min-h-[445px] min-w-[250px] pb-20 bg-gradient-to-r from-violet-950/50 via-lime-800/60 to-violet-950/70'>
					<div className='container max-w-[1024px] mt-10'>
						<h3 className='text-white'>
							{t('translations:whatYouCanDoWithOurToolTitle')}
						</h3>
						<Accordion type='single' collapsible className='w-full'>
							<AccordionItem value='item-1'>
								<AccordionTrigger>
									{t('translations:toolTitle')}
								</AccordionTrigger>
								<AccordionContent>
									{t('translations:toolText')}
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value='item-2'>
								<AccordionTrigger>
									{t('translations:emissionFactorDatabaseTitle')}
								</AccordionTrigger>
								<AccordionContent>
									{t('translations:emissionFactorDatabaseText')}
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value='item-3'>
								<AccordionTrigger>
									{t('translations:estimateTheAccuracyTitle')}
								</AccordionTrigger>
								<AccordionContent>
									{t('translations:estimateTheAccuracyText')}
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value='item-4'>
								<AccordionTrigger>
									{t('translations:turnYourFinancialTitle')}
								</AccordionTrigger>
								<AccordionContent>
									{t('translations:turnYourFinancialText')}
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<div className='flex flex-row flex-wrap sm:flex-nowrap'>
							<a
								className='hover:underline text-white ml-auto pr-20 pt-28'
								onClick={() =>
									(location.href = 'https://ghg-tool.vercel.app/login')
								}
							>
								<div className='w-full flex flex-col'>
									<h1 className='text-white font-bold'>
										{t('translations:goToEmissionInventoryTool')}
									</h1>
									<Icons.TransitEnterExit className='h-[40px] w-[40px] mt-15 ml-auto fill-white' />
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default GradientSection
