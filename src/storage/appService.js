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

const appService = {
    updateDictionaryList,
    getDictionariesList
}

export default appService;