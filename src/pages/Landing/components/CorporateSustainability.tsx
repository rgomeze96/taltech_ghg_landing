import React from 'react'
import { useTranslation } from 'react-i18next'

const CorporateSustainability = () => {
	const { t } = useTranslation()
	return (
		<>
			<div className='flex flex-row w-full pb-20 bg-grey-lighten'>
				<div className='container max-w-[1024px] pb-20'>
					<div className='flex flex-col'>
						<h1 className='text-black pt-36 min-w-[350px] max-w-[523px]'>
							{t('translations:corporateSustainabilityTitle')}
						</h1>
						<div className='text-black pt-20 w-[441px]'>
							{t('translations:corporateSustainabilityText')}
						</div>
						<div className='text-black pt-5 w-[441px]'>
							{t('translations:netRevenueBalanceSheet')
								.split('\n')
								.map((line, index) => (
									<React.Fragment key={index}>
										{line}
										<br />
									</React.Fragment>
								))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CorporateSustainability
