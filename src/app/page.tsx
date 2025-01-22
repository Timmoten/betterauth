import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getPosts } from "./actions/blog";
import PostCard from "@/components/blogpost-card";
import AddPostDialog from "@/components/add-post-dialog";
//
// import { redirect } from "next/navigation";

export default async function Page() {
  const posts = await getPosts();
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if(!session) {
    <p>not logged in</p>
  }
  return (
    <main className="flex flex-col container mx-auto py-12 gap-2">
      {session && <div className="flex justify-end mb-6">
        <AddPostDialog />
      </div>}
      

      {posts.map((post) => (
        <div key={post.id}>
          <PostCard post={post} user={post.author} />
        </div>
      ))}
    </main>
  );
}

// npx prisma init

// npm install better-auth

// npx prisma generate //lade in något enkelt så att det gick att köra

// npx @better-auth/cli generate

// npx prisma db push

//   npm run dev 