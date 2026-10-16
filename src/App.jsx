import './App.css';
import { useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import PingMeProcessDeletion from './components/policy/pingme/PingMeProcessDeletion';
import PingMePrivacyPolicy from './components/policy/pingme/PingMePrivacyPolicy';
import PingMeRequestDeleteAccount from './components/policy/pingme/PingMeRequestDeleteAccount';

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
		<> <PageTitle />


			<Routes>
				<Route path="/pingme" element={<PingMeLayout />}>
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
				</Route>
			</Routes>
		</>
	);


}

export default App;
