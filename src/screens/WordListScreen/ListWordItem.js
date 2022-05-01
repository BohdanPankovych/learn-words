import React from 'react';
import ListItem from '../../components/List/ListItem';
import { useSelector } from 'react-redux';
import appService from '../../storage/appService';

const ListWordItem = ({dictionaryId, id, onDelete, ...props}) => {

    const handleDelete = React.useCallback(() =>{
        onDelete(id);
        appService.deleteWord(dictionaryId, id);
    }, [])

    return (<ListItem id={id} onDelete={handleDelete} {...props}/>)
}

export default React.memo(ListWordItem);