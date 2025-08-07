export const getNumberFact = async (number: string, type: string) => {
    try {
        const url = number
            ? `http://numbersapi.com/${number}/${type}`
            : `http://numbersapi.com/random/${type}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        return await response.text();
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown network error";
        throw new Error(`Network Error: ${errorMessage}`);
    }
};
