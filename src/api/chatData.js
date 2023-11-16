const URL = "https://qa.corider.in/assignment/chat?page=0";

export const getChatData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}