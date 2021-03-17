import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

function IncomeExpense() {
    const {transactions} = useContext(GlobalContext)
    const amount = transactions.map(transactions=> transactions.amount)
    const income = amount
                    .filter(item => item > 0)
                    .reduce((acc, item)=>(acc += item),0).toFixed(2)

    const expense = (amount
                    .filter(item => item < 0)
                    .reduce( (acc, item)=> (acc += item),0)* -1).toFixed(2)
    return (
        <div>
            <h6> <span style= {{'color':'green'}} >Income $ {income} </span>   | <span style= {{'color':'red'}} > expense $ {expense} </span> </h6>
        </div>
    )
}

export default IncomeExpense
