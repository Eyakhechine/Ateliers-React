
export const findLongestWord = (tab) => tab.reduce((accumulateur, valeurcourante) => accumulateur.length < valeurcourante.length ?console.log(`${valeurcourante} : ${valeurcourante.length}` ): console.log(`${accumulateur} : ${accumulateur.length}` ));

