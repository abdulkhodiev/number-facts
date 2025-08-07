type ResultProps = {
    data: string;
};

export const Result = ({ data }: ResultProps) => {
    return data ? (
        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <p className="text-gray-800 italic">{data}</p>
        </div>
    ) : null;
};
