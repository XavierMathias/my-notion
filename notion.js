const {Client} = require("@notionhq/client") // getting client from notion library

const notion = new Client({ auth: process.env.NOTION_API_KEY}) // creating an instance of a notion

// this creates a page in the notion db
function createSuggestion({ title, description, num, isProject, tagname1, tagname2}){
    notion.pages.create({ // creating a page
        parent:{ // identifying the parent db by database id
            database_id: process.env.NOTION_DB_ID
        },
        properties: { // modifying the properties of the page
            [process.env.DB_TITLE_ID]: { // identifying the page by property id
                title: [ // property name
                    {
                        type: "text", // assigning property type 
                        text: {
                            content: title // passing whatever the parameters of the function is assigned
                        }
                    }
                ]
            },
            [process.env.DB_DISC_ID]: {
                rich_text: [{
                    type: "text",
                    text: {
                        content: description
                    }
                }
                ]
            },
            [process.env.DB_VALUES_ID]:{
                number: num
            },
            [process.env.DB_PROJECTS_ID]:{
                checkbox: isProject
            },
            [process.env.DB_TAGS_ID]: {
                multi_select:[
                    {
                        name: tagname1,
                        color: "blue"
                    },
                    {
                        name: tagname2 
                    }
                ]
            }


        }
    })

}

createSuggestion( 
    {title: "my second page on the BD", 
    description: "this yes is just some text to fill", 
    num:7263, 
    isProject: true,
    tagname1: "item1",
    tagname2: "item2"
})