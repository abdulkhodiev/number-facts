import { useState } from "react";
import { getNumberFact } from "./utils/api/instance";
import { validateInput } from "./utils/validations";
import { Form } from "./components/form";
import { Error } from "./components/error";
import { Result } from "./components/result";

const App = () => {
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleFormSubmit = async (type: string, number: string) => {
        setError("");
        setResult("");

        const validationError = validateInput(type, number);
        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            setIsLoading(true);
            const data = await getNumberFact(number, type);
            setResult(data);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err: unknown) {
            setError("An unexpected error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Number Facts
                </h1>

                <Form onSubmit={handleFormSubmit} isLoading={isLoading} />

                <div className="mt-6 w-full">
                    <Error message={error} />
                    <Result data={result} />
                </div>
            </div>
        </div>
    );
};

export default App;
