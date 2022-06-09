import React, { ChangeEvent } from 'react'
import s from './Greeting.module.css'
import SuperButton from './SuperButton'
import SuperInput from './SuperInput'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.input // need to fix with (?:)

    return (
        <div>
            <SuperInput value={name} onChange={setNameCallback} className={inputClass}/>
            <span className={s.error}>{error}</span>
            <SuperButton className={s.button} onClick={addUser}>add</SuperButton>
            <span className={s.count}>{totalUsers}</span>
        </div>
    )
}

export default Greeting