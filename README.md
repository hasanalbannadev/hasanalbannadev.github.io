# Hasan Al Banna — Portfolio (Next.js)

ডিজাইন ইমেজ অনুযায়ী Next.js + Tailwind CSS v4 পোর্টফোলিও। সব কনটেন্ট `src/data/portfolio.js` ফাইলে।

## চালানোর নিয়ম (Node.js 20.9+ লাগবে)

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # প্রোডাকশন বিল্ড
npm start
```

## ফাইল স্ট্রাকচার

```
src/
  app/        layout.jsx · page.jsx · globals.css (কালার/ফন্ট এখানে)
  data/       portfolio.js   ← সব লেখা, লিংক, প্রজেক্ট, স্কিল, অভিজ্ঞতা
  components/ Navbar · Hero · About · Skills · Projects · Experience · Contact · Footer
              Icons.jsx (সব আইকন) · Ui.jsx (হেডিং/লিংক)
public/
  images/     প্লেসহোল্ডার ছবি (আসল ছবি দিয়ে বদলান)
  cv/         Hasan_Al_Banna_CV.pdf (আসল CV দিয়ে বদলান)
```

## আসল ছবি বসানো

1. আসল ছবি `public/images/` এ রাখুন (png / jpg / webp / svg সব চলবে)।
2. `src/data/portfolio.js` এ সেই ছবির path বদলান:
   - প্রোফাইল ছবি → `profile.photo`
   - প্রজেক্ট ছবি → `projects[...].image`
   - স্কিল আইকন → `skills[...]` এ `image: "/images/skills/flutter.png"` যোগ করুন
3. একই নামে (যেমন `profile.svg`) ফাইল রিপ্লেস করলে কোড বদলাতে হবে না।

## CV ডাউনলোড

`public/cv/Hasan_Al_Banna_CV.pdf` ফাইলটা আসল CV দিয়ে রিপ্লেস করুন। Navbar ও Experience সেকশনের
"Download CV" বাটনে ক্লিক করলে সেটাই ডাউনলোড হবে। অন্য নাম দিলে `profile.cv` ও `profile.cvFileName` বদলান।

## নতুন প্রজেক্ট কার্ড যোগ করা

`src/data/portfolio.js` এর `projects` অ্যারেতে একটা ব্লক কপি করে বসান:

```js
{
  category: "flutter",          // "flutter" | "web" | "cloud"
  title: "My New App",
  badge: "Flutter App",
  description: "Short description...",
  tech: ["Flutter", "Dart"],
  image: "/images/my-new-app.png",
  demo: "https://...",
  github: "https://github.com/...",
}
```

কোনো গ্রুপে কার্ড `limit` এর বেশি হলে "View All ..." বাটনে চাপলে বাকিগুলো দেখাবে।
`cloud` প্রজেক্টে `features: [...]` দিলে ডানের "Key Features" প্যানেলে দেখাবে।

## অন্যান্য

- সোশ্যাল লিংক, ফোন, ইমেইল → `profile` অবজেক্ট
- নতুন স্কিল → `skills` অ্যারে (`extra: true` দিলে "View All Skills" চাপলে দেখাবে)
- ব্র্যান্ড আইকনগুলো সরল আনুমানিক SVG — আসল লোগো ছবি দিলে সেটাই দেখাবে
