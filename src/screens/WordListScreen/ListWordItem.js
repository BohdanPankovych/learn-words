import React from 'react';
import ListItem from '../../components/List/ListItem';
import { useSelector } from 'react-redux';
import appService from '../../storage/appService';

const ListWordItem = ({id, ...props}) => {

    const handleDelete = React.useCallback(() =>{
        onDelete(id)
        // appService.deleteDictionary(id, dicitionaries.filter(val => val.id != id))
        // .then(() => console.log("delete"))
        // .catch((err) => console.error(err))
    }, [])

    return (<ListItem id={id} onDelete={handleDelete} {...props}/>)
}

export default React.memo(ListWordItem);