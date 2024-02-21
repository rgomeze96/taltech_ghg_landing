import GradientSection from './components/GradientSection'
import HomeHeader from './components/HomeHeader'
import HowTaltechToolWorks from './components/HowTaltechToolWorks'

const Landing = () => {
	return (
		<>
			<HomeHeader />
			<GradientSection />
			<img
				className='h-[510px] w-full max-w-[1320px] mx-auto object-cover rounded-[10px] mt-24 mb-52'
				src='/taltech-sunset-behind.jpg'
				alt='Taltech University with the sunset behind'
			/>
			<HowTaltechToolWorks />
		</>
	)
}

export default Landing
