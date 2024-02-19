import Navbar from './components/hoc/Navbar'
import { TailwindIndicator } from './components/ui/tailwind-indicator'
import { LazyRouter } from './routes/LazyRouter'

function App() {
	return (
		<>
			<Navbar />
			<LazyRouter />
			<TailwindIndicator />
		</>
	)
}

export default App
