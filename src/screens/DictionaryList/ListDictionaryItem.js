import React from 'react';
import ListItem from '../../components/List/ListItem';
import { useSelector } from 'react-redux';
import SQLService from '../../storage/SQLService';

const ListDictionaryItem = ({id, dictionaryName, onDelete, ...props}) =>{
    const handleDelete = React.useCallback(() =>{
        SQLService.deleteDictionary(id, dictionaryName, ()=>{
            onDelete(id)
        })
    }, [id, dictionaryName])

    return (<ListItem id={id} onDelete={handleDelete} {...props}/>)
}

export default React.memo(ListDictionaryItem);