import './App.css';
import { useEffect } from 'react';
import { Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom';

import PingMeProcessDeletion from './components/policy/pingme/PingMeProcessDeletion';
import PingMePrivacyPolicy from './components/policy/pingme/PingMePrivacyPolicy';
import PingMeRequestDeleteAccount from './components/policy/pingme/PingMeRequestDeleteAccount';
import PingMeFAQ from './components/policy/pingme/PingMeFAQ';

function PingMeLayout() {
	return <Outlet />;
}

function PageTitle() {
	const { pathname } = useLocation();

	useEffect(() => {
		switch (pathname) {
			case '/pingme/verify-deletion-request':
				document.title = 'Verify Deletion Request | PingMe';
				break;

			case '/pingme/privacy-policy':
				document.title = 'Privacy Policy | PingMe';
				break;

			case '/pingme/ping-me-request-delete-account':
				document.title = 'Delete Account | PingMe';
				break;

			default:
				document.title = 'PingMe';
		}
	}, [pathname]);

	return null;
}

function App() {
	return (
		<>
			<PageTitle />

			<Routes>
				{/* Redirect the root URL to the privacy policy */}
				<Route
					path="/"
					element={
						<Navigate
							to="/pingme/privacy-policy"
							replace
						/>
					}
				/>

				<Route path="/pingme" element={<PingMeLayout />}>
					{/* Redirect /pingme to the privacy policy */}
					<Route
						index
						element={
							<Navigate
								to="privacy-policy"
								replace
							/>
						}
					/>

					<Route
						path="verify-deletion-request"
						element={<PingMeProcessDeletion />}
					/>

					<Route
						path="privacy-policy"
						element={<PingMePrivacyPolicy />}
					/>

					<Route
						path="ping-me-request-delete-account"
						element={<PingMeRequestDeleteAccount />}
					/>

					<Route
						path="ping-me-faq"
						element={<PingMeFAQ />}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;

