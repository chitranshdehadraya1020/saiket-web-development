let posts = JSON.parse(localStorage.getItem("posts")) || [];

displayPosts();


function savePost() {

    let title = document.getElementById("title").value.trim();

    let content =
        document.getElementById("content").value.trim();

    if (title === "" || content === "") {
        alert("Please fill in all fields.");
        return;
    }

    let post = {
        id: Date.now(),
        title: title,
        content: content
    };

    posts.unshift(post);

    localStorage.setItem(
        "posts",
        JSON.stringify(posts)
    );

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    displayPosts();

    alert("Post published successfully!");
}


function displayPosts() {

    let container =
        document.getElementById("posts");

    container.innerHTML = "";

    if (posts.length === 0) {

        container.innerHTML =
            "<p>No blog posts yet.</p>";

        return;
    }

    posts.forEach(function(post) {

        let article =
            document.createElement("article");

        article.className = "post";

        article.innerHTML = `
            <h3>${post.title}</h3>

            <p>${post.content}</p>

            <button
                class="delete"
                onclick="deletePost(${post.id})">
                Delete
            </button>
        `;

        container.appendChild(article);
    });
}


function deletePost(id) {

    posts = posts.filter(function(post) {
        return post.id !== id;
    });

    localStorage.setItem(
        "posts",
        JSON.stringify(posts)
    );

    displayPosts();
}


function showEditor() {

    document.getElementById("editor")
        .scrollIntoView({
            behavior: "smooth"
        });
}
