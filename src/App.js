import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransactionList from './components/TransactionList'
import TransactionAdd from './components/TransactionAdd'
import {GlobalProvider} from './context/GlobalState'


function App() {
  return (
    <div className="App">
    <GlobalProvider>
      <Header/>
      <div className = 'mt-5' >
      <Balance/>
      <IncomeExpense/>
      <TransactionAdd/>
      <TransactionList/>
      </div>
    </GlobalProvider>
    </div>
  );
}

export default App;
