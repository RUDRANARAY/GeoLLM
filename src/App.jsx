import GeotechQA from './GeotechQA'
import './App.css'

function App() {
  return (
    <div className="geollm-root">
     
      <main className="geollm-main">
        <header className="geollm-3d-heading geollm-main-header">GeoLLM</header>
        <div className="geollm-chat-content">
          <GeotechQA />
        </div>
        
      </main>
    </div>
  )
}

export default App
                  