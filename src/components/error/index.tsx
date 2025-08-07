type ErrorProps = {
    message: string;
};

export const Error = ({ message }: ErrorProps) => {
    return message ? (
        <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
            <p>{message}</p>
        </div>
    ) : null;
};
