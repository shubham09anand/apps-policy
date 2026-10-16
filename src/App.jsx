import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import PingMeProcessDeletion from './components/policy/pingme/PingMeProcessDeletion';
import PingMePrivacyPolicy from './components/policy/pingme/PingMePrivacyPolicy';
import PingMeRequestDeleteAccount from './components/policy/pingme/PingMeRequestDeleteAccount';

function PingMeLayout() {
	return <Outlet />;
}

function App() {
	return (
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
	);
}

export default App;