import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Products from './components/Products'

function App() {
  
  return (
    <div>
      <header>
        <Header/>
      </header>

      <main>
        <Banner/>

        <section>
          <Products/>
        </section>
      </main>
    </div>
  )
}

export default App
