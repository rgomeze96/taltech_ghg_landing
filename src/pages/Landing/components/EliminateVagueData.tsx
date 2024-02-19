const EliminateVagueData = () => {
	return (
		<div className='container max-w-[1024px] min-h-[300px] pb-20 pt-20 relative'>
			<div className='flex flex-row justify-between'>
				<div className='basis-1/2 pr-16'>
					<img
						src='/eliminate-vague-data.jpg'
						alt='All Energy emissions Horizontal Bar Graph'
					/>
				</div>
				<div className='basis-1/2 pl-16'>
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
			</div>
			<div className='flex flex-row gap-5'></div>
		</div>
	)
}

export default EliminateVagueData
