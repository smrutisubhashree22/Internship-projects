"use server"

import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function compileCode(requestData: any){
    const endpoint = "https://emkc.org/api/v2/piston/execute";

    try {
        const response = await axios.post(endpoint, requestData);
        console.log('Response:', response.data);
        return response.data
    } catch (error) {
        console.log("Error:", error);
        return error
    }
}