import { GalleryItem } from "@/lib/types";

// photo-1, 2, 3: community/health photos from Unsplash (free use)
const p1 = "https://framerusercontent.com/images/7E3nqiTmmCAKr7Ynna3VJv5tsQs.jpg";
const p2 = "https://framerusercontent.com/images/nmBXjeuU5Pr3XtsNLTfUj7YhY.jpg";
const p3 = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop";
const p4 = "https://images.unsplash.com/photo-1551601651-bc60f254d532?w=800&auto=format&fit=crop";
const p5 = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop";
const p6 = "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop";

export const gallery: GalleryItem[] = [
  { image: p1, caption: "Community health forum in Dar es Salaam", category: "Events" },
  { image: p2, caption: "Patient safety awareness campaign", category: "Campaigns" },
  { image: p3, caption: "Youth advocacy training workshop", category: "Training" },
  { image: p4, caption: "Community health volunteers at work", category: "Volunteers" },
  { image: p5, caption: "Policy dialogue with health stakeholders", category: "Advocacy" },
  { image: p6, caption: "Annual PSA Tanzania team gathering", category: "Team" },
];
