import './App.css';
import Comments from './Comments';
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

function App() {
  // This is a placeholder for the blog posts.
  // In a real application, you would fetch this data from an API.
  const blogs = [
    { id: 1, title: 'My First Blog Post', content: 'This is my first blog post.' },
    { id: 2, title: 'My Second Blog Post', content: 'This is my second blog post.' },
  ];

  return (
    <div className="bg-background-2 text-gray-9 min-h-screen flex flex-col">
      <header className="material-base bg-background-1 p-4 flex justify-between items-center">
        <h1 className="text-heading-40">Likhon Sheikh's Blog</h1>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {blogs.map(blog => (
          <div key={blog.id} className="material-medium bg-background-1 p-4 mb-4">
            <h2 className="text-heading-32">{blog.title}</h2>
            <p className="text-copy-16">{blog.content}</p>
            <Comments blogId={blog.id} />
          </div>
        ))}
      </main>
      <footer className="material-base bg-background-1 p-4 mt-8">
        <div className="container mx-auto text-center text-label-14">
          <p>&copy; 2025 Likhon Sheikh. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://t.me/likhonsheikh" target="_blank" rel="noopener noreferrer" className="text-blue-6 hover:underline">Telegram</a>
            <a href="https://github.com/codedwithlikhon" target="_blank" rel="noopener noreferrer" className="text-blue-6 hover:underline">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;