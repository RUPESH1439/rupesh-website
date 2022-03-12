import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default App;
