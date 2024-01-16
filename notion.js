const {Client} = require("@notionhq/client") // getting client from notion library

const notion = new Client({ auth: process.env.NOTION_API_KEY}) // creating an instance of a notion

// this creates a page in the notion db
function createSuggestion({ title }){
    notion.pages.create({ // creating a page
        parent:{ // identifying the parent db by database id
            database_id: process.env.NOTION_DB_ID
        },
        properties: { // modifying the properties of the page
            [process.env.DB_TITLE_ID]: { // identifying the page by property id
                title: [ // property heading
                    {
                        type: "text", // assigning property type 
                        text: {
                            content: title // passing whatever the parameters of the function is assigned
                        }
                    }
                ]
            }
        }
    })

}

createSuggestion( {title: "my first page on the BD"})