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
  
const db = openDatabase();
db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists dictionaries (id text primary key not null, dictionaryName text, wordCount int);"
    );
});

const getDictionariesList = (callback) =>{
    db.transaction((tx) => {
        tx.executeSql(
          `select * from dictionaries`,
          null,
          (_, { rows: { _array } }) => callback(_array)
        );
    });
}

const updateDictionaryList = (content, callback) => {
    db.transaction(
        (tx) => {
          tx.executeSql("insert into dictionaries (id, dictionaryName, wordCount) values (?, ?, 0)", [content.id, content.dictionaryName]);
          tx.executeSql(`create table if not exists ${content.id} (id integer primary key not null, wordName text, wordTranslate text);`, null, null, (error)=>console.log(error));
          tx.executeSql("select * from dictionaries", [], (_, { rows: {_array} }) => {
            callback(_array)
        }
        );
        },
    );
}

const deleteDictionary = (id) => {
    db.transaction(
        (tx) => {
          tx.executeSql(`delete from dictionaries where id = ?;`, [id]);
          tx.executeSql(`drop table ${id}`)
        },
    )
}

const getWordsList = (id, callback) =>{
    db.transaction(
        (tx) => {
            tx.executeSql(`select * from ${id}`, [], (_, { rows: { _array } }) => {
                callback(_array)
            }
            )
        },
    )
}

const updateWordsList = (id, content, callback) =>{
    console.log(content);
    db.transaction(
        (tx) => {
            tx.executeSql(`insert into ${id} (wordName, wordTranslate) values (?, ?)`, [content.wordName, content.wordTranslate])
            tx.executeSql(`select * from ${id}`, [], (_, { rows: {_array} }) => {
                callback(_array)
            },);
        },
    )
}

const deleteWord = (dictionaryId, wordId) => {
    db.transaction(
        (tx) => {
          tx.executeSql(`delete from ${dictionaryId} where id = ?;`, [wordId]);
        },
    )
}

const appService = {
    updateDictionaryList,
    getDictionariesList,
    deleteDictionary,
    getWordsList,
    updateWordsList,
    deleteWord
}

export default appService;