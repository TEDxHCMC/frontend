import fetcher from "./fetcher"

export const sendVerifyCodeAPI = async (formData) => {
    try {
        const response = await fetcher.post("tickets/send-email-verify-code", formData)
        console.log("Response: ", response)
        return response
    } catch (error) {
        console.log("Error: ", error)
    }
}

export const verifyCodeAPI = async (formData) => {
    try {
        const response = await fetcher.post("tickets/verify-code", formData)
        console.log("Response: ", response)
        return response
    } catch (error) {
        console.log("Error: ", error)
    }
}

export const createTicketAPI = async (formData) => {
    try {
        const response = await fetcher.post("tickets/create-ticket", formData)
        console.log("Response: ", response)
        return response
    } catch (error) {
        console.log("Error: ", error)
    }
}


