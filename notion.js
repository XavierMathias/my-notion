const {Client} = require("@notionhq/client") // getting client from notion library

const notion = new Client({ auth: process.env.NOTION_API_KEY}) // creating an instance of a notion

// function will pass the notion database id so that we can retrieve the database
async function getDB(){
    const response = await notion.databases.retrieve({database_id: process.env.NOTION_DB_ID})
    console.log(response) // prints on the console the json of the database
}

getDB() // calling getDB function