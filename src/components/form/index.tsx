import { useState } from "react";
import { Spinner } from "../ui/spinner";

type FormProps = {
    onSubmit: (type: string, number: string) => void;
    isLoading: boolean;
};

export const Form = ({ onSubmit, isLoading }: FormProps) => {
    const [type, setType] = useState("math");
    const [number, setNumber] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(type, number);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        >
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="type">
                    Fact Type
                </label>
                <select
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="math">Math</option>
                    <option value="trivia">Trivia</option>
                    <option value="date">Date</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="number">
                    {type === "date" ? "Date (MM/DD)" : "Number"}
                </label>
                <input
                    id="number"
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder={type === "date" ? "e.g. 08/09" : "e.g. 42"}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-2 px-4 rounded text-white font-medium flex items-center justify-center ${
                    isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
                {isLoading ? (
                    <>
                        <Spinner />
                        <span className="ml-2">Loading...</span>
                    </>
                ) : (
                    "Get Fact"
                )}
            </button>
        </form>
    );
};
