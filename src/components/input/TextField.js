import React from 'react';
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginVertical: 20,
        marginHorizontal: 10,
        borderWidth: 1,
        width: 175,
        padding: 10,
        fontSize: 18
    },
  });

const TextField = ({value, onChange, ...props}) => {

    const handleChange = React.useCallback((e) =>{
        onChange(e.target.value)
    }, [onChange])

    return (<TextInput style={styles.input} value={value} onChange={handleChange} {...props}/>)
}

export default React.memo(TextField);