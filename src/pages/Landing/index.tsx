import CorporateSustainability from './components/CorporateSustainability'
import EliminateVagueData from './components/EliminateVagueData'
import EmissionsBasedOrganization from './components/EmissionsBasedOrganization'
import ExamineDetailed from './components/ExamineDetailed'
import GradientSection from './components/GradientSection'
import HomeHeader from './components/HomeHeader'
import HowTaltechToolWorks from './components/HowTaltechToolWorks'
import HowToAndGithub from './components/HowToAndGithub'
import ReliableEmissionBaseline from './components/ReliableEmissionBaseline'

const Landing = () => {
	return (
		<>
			<HomeHeader />
			<GradientSection />
			<CorporateSustainability />
			<HowToAndGithub />
			<img
				className='h-[510px] w-full max-w-[1320px] mx-auto object-cover rounded-[10px] mt-20 mb-44'
				src='/boat-in-ocean.jpg'
				alt='Large boat in ocean background image'
			/>
			<ReliableEmissionBaseline />
			<HowTaltechToolWorks />
			<ExamineDetailed />
			<EliminateVagueData />
			<EmissionsBasedOrganization />
		</>
	)
}

export default Landing
