//-- variables --\\

const addBirthdayBtn = $(".addBirthdayBtn")
const inputName = $("#inputNewName")
const inputDate = $("#inputNewDate")
const errorElem = $(".error")



//-- startup --\\

addBirthdayBtn.addEventListener("click", async function(e)
{
    const res = await postToAPI("/api/addBirthday")
    if(res.status == 400) return errorElem.innerText = "Incorrect name or birthday value!"
    errorElem.style.color = "lime"
    errorElem.innerText = "Created!"
    location.href = "/"
})



//-- functions --\\

async function postToAPI(url)
{
    return await fetch(url,
    {
        method: "POST",
        headers:
        {
            "Content-Type": "application/json"
        },
        body: JSON.stringify
        ({
            name: inputName.value, date: inputDate.value
        })
    })
}


function print(input)
{
    console.log(input)
}


function $(element)
{
    return document.querySelector(element)
}


function $$(element)
{
    return document.querySelectorAll(element)
}
