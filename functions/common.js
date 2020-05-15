const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz';

const convertStringToArray = (resource) => {
   return (typeof resource === 'string') ? resource.split('') : resource.slice();
}

const shuffle = (resource) => {
    let memo = convertStringToArray(resource);
    for (let i = memo.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const memoOldChar = memo[i];
        memo[i] = memo[j];
        memo[j] = memoOldChar;
    }
    return memo;
}
