import { Icons } from '@/assets/icons'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

const HomeHeader = () => {
	const { t } = useTranslation()

	const [showAboutThisProject, setShowAboutThisProject] = useState(false)
	const [showLearnMore, setShowLearnMore] = useState(false)

	const aboutThisProjectTitle = useMemo(() => {
		return showAboutThisProject
			? t('translations:hideAboutThisProjectTitle')
			: t('translations:aboutThisProjectTitle')
	}, [showAboutThisProject, t])

	const learnMoreTitle = useMemo(() => {
		return showLearnMore
			? t('translations:hideLearnMore')
			: t('translations:learnMore')
	}, [showLearnMore, t])

	const rotateAboutThisIconStyle = useMemo(() => {
		return showAboutThisProject ? 'rotate-180' : ''
	}, [showAboutThisProject])

	const rotateLearnMoreIconStyle = useMemo(() => {
		return showLearnMore ? 'rotate-180' : ''
	}, [showLearnMore])

	const handleAboutThisProjectClick = () => {
		setShowAboutThisProject((prev) => !prev)
	}

	const handleLearnMoreClick = () => {
		setShowLearnMore((prev) => !prev)
	}

	return (
		<>
			<div className='container max-w-[1024px]'>
				<h1 className='p-2 text-black font-extrabold'>
					{t('translations:taltechsOpenSourceGHG')}
				</h1>
				<h1 className='p-2 text-green'>
					{t('translations:emissionInventoryTool')}
				</h1>
				<div className='flex flex-row-reverse mb-10'>
					<div className='max-w-[393px] text-black'>
						{t('translations:designedForOrganizationsAndEnterprises')}
					</div>
				</div>
				<div
					className='flex flex-row pl-24 pt-10 hover:underline hover:cursor-pointer'
					onClick={handleLearnMoreClick}
				>
					<h1 className='text-primary font-bold'>
						{learnMoreTitle}
						{!showLearnMore && (
							<Icons.TransitEnterExit
								className={`h-[20px] w-[20px] fill-primary ml-auto ${rotateLearnMoreIconStyle}`}
							/>
						)}
					</h1>
				</div>
				{showLearnMore && (
					<div className='p-5 text-black'>
						{t('translations:learnMoreText')}
					</div>
				)}
				{showLearnMore && (
					<Icons.TransitEnterExit
						className={`h-[20px] w-[20px] mt-5 fill-primary ml-auto ${rotateLearnMoreIconStyle} hover:border-t-2 border-primary hover:cursor-pointer`}
						onClick={handleLearnMoreClick}
					/>
				)}
				<img
					className='h-[488px] w-full max-w-[1320px] mx-auto object-cover rounded-[10px] mt-20'
					src='/taltech-header-mountain.jpg'
					alt='Header nice mountain road background'
				/>
				<h1 className='max-w-[956px] text-black font-extrabold pt-10'>
					{t('translations:lackOfAccuracyInEmissionAccounting')}
				</h1>
				<div className='flex flex-row sm:flex-nowrap flex-wrap pb-10 pt-5'>
					<div className='max-w-[470px] text-black mx-auto p-2'>
						{t('translations:taltechBeingInTheForerunnerPosition')}
					</div>
					<div className='max-w-[470px] text-black mx-auto p-2'>
						{t('translations:supportingTheUpTake')}
					</div>
				</div>
				<div
					className='flex flex-row pt-10 hover:underline hover:cursor-pointer'
					onClick={handleAboutThisProjectClick}
				>
					<h1 className='text-secondary font-bold'>
						{aboutThisProjectTitle}
						{!showAboutThisProject && (
							<Icons.TransitEnterExit
								className={`h-[20px] w-[20px] fill-secondary ml-auto ${rotateAboutThisIconStyle}`}
							/>
						)}
					</h1>
				</div>
				{showAboutThisProject && (
					<div className='p-5 text-black'>
						{t('translations:aboutThisProjectText')}
					</div>
				)}
				{showAboutThisProject && (
					<Icons.TransitEnterExit
						className={`h-[20px] w-[20px] mt-5 fill-secondary ml-auto ${rotateAboutThisIconStyle} hover:underline hover:cursor-pointer`}
						onClick={handleAboutThisProjectClick}
					/>
				)}
			</div>
		</>
	)
}

export default HomeHeader
