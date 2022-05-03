import React from 'react';
import ListItem from '../../components/List/ListItem';
import { useSelector } from 'react-redux';
import SQLService from '../../storage/SQLService';

const ListDictionaryItem = ({id, onDelete, ...props}) =>{
    const handleDelete = React.useCallback(() =>{
        onDelete(id)
        SQLService.deleteDictionary(id)
    }, [])

    return (<ListItem id={id} onDelete={handleDelete} {...props}/>)
}

export default React.memo(ListDictionaryItem);