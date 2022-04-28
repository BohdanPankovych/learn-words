import appDAO from './appDAO';
import DirectoryPath, {appPath} from '../data/constants/DirectoryPath';
import * as FileSystem from 'expo-file-system';

const getDictionariesList = async () =>{
    const res = await FileSystem.getInfoAsync(DirectoryPath.dictionariesFilePath);
    if(!res.exists)
        await appDAO.makeFile(DirectoryPath.dictionariesFilePath, [])
    return await appDAO.readFile(DirectoryPath.dictionariesFilePath);
}

const updateDictionaryList = async (content) => {
    return await appDAO.makeFile(DirectoryPath.dictionariesFilePath, content)
}

const deleteDictionary = async (id, content) => {
    await appDAO.deleteFile(DirectoryPath.wordsDictFilePath(id));
    await appDAO.makeFile(DirectoryPath.dictionariesFilePath, content)
}

const getWordsList = async (id) =>{
    const res = await FileSystem.getInfoAsync(DirectoryPath.wordsDictFilePath(id));
    // FileSystem.deleteAsync(DirectoryPath.wordsDictFilePath(id))
    if(!res.exists)
        await appDAO.makeFile(DirectoryPath.wordsDictFilePath(id), [])
    return await appDAO.readFile(DirectoryPath.wordsDictFilePath(id));
}

const createWordsList = async (id, content) =>{
    return await appDAO.makeFile(DirectoryPath.wordsDictFilePath(id), content);
}

const appService = {
    updateDictionaryList,
    getDictionariesList,
    deleteDictionary,
    getWordsList,
    createWordsList
}

export default appService;