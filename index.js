// Array of post objects containing user and post data
const posts = [
  {
    name: "Vincent van Gogh", // User's full name
    username: "vincey1853", // User's handle
    location: "Zundert, Netherlands", // User's location
    avatar: "images/avatar-vangogh.jpg", // Profile picture path
    post: "images/post-vangogh.jpg", // Post image path
    comment: "just took a few mushrooms lol", // Post caption
    likes: 21, // Number of likes
  },
  {
    name: "Gustave Courbet", // User's full name
    username: "gus1819", // User's handle
    location: "Ornans, France", // User's location
    avatar: "images/avatar-courbet.jpg", // Profile picture path
    post: "images/post-courbet.jpg", // Post image path
    comment: "i'm feelin a bit stressed tbh", // Post caption
    likes: 4, // Number of likes
  },
  {
    name: "Joseph Ducreux", // User's full name
    username: "jd1735", // User's handle
    location: "Paris, France", // User's location
    avatar: "images/avatar-ducreux.jpg", // Profile picture path
    post: "images/post-ducreux.jpg", // Post image path
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!", // Post caption
    likes: 152, // Number of likes
  },
];

// Function to display all posts in the feed
function displayProfiles() {
  // Get container element where posts will be rendered
  const container = document.getElementById("posts-container");
  container.innerHTML = ""; // Clear any existing content

  // Loop through each post in the array
  posts.forEach((post) => {
    // Create HTML structure for each post using template literal
    const postElement = `
            <div class="post">
                <!-- Post header with user info -->
                <div class="container">
                    <!-- User avatar -->
                    <div class="poster-avatar">
                        <img src="${post.avatar}" alt="Avatar" class="poster-avatar">
                    </div>
                    <!-- User name and location -->
                    <div class="posterInfo">
                        <span class="posterName boldText">${post.name}</span>
                        <span class="posterLocation">${post.location}</span>
                    </div>
                </div>

                <!-- Main post image -->
                <div class="pPost">
                    <img src="${post.post}" alt="Post" class="post">
                </div>

                <!-- Action buttons (like, comment, share) -->
                <div class="iconFrame">
                    <img src="images/icon-heart.png" alt="like" class="icon like">
                    <img src="images/icon-comment.png" alt="comment" class="icon comment">
                    <img src="images/icon-dm.png" alt="share" class="icon share">
                </div>

                <!-- Post metadata (likes, username, caption) -->
                <span class="boldText">${post.likes} likes</span> <br>
                <span class="boldText"><b>${post.username} </b></span>
                <span class="comment">${post.comment}</span> 
            </div>
        `;

    // Add the new post HTML to the container
    container.innerHTML += postElement;
  });
}

// Initialize the page by displaying all posts
displayProfiles();
