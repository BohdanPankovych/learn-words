import * as FileSystem from 'expo-file-system';

export const appPath = FileSystem.documentDirectory

const DirectoryPath = {
    dictionariesFilePath: appPath + "/dictionaries.json",
    wordsDictFilePath: (fileName) => appPath + `/${fileName}.json`
}

export default DirectoryPath;