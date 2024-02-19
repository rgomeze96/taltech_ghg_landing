const ExamineDetailed = () => {
	return (
		<div className='container max-w-[1024px] min-h-[300px] pb-20 pt-20 relative'>
			<div className='flex flex-row gap-5'>
				<div className='basis-1/3'>
					<div className='flex flex-col'>
						<h2 className='text-black uppercase font-bold'>
							Examine your detailed GHG Emissions
						</h2>
						<div className='text-black pt-10'>
							Examine and compare your Organization’s data in details according
							to your units, personnel and more.
						</div>
					</div>
				</div>
				<div className='basis-2/3'>
					<img
						src='/examine-detailed-emissions.jpg'
						alt='Detailed GHG Emissions Horizontal Bar Graph'
					/>
				</div>
			</div>
			<div className='flex flex-row gap-5'></div>
		</div>
	)
}

export default ExamineDetailed
