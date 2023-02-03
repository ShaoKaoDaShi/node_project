/**
 * https://www.nowcoder.com/practice/237ae40ea1e84d8980c1d5666d1c53bc?tpId=308&tqId=2032575&ru=/exam/oj&qru=/ta/algorithm-start/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D308
 */


const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const props = []
    while(line = await readline()){
        let tokens = line.split(' ');
        let a = parseInt(tokens[0]);
        let b = parseInt(tokens[1]);
        // console.log(a + b);
        props.push([a,b])
    }
    const backBook = props.shift()
    const backVolume = backBook[1]
    const tonList = props
    const sumPrice = 0;
    const prePrice = 0;
    const preVolume = 0
    for(let i = 0 ; i < tonList.length; i++){
        let prePrice1 = prePrice, prePrice2 = prePrice
        if(tonList[i][0]<=backVolume) {
            prePrice1 = Math.max(tonList[i][1], prePrice)
        }
        if(tonList[i][0]+preVolume <= backVolume ){
            prePrice2 = prePrice+ tonList[i][1]
        }

        prePrice = Math.max(prePrice1, prePrice2)
    }
    console.log(prePrice)
}()