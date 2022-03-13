//-- variables --\\

let mainPage

const headline = $(".birthday")



//-- startup --\\

loadContents()



//-- functions --\\

async function loadContents()
{
    mainPage = await getFromAPI("http://dg-pc:3333/api/")
    headline.innerText += " " + mainPage.todaysBirthday
}


async function getFromAPI(url)
{
    const res = await fetch(url)

    const resToJson = await res.json()
    return resToJson
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
