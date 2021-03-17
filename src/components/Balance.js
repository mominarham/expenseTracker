import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

function Balance() {
    const {transactions} = useContext(GlobalContext)
    const amount = transactions.map(transactions=> transactions.amount)
    const total = amount.reduce((acc, item)=> (acc += item),0).toFixed(2)
    return (
        <div>
            <h3> your Balance </h3>
            <h3 > $ {total}</h3>
        </div>
    )
}

export default Balance
