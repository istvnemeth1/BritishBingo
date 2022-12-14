let nums = [];
let sleep = 5000;

for (let i = 0; i < 90; i++) {
    nums.push(i + 1);
}

function randomNumsId() {
    return Math.floor(Math.random() * (nums.length - 1));
}

(function play(i) {
    let mathId = randomNumsId();
    const newNode = document.createElement("span");
    newNode.classList.add('badge', 'bg-secondary', 'rounded-circle', 'align-middle', 'fade-in-top');
    // document.querySelector('#bigNum').classList.add('fade-in-left');
    setTimeout(() => {
        document.getElementById("bigNum").innerHTML = nums[mathId];
        document.getElementById(nums[mathId]).style.backgroundColor = "lightcoral";
        newNode.appendChild(document.createTextNode(nums[mathId]));
        document.getElementById("pastNum").insertBefore(newNode, document.getElementById("pastNum").children[0]);
        if (--i) play(i);
        nums.splice(mathId, 1);
    }, sleep);

})(90);