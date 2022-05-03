import * as SQLite from "expo-sqlite";

function openDatabase() {
    if (Platform.OS === "web") {
      return {
        transaction: () => {
          return {
            executeSql: () => {},
          };
        },
      };
    }
  
    const db = SQLite.openDatabase("db.db");
    return db;
}

const handleLog = (_, res) => console.log(res);
  
const db = openDatabase();
db.transaction((tx) => {
    tx.executeSql(
     "create table if not exists dictionaries (id integer primary key not null, wordsFileName text, dictionaryName text, wordCount int);"
    );
});

const getDictionariesList = (callback) =>{
    db.transaction((tx) => {
        tx.executeSql(
          `select * from dictionaries`,
          null,
          (_, { rows: { _array } }) => {
            callback(_array)
          }
        );
    });
}

const updateDictionaryList = (content, callback) => {
    db.transaction(
        (tx) => {
          tx.executeSql("insert into dictionaries (wordsFileName, dictionaryName, wordCount) values (?, ?, 0)", [content.wordsFileName, content.dictionaryName]);
          tx.executeSql(`create table if not exists ${content.wordsFileName} (id integer primary key not null, wordName text, wordTranslate text);`, null);
          tx.executeSql("select * from dictionaries", [], (_, { rows: {_array} }) => {
            callback(_array);
          }
        );
        },
    );
}

const deleteDictionary = (id, dictionaryName, callback) => {
  console.log(id);
    db.transaction(
        (tx) => {
          tx.executeSql(`delete from dictionaries where id = ?;`, [id], handleLog, handleLog);
          tx.executeSql(`drop table ${dictionaryName}`, [], handleLog, handleLog)
        },
    )
    callback()
}

const getWordsList = (wordsFileName, callback) =>{
    db.transaction(
        (tx) => {
            tx.executeSql(`select * from ${wordsFileName}`, [], (_, { rows: { _array } }) => {
                callback(_array)
            }
            )
        },
    )
}

const updateWordsList = (wordsFileName, content, callback) =>{
    db.transaction(
        (tx) => {
            tx.executeSql(`insert into ${wordsFileName} (wordName, wordTranslate) values (?, ?)`, [content.wordName, content.wordTranslate])
            tx.executeSql(`select * from ${wordsFileName}`, [], (_, { rows: {_array} }) => {
                callback(_array)
            },);
        },
    )
}

const deleteWord = (wordsFileName, wordId) => {
    db.transaction(
        (tx) => {
          tx.executeSql(`delete from ${wordsFileName} where id = ?;`, [wordId]);
        },
    )
}

const SQLService = {
    updateDictionaryList,
    getDictionariesList,
    deleteDictionary,
    getWordsList,
    updateWordsList,
    deleteWord
}

export default SQLService;