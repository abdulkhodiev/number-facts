export const validateInput = (type: string, value: string): string | null => {
    if (value.trim() === "") return null;

    if (type === "date") {
        const parts = value.split("/");
        if (parts.length !== 2) return "Date must be in MM/DD format";

        const [month, day] = parts;
        const monthNum = parseInt(month);
        const dayNum = parseInt(day);

        if (isNaN(monthNum)) return "Month must be a number";
        if (isNaN(dayNum)) return "Day must be a number";
        if (monthNum < 1 || monthNum > 12) return "Month must be 1-12";
        if (dayNum < 1 || dayNum > 31) return "Day must be 1-31";

        if (monthNum === 2 && dayNum > 29) return "February has max 29 days";
        if ([4, 6, 9, 11].includes(monthNum) && dayNum > 30) {
            return `Month ${monthNum} has max 30 days`;
        }
    } else {
        const numValue = Number(value);
        if (isNaN(numValue)) return "Must be a valid number";
        if (!Number.isInteger(numValue)) return "Must be an integer";
        if (numValue < 0) return "Must be a positive number";
    }

    return null;
};
