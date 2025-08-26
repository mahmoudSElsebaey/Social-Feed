# Social Feed UI (Take‑Home Task) From Bites

A responsive social-media feed built with **Next.js** and **React**, replicating a three‑column layout (Left Sidebar · Main Feed · Right Sidebar). It demonstrates component architecture, mock data fetching via **Next.js API Routes**, loading states, and responsive styling with **Tailwind CSS**.

---

<!-- ## 🚀 Demo
> _Optional: add your Vercel link here_ -->

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


## 🛠️ Getting Started
### Prerequisites
- **Node.js 18+**

### Install & Run
```bash
# 1) Clone
git clone https://github.com/mahmoudSElsebaey/Social-Feed.git
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

- GitHub: [_link_](https://github.com/mahmoudSElsebaey)
- LinkedIn:[ _link_](https://www.linkedin.com/in/mahmoud-elsebaey-888797223/)

