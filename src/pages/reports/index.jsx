import { useContext } from "react";
import { DiaryHistoryContext } from "../../contexts/DiaryHistoryContext";

const Reports = () => {

    const {diaryHistories} = useContext(DiaryHistoryContext);

    return(
        <>
            <div>Reports page</div>
            <div>Number of entry: {diaryHistories.length}</div>
        </>
    );
}

export default Reports;