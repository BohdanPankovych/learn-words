import * as FileSystem from 'expo-file-system';

const makeDirectory = async (folderPath) => {
    // await RNFS.mkdir(folderPath);
};

const makeFile = async (filePath, content) => {
    try {
      await FileSystem.writeAsStringAsync(filePath, content);
      console.log("written to file");
    } catch (error) { 
      console.log(error);
    }
};

const readFile = async (path) => {
    return await FileSystem.readAsStringAsync(path);
};

const appDAO = {
    makeDirectory,
    makeFile,
    readFile
}

export default appDAO;