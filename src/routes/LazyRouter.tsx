/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { paths } from './paths'

const lazyLoad = (importFunction: any) => {
	const Component = lazy(importFunction)
	return (props: any) => (
		<Suspense fallback={<>Loading...</>}>
			<Component {...props} />
		</Suspense>
	)
}

const LandingComponent = lazyLoad(() => import('../pages/Landing'))

export function LazyRouter() {
	return (
		<Routes>
			<Route path={paths.landing} element={<LandingComponent />} />
		</Routes>
	)
}
