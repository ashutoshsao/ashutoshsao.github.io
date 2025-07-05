
const fs = require('fs');
const path = require('path');

const blogsDir = path.join(__dirname, '../blogs');
const blogIndexFile = path.join(blogsDir, 'blog-index.js');

const blogFiles = fs.readdirSync(blogsDir).filter(file => file.endsWith('.html'));

const blogs = blogFiles.map(file => {
    const filePath = path.join(blogsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    const titleMatch = content.match(/<title>(.*?)<\/title>/);
    const title = titleMatch ? titleMatch[1] : 'Untitled';
    
    const dateMatch = content.match(/<p class="date">(.*?)<\/p>/) || content.match(/<p><span style="font-size: 1.1em; color: #666666;">(.*?)<\/span><\/p>/);
    const date = dateMatch ? dateMatch[1] : 'No date';
    
    return {
        title,
        date,
        href: `blogs/${file}`
    };
});

blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

const blogIndexContent = `const blogs = ${JSON.stringify(blogs, null, 2)};

const list = document.getElementById("blog-list");

blogs.forEach(({ title, date, href }) => {
  const li = document.createElement("li");

  const a = document.createElement("a");
  a.href = href;
  a.textContent = title;

  const span = document.createElement("span");
  span.className = "blog-meta";
  span.textContent = date;

  li.appendChild(a);
  li.appendChild(span);
  list.appendChild(li);
});
`;

fs.writeFileSync(blogIndexFile, blogIndexContent);

console.log('Blog index generated successfully!');
