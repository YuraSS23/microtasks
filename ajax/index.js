const resultBlock = document.querySelector("#result")
const pageNumberEl = document.querySelector("#page-number")
const clickMeButton = document.querySelector("#click-me")
const getTasksButton = document.querySelector("#get-tasks")

clickMeButton.addEventListener("click", () => {
    const promise = getImages(pageNumberEl.value);
    promise.then(onImagesReceived)
})

getTasksButton.addEventListener("click", () => {
    const promise = getTasks()
    promise.then(onTasksReceived)
})

createTask("learn JS").then((data)=>{
    console.log(data)
})

function onTasksReceived (tasks){
    tasks.forEach(task=> {
        const li = document.createElement("li")
        li.innerHTML = task.title
        document.querySelector("tasks-result").appendChild(li)
    })
}
function onImagesReceived(array) {

}