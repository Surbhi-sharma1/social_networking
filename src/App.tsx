import './App.css'
import Header from './components/header/header'
import images from './assets/images.png'
import Footer from './components/footer'
import Navbar from './components/navbar/navbar'
function App() {
  return (
 
       <main>
<Header image={{src:images,alt:'Social Networking'}}>
<h1>Social Networking</h1>

</Header>
<Navbar />
  <Footer text="© 2024 Social Networking App. All rights reserved." />
  </main>
    
 
  )
}

export default App
