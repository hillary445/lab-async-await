// Write your code here!
/* 
fetch ("https://jsonplaceholder.typicode.com/posts")
.then ( response => response.json())
.then ( posts => {console.log (posts)})

.catch ( error => {console.log("Error has been caught:", error)}
)
 */
function displayPosts(posts){

    const list = document.querySelector("#post-list")
    
    posts.forEach(post => {

        const li = document.createElement("li")

        const h1 = document.createElement("h1")

        h1.textContent = `${post.title}`

        const p = document.createElement("p")

        p.textContent = `${post.body}`

        li.append(h1, p)

        list.append(li)

    });
          
}

async function fetchAndApply(){
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
        const posts = await response.json();

        displayPosts(posts);

    }catch(error){
        const list = document.querySelector("#post-list")

        const errorMessage = document.createElement("li")
        errorMessage.textContent = 'Failed to load posts data. Please try again later.';

        list.appendChild(errorMessage);

        console.error('Error fetching post data:', error);
    }
}


fetchAndApply()