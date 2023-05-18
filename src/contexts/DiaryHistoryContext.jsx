import {createContext, useState} from "react";

export const DiaryHistoryContext = createContext();

const DiaryHistoryContextWrapper = ({children}) => {
    const [diaryHistories, setDiaryHistories] = useState([]);

    return (
        <DiaryHistoryContext.Provider value={{diaryHistories, setDiaryHistories}}>
            {children}
        </DiaryHistoryContext.Provider>
    );
}

export default DiaryHistoryContextWrapper;