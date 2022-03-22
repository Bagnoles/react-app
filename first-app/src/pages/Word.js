import {Button} from "@mui/material";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllWord} from "../store/word/actions";
import {CircularProgress} from "@mui/material";


const Word = () => {
    const { word, request, error } = useSelector(state => state.word);
    const dispatch = useDispatch();

    const requestWord = () => {
        dispatch(getAllWord());
    }

    useEffect(() => {
        requestWord();
    }, []);

    if (request) {
        return <CircularProgress />;
    }

    return (
        <div>
            <h4>Random word</h4>
            { error && (
                <>
                <p>Request error</p>
                <Button onClick={requestWord}>Try again</Button>
                </>
            )}
            <p>{word[0]?.word}</p>
            <p>Definition: {word[0]?.definition}</p>
        </div>
    )
}

export default Word;