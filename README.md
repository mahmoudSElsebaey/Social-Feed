# Social Feed UI (Take‑Home Task) From Bites

A responsive social-media feed built with **Next.js** and **React**, replicating a three‑column layout (Left Sidebar · Main Feed · Right Sidebar). It demonstrates component architecture, mock data fetching via **Next.js API Routes**, loading states, and responsive styling with **Tailwind CSS**.

---

## 🚀 Demo
> _Optional: add your Vercel link here_

---

## 🧰 Tech Stack
- **Next.js**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **React Icons**
- **next/image**

---

## ✨ Features
- **Three‑column layout**: Left (navigation/shortcuts), Center (feed), Right (events, birthdays, chats/contacts)
- **Reusable Post component**: avatar, author name, timestamp, text, images, and action buttons (Like · Comment · Share)
- **Create Post section**: input with quick actions (media, emoji, etc.)
- **Mock API via Next.js API Route** with simulated delay
- **Loading state** while fetching posts
- **Responsive**: collapses to a single column < 768px
- **Dates** formatted like: `Thursday , 17 August , 10:40 PM`

---

## 📁 Project Structure (key parts)
```
src/
  app/
    layout.tsx
    page.tsx
    components/
      Header/
      LeftSidebar/
      Posts/
        CreatePost.tsx
        PostCard.tsx
        PostsList.tsx
      RightSide/
        ChatsSidebar.tsx      // Community & Group chats + Online contacts
        EventsSidebar.tsx     // Coming Events + Birthdays
  pages/
    api/
      posts.ts               // Mock API route with artificial delay
public/
  images/                    // Post images
  assets/                    // Local placeholders if needed
```

---

## 🔌 Mock API (required by task)
The task requests simulating API fetching using **API Routes**. This project exposes:

- **GET** `/Data/posts` → returns an array of posts after a small delay.

Example (excerpt):
```ts
// pages/Data/posts.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const posts = [
  {
    id: 1,
    author: {
      name: 'Robert Hammond',
      avatarUrl: 'https://i.pravatar.cc/150?u=roberthammond',
    },
    post: {
      text: 'My wife prepared a surprise trip for me... 🇱🇰',
      images: ['/images/sri-lanka-1.jpg', '/images/sri-lanka-2.jpg'],
      likes: 230,
      comments: 6,
      shares: 2,
    },
    timestamp: '2025-08-15T01:08:00Z',
  },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  setTimeout(() => res.status(200).json(posts), 1000); // simulate network delay
}
```

Consume it from the client (simplified):
```tsx
useEffect(() => {
  const load = async () => {
    const res = await fetch('/api/posts');
    const data = await res.json();
    setPosts(data);
  };
  load();
}, []);
```

---

## ⚙️ Configuration
If you load remote avatars (e.g., from `i.pravatar.cc`), add this to `next.config.js`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.pravatar.cc' },
    ],
  },
};
module.exports = nextConfig;
```

---

## 🛠️ Getting Started
### Prerequisites
- **Node.js 18+**

### Install & Run
```bash
# 1) Clone
git clone https://github.com/<your-username>/social-feed.git
cd social-feed

# 2) Install deps
npm install

# 3) Run dev server
npm run dev
# http://localhost:3000
```

### Useful Scripts
```bash
npm run build   # production build
npm run start   # run production build
npm run lint    # lint code
```

---

## 📐 Responsiveness
- Desktop: 3 columns (Left · Main · Right)
- Tablet/Mobile (<768px): collapses to a single column; sidebars stack or hide

---

## 🧩 Implementation Notes
- **State & Data Fetching**: React hooks (`useState`, `useEffect`); fetch from `/api/posts`
- **Dates**: formatted with `Intl` to: `Thursday , 17 August , 10:40 PM`
- **Styling**: Tailwind utility classes; focus on spacing/typography/hover states
- **Components** kept small and reusable (cards, lists, widgets)

---

## ✅ Assumptions
- Action buttons (Like/Comment/Share) are presentational only
- Sidebars are simplified
- Images are placeholders stored in `public/images` (or remote avatars)
- No backend/database; mock only

---

## 🧭 Future Improvements
- Persisted interactions (like counters)
- Comments UI with expand/collapse
- Image grid variants (1, 2, 3+)
- Dark mode toggle
- Tests (React Testing Library)

---

## 👤 Author
**Mahmoud Elsebaey**

- GitHub: _add link_
- LinkedIn: _add link_

