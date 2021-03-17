import React,{useContext} from 'react'

import {GlobalContext} from '../context/GlobalState'
import Transactions from './Transactions'

function TransactionList() {
    const {transactions} = useContext(GlobalContext)
    return (
        <div>
             <h3> History</h3>
            {transactions.map(transactions=>(<Transactions key={transactions.id} id ={transactions.id}   text ={transactions.text} amount= {transactions.amount}  />   ))}
             
        </div>
    )
}

export default TransactionList
