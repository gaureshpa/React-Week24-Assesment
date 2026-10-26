import './App.css'
import Header from './components/Header'
import LeaveBalanceSection from './components/LeaveBalanceSection'
import RequestForm from './components/RequestForm'
import MyRequests from './components/MyRequests'

function App() {
  return (
    
    <div className="app">
      <Header />
      
      <main className="app_main">
        <LeaveBalanceSection />

        <div className="request_section">
          <RequestForm />
          <MyRequests />
        </div>
      </main>
    </div>
  )
}

export default App
