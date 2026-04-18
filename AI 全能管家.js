const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('AI  全能管家：今日温度：', (input) => {
    const temp = parseInt(input, 10);

    if (temp >= 30) {
        console.log("今天热，多喝水、注意防晒");
    } else if (temp >= 20) {
        console.log("温度舒服，认真学习");
    } else {
        console.log("今天冷，多穿衣，注意保暖");
    }
    console.log("AI 祝你开心每一天！");
    console.log("已开源");

    rl.close();
});