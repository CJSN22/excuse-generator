const article = ["the", "my", "a", "someones", "everyones" ]
const subject = ["car", "shoes", "brain", "wife", "dog"]
const action = ["stopped", "exploded", "broke", "shredded", "distroyed"]
const what = ["my pants"]
const predicate = ["really bad", "completly", "slowly", "loudly", "really fast"]


let excuse = article[Math.floor(Math.random() * 5)] + " " + subject[Math.floor(Math.random() * 5)] + " " + action[Math.floor(Math.random() * 5)] + " " + what + " " + predicate[Math.floor(Math.random() * 5)];

console.log(excuse);

document.querySelector("p").innerHTML = excuse;
