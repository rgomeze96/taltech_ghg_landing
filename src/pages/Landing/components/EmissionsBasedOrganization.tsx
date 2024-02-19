const EmissionsBasedOrganization = () => {
	return (
		<div className='container max-w-[1024px] min-h-[300px] pb-20 pt-20 relative'>
			<div className='flex flex-row gap-5'>
				<div className='basis-1/3'>
					<div className='flex flex-col'>
						<h2 className='text-black font-bold'>
							EMISSIONS BASED ON YOUR ORGANIZATION’S ACTIVITY & INDUSTRY
							ACCEPTED SCOPES
						</h2>
						<div className='text-black pt-10'>
							Something about Scopes and Activity based emissions and why it’s a
							good way of showing data to organizations - how will it help them
							make sense of their choices..
						</div>
					</div>
				</div>
				<div className='basis-2/3'>
					<img
						src='/emissions-based-organization.jpg'
						alt="Emissions based on your organization's activity Bar Graph"
					/>
				</div>
			</div>
			<div className='flex flex-row gap-5'></div>
		</div>
	)
}

export default EmissionsBasedOrganization
