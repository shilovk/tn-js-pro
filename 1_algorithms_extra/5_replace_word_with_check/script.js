let resource = 'The syntax of Java is largely influenced by C++. Unlike C++, Java does not support operator overloading. Java uses comments similar to those of C++.';

const replaceWord = (memo, newWord, oldWord, ifWord) => {
    memo = memo.split('.');
    memo.forEach((v, i, memo) => {
        if (RegExp(ifWord).exec(v)) {
           memo[i] = v.replace(oldWord, newWord);
        } else
           memo[i] = v;
    });
    return memo.join('.');
}

console.log(replaceWord(resource, 'JS', 'Java', 'overloading'));
