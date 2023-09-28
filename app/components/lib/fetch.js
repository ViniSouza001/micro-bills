import React from "react"

const fetchTeste = async () => {
    try {
        const response = await fetch('http://localhost:8081/teste', { method: 'GET' })
        const data = await response.text()
        return data
    } catch (error) {
        console.log("Nâo foi possível realizar o fetch: " + error)
    }
}

export default fetchTeste