const {Client} = require("@notionhq/client") // getting client from notion library

const notion = new Client({ auth: process.env.NOTION_API_KEY}) // creating an instance of a notion

function createSuggestion({ title }){
    notion.pages.create({
        parent:{
            database_id: process.env.NOTION_DB_ID
        },
        properties: {
            [process.env.DB_TITLE_ID]: {
                title: [
                    {
                        type: "text",
                        text: {
                            content: title
                        }
                    }
                ]
            }
        }
    })

}