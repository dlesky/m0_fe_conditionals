
// After completing your selected challenge(s), create a short video to share with your Slack small group as part of your deliverable for this lesson. In your video, please:
// - Introduce the challenge
// - Demonstrate how to live-code the solution
// - Explain each line of code (this can be done while live-coding or after)
// - Show that the program works as intended by running the code (you should run the code more than once to prove it works for all logic paths)
// - Share a challenge or question you had when you solved it the first time


var num = 18; 

if (num % 3===0 && num % 5===0) {
    console.log("FizzBuzz")
}
else if (num % 3===0) {
    console.log("Fizz")
}
else if (num % 5===0) {
    console.log("Buzz")
}
else {
    console.log(num)
}
