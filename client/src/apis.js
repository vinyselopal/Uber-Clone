const BASE_URL = 'http://localhost:8000'

export const searchDriversAPI = async (ride) => {
    const response = await fetch(`${BASE_URL}/rides`, {
        method: 'POST',
        body: JSON.stringify({ ride }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const parsedResponse = await response.json()
    console.log(parsedResponse)
}


