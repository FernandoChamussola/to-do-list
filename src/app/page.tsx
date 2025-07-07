'use client'

import { useState } from 'react'

export default function Home() {
  const [tarefas, setTarefas] = useState([])
  const [novaTarefa, setNovaTarefa] = useState("")

  const adicionarTarefa = () => {
    if (novaTarefa.trim()) {
      setTarefas([...tarefas, novaTarefa])
      setNovaTarefa("")
    }
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>📋 Lista de Tarefas 2.0.1</h1>
      
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa aqui para adicionar"
        style={{
          padding: '0.5rem',
          marginRight: '2rem',
          width: '300px',
        }}
      />
      
      <button onClick={adicionarTarefa} style={{ padding: '0.5rem 1rem' }}>
        Adicionar
      </button>

      <ul style={{ marginTop: '2rem', listStyleType: 'none', padding: 0 }}>
        {tarefas.map((tarefa, index) => (
          <li key={index} style={{ marginBottom: '0.5rem' }}>
            ✅ {tarefa}
          </li>
        ))}
      </ul>
    </main>
  )
}
