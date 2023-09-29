import React from "react"
import { useEffect } from "react"

const fetchTeste = async () => {

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await fetch('http://10.87.207.10:8081/teste', { method: 'GET' })
                const data = await response.json()
                console.log(data)
                return data
            } catch (error) {
                console.log("Nâo foi possível realizar o fetch: " + error)
            }
        }
    }, [])

}

export default fetchTeste