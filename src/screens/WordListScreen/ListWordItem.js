import React from 'react';
import ListItem from '../../components/List/ListItem';
import { useSelector } from 'react-redux';
import SQLService from '../../storage/SQLService';

const ListWordItem = ({wordsFileName, id, onDelete, ...props}) => {

    const handleDelete = React.useCallback(() =>{
        onDelete(id);
        SQLService.deleteWord(wordsFileName, id);
    }, [])

    return (<ListItem id={id} onDelete={handleDelete} {...props}/>)
}

export default React.memo(ListWordItem);