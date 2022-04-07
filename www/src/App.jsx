import { TransactionProvider } from "./context/TransactionContext";
import { Layout, Welcome, Connect } from "./components";

const App = () => {
  return (
    <TransactionProvider>
      <Layout.Wrapper>
        <Layout.Navbar />

        <Layout.Page>
          <Connect />
          <Welcome />
        </Layout.Page>

        <Layout.Footer />

      </Layout.Wrapper>
    </TransactionProvider>
  )
}

export default App;
