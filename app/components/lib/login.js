import React, { useEffect } from 'react'

const fetchLogin = async ({ email, senha }) => {
    useEffect(() => {
        const fetch = async () => {
            try {
                const body = { email, senha }
                const response = await fetch("http://10.87.207.10:8081/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
                })

                const data = await response.json()
                console.log(data)
                return data
            } catch (erro) {
                console.log("Não foi possível fazer o fetch: " + erro)
                return erro
            }
        }
    }, [])
}

export default fetchLogin