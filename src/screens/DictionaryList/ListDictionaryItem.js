import React from 'react';
import ListItem from '../../components/List/ListItem';
import { useSelector } from 'react-redux';
import appService from '../../storage/appService';

const ListDictionaryItem = ({id, onDelete, ...props}) =>{
    const dicitionaries = useSelector(state => state.dictionary.get("dictionary"));

    const handleDelete = React.useCallback(() =>{
        onDelete(id)
        appService.deleteDictionary(id)
    }, [])

    return (<ListItem id={id} onDelete={handleDelete} {...props}/>)
}

export default React.memo(ListDictionaryItem);